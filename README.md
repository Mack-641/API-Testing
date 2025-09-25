# API-Testing
API testing and feedback

## API Testing part 1
 
### Introduction
- How to get authentication token or API key
- Scalar API- Import files for Open API Doc – works well.
-----------------------------------------------------------
 
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

----------------------------------------------------------------------------------------------------------
### APIs in Swagger but not in Scalar

1. Candles Data
    - status: Success 200
    - Remove (OHLCV), as it returns only Close Price and Volume data, unless we can return all
    - Well documented

2. Trading Volume Analytics
    - status for all: Failed 404 error
    - Well documented
