# Add CORS header

### Make the following middleware

1. Simple

``` javascript
    app.use(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        next();
    }
```

2. For All

``` javascript
    app.use(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    }
```
