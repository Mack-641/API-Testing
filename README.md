# API-Testing

API testing and feedback

## API Testing part 2

### Introduction

- How to get authentication token or API key
- Scalar API- Import files for Open API Doc – works well.

---

### Exchange market data

#### Candles Endpoint (OHLCV -> maybe include definition in glossary)

1. List all exchanges with available candle data
    - status: Failed 404 error
    - Well documented

2. Get available candle intervals
    - status: Failed 404 error
    - Well documented

3. List all trading pairs for a specific exchange
    - remove ^[a-z0-9-]+$, could be confusing for user
    - status: Failed 404 error
    - Examples can filter data via: Major crypto pairs, Fiat, local exchange pairs
      - should there be an option for this in the endpoint
    - Well documented

4. List all currencies for a specific exchange
    - remove ^[a-z0-9-]+$
    - status: Failed 404 error
    - Examples can filter data via: International exchange currencies, local exchange, stablecoin-focused
      - should there be an option for this in the endpoint
    - Well documented

5. List available timeframes for a specific exchange and symbol
    - remove symbol, use trading pair (BTC-ZAR)
    - status: Failed 404 error
    - Well documented

6. Get candle data for a specific exchange, symbol, and interval
    - remove symbol, use trading pair (BTC-ZAR)
    - status: Failed 404 error
    - Well documented

### Orderbooks​

1. Get orderbook data for a specific exchange and symbol​
    - status: Failed 404 error
    - remove symbol, use trading pair (BTC-ZAR)
    - examples for 500 and 503 show wrong error code
    - Well documented

2. List all exchanges with available orderbook data
    - status: Failed 404 error
    - examples for 503 show wrong error code, (change exchanges to ones we have for status code 200)
    - Well documented

3. List all currencies for a specific exchange​
    - status: Failed 404 error
    - examples for 500 and 503 show wrong error code
    - Well documented

4. Get available orderbook depths for a specific exchange and symbol
    - status: Failed 404 error
    - remove symbol, use trading pair (BTC-ZAR)
    - examples for 500 and 503 show wrong error code
    - Well documented

---

### Models/Schemas

    - same for Scalar and Swagger

---

### APIs in Swagger but not in Scalar

1. Arbitrage
   - Get daily arbitrage gap between Binance BTC/USDC and Valr BTC/ZAR
     - status: Success 200
     - well documented
     - works without auth
   - Get arbitrage opportunities across multiple currency pairs
     - add 'and exchanges'
     - status: Success 200
     - well documented
     - works without auth

2. Market Data - Latest Candles
     - Get latest candles from South African exchanges
       - status: Success 200
       - well documented
       - works without auth
     - Get available base currencies for latest candles
       - status: Success 200
       - well documented
       - works without auth
     - Get available exchanges for latest candles
       - status: Success 200
       - well documented
       - works without auth

3. Candles Data
    - status: Success 200
    - Remove (OHLCV), as it returns only Close Price and Volume data, unless we can return all
    - Well documented
    - works without auth

4. Documents
   - List uploaded documents
     - status: failed 500
     - well documented
   - Process pending documents
     - status: failed 500
     - well documented
   - Upload document for RAG processing
     - status: Gets stuck
     - well documented

5. Trading Volume Analytics
    - status for all: Failed 404 error
    - Well documented
