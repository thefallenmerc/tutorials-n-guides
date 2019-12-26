# Accessing user IP in Laravel

1. Get access to user request by `$request` or `request()` or 'Request'
2. call the `ip()` method as per your convinience
```php
        // by injected `Request` object
        $ip = $request->ip();
        // or by global helper
        $ip = request()->ip();
        // or by the Request Facade
        $ip = Request::ip();
```
4. Thats all folks