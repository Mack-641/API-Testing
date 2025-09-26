# API-Testing

API testing and feedback

## API Testing

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

### Advanced-queries

    - status: Success 200
    - Well documented

### Trades

1. Generate a price histogram for trades for a specific exchange and symbol
    - status: Failed 404 error
    - remove symbol, use trading pair (BTC-ZAR)
    - examples for 500 and 503 show wrong error code
    - Well documented

2. List all exchanges with trade data
    - status: Failed 404 error
    - examples for 500 show wrong error code
    - Well documented

3. List trading pairs available on an exchange
    - status: Failed 404 error
    - examples for 400+ show wrong error code
    - Well documented

4. List available currencies on an exchange​
    - status: Failed 404 error
    - examples for 400+ show wrong error code
    - Well documented

5. Generate a price histogram for trades
    - add 'and for specific exchanges'
    - status: Failed 404 error
    - remove symbol, use trading pair (BTC-ZAR)
    - examples for 400+ show wrong error code
    - Well documented

6. Get trade data for a specific exchange and symbol​
    - status: Failed 404 error
    - remove symbol, use trading pair (BTC-ZAR)
    - examples for 500 and 503 show wrong error code
    - Well documented

### Bitcoin

1. Get Bitcoin blocks
    - status: failed 500
    - example for 500 missing
    - no description
2. Get latest Bitcoin block
    - status: success 200
    - example for 404, 500 missing
    - no description
3. Get Bitcoin block by hash​
    - status: failed 503
    - example for 404, 500 missing
    - no description
4. Get Bitcoin block by height
    - status: failed 503
    - example for 404, 500 missing
    - no description
5. Get Bitcoin transactions
    - status: success 200
    - example for 500 missing
    - no description
6. Get Bitcoin transaction by hash
    - status: success 200
    - example for 404, 500 missing
    - no description
7. Get Bitcoin addresses with balances
    - status: failed 500
    - example for 404, 500 missing
    - no description
8. Get Bitcoin address details
    - status: failed 404
    - example for 500 missing
    - no description
9. Get transactions for a Bitcoin address
    - status: success 200
    - example for 500 missing
    - no description
10. Get balance for a Bitcoin address
    - status: failed 500
    - example for 404, 500 missing
    - no description
11. Get balance changes for a Bitcoin address
    - status: failed 500
    - example for 500 missing
    - no description
12. Get Bitcoin balance changes​
    - status: failed 500
    - example for 500 missing, parameter required
    - no description

---

### Models/Schemas

    - same for Scalar and Swagger

---

### APIs in Swagger but not in Scalar

1. Analytics
   - Get Bitcoin address balance history
     - status: failed 500
     - well documented
   - Get bitcoin address inbound analysis
     - status: success 200
     - well documented
     - no labels as yet in example
   - Get bitcoin address outbound analysis
     - status: success 200
     - well documented
     - no labels as yet in example
   - Get bitcoin daily address activity
     - status: failed 500
     - well documented
   - Get bitcoin transaction volume analysis
     - status: failed 500
     - well documented

2. Arbitrage
   - Get daily arbitrage gap between Binance BTC/USDC and Valr BTC/ZAR
     - status: Success 200
     - well documented
     - works without auth
   - Get arbitrage opportunities across multiple currency pairs
     - add 'and exchanges'
     - status: Success 200
     - well documented
     - works without auth

3. Ethereum Blockchain Data
     - Get Ethereum blocks
       - status: success 200, data is blank
       - well documented
     - Get latest Ethereum block
       - status: failed 404
       - well documented
     - Get Ethereum block by hash​
       - status: failed 404
       - well documented
     - Get Ethereum block by number
       - status: failed 400
       - should it be number or height, any value is invalid
     - Get Ethereum transactions
       - status: success 200, data is blank
       - well documented
     - Get Ethereum transaction by hash
       - status: failed 404
       - well documented
     - Get Ethereum addresses with balances
       - status: success 200, data is blank
       - well documented
     - Get transactions for a specific Ethereum address
       - status: success 200, data is blank
       - well documented
     - Get balance for a specific Ethereum address
       - status: failed 404
       - well documented
     - Get all ERC-20 tokens
       - status: success 200, data is blank
       - well documented
     - Get ERC-20 token by address
       - status: failed 404
       - well documented

4. Market Data - Latest Candles
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

5. Markets
    - Get available metal bases
      - status: Success 200
      - needs description
      - works without auth
    - Get metal prices
      - status: Success 200, but data array is empty
      - needs description
      - works without auth
    - Get metal price history for a specific base-quote pair
      - status: Success 200, but data array is empty
      - needs description
      - works without auth
    - Get latest metal price for a specific base-quote pair
      - status: failed 404 error
      - needs description
      - works without auth
    - Get moneyweb market data
      - status: Success 200
      - needs description
      - works without auth
    - Get available moneyweb markets
      - status: Success 200
      - needs description
      - works without auth
    - Get moneyweb market history for a specific market
      - status: Success 200
      - needs description
      - works without auth
    - Get latest moneyweb data for a specific market
      - status: Success 200
      - needs description
      - works without auth

6. Candles Data
    - status: Success 200
    - Remove (OHLCV), as it returns only Close Price and Volume data, unless we can return all
    - Well documented
    - works without auth

7. Documents
   - List uploaded documents
     - status: failed 500
     - well documented
   - Process pending documents
     - status: failed 500
     - well documented
   - Upload document for RAG processing
     - status: Gets stuck
     - well documented

8. Trading Volume Analytics
    - status for all: Failed 404 error
    - Well documented
