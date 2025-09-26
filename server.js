const express = require("express");
const { apiReference } = require("@scalar/express-api-reference");
const fs = require("fs");
const Parser = require("rss-parser");

const app = express();
const port = process.env.PORT || 3000;

//   Middleware
app.use(express.json());

//   Load OpenAPI spec
let openapiSpec;
try {
  openapiSpec = JSON.parse(fs.readFileSync("./openapi.json", "utf8"));
} catch (err) {
  console.error("⚠️ Failed to load openapi.json:", err.message);
  openapiSpec = {};
}

//   RSS parser instance
const parser = new Parser();

//   Feed mapping
const feeds = {
  cryptopanic: "https://cryptopanic.com/news/rss/",
  coindesk: "https://www.coindesk.com/arc/outboundfeeds/rss/?outputType=xml",
  cointelegraph: "https://cointelegraph.com/rss",
  decrypt: "https://decrypt.co/feed",
  blockchainnews: "https://blockchain.news/RSS/",
  ccn: "https://www.ccn.com/rss-feeds/crypto/",
  tokeninsight: "https://tokeninsight.com/rss/news",
  bitrss: "https://bitrss.com/rss.xml",
};

//   Simple in-memory cache
const cache = {};
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function getCacheKey(source) {
  return `feed_${source}`;
}

//   Routes

// Hello route
app.get("/hello", (req, res) => {
  res.json({ message: "Hello, world!" });
});

// OpenAPI JSON
app.get("/openapi.json", (req, res) => {
  res.json(openapiSpec);
});

// News route
app.get("/news", async (req, res) => {
  const { source } = req.query;

  if (!source) {
    return res.status(400).json({ error: "Missing 'source' parameter" });
  }

  // Allow multiple sources: ?source=coindesk,cointelegraph
  const sources = source.split(",").map((s) => s.trim().toLowerCase());

  const results = {};

  for (const src of sources) {
    const feedUrl = feeds[src];
    if (!feedUrl) {
      results[src] = { error: "Invalid source" };
      continue;
    }

    const cacheKey = getCacheKey(src);
    const now = Date.now();

    // Serve from cache if fresh
    if (cache[cacheKey] && now - cache[cacheKey].timestamp < CACHE_TTL) {
      results[src] = cache[cacheKey].data;
      continue;
    }

    try {
      const feed = await parser.parseURL(feedUrl);
      const articles = feed.items.map((item) => ({
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        source: src,
      }));

      results[src] = articles;

      // Save to cache
      cache[cacheKey] = {
        timestamp: now,
        data: articles,
      };
    } catch (err) {
      console.error(`❌ Error fetching ${src}:`, err.message);
      results[src] = { error: "Failed to fetch feed" };
    }
  }

  res.json(results);
});

//   Scalar API docs
app.use(
  "/docs",
  apiReference({
    spec: {
      url: "/openapi.json",
    },
    theme: "default", // you can change the theme
  })
);

//   Start server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
  console.log(`📖 Docs available at http://localhost:${port}/docs`);
});
