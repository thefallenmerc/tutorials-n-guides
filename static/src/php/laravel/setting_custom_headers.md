# Setting Custom Headers in Laravel

1. Create a middleware
2. Include it in `app\Http\Kernel.php` as per convinience
3. Set the following code in the middleware\'s handle function - 
```php
        $response = $next($request);
        return $response
        ->header('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
        ->header('X-Content-Type-Options', 'nosniff')
        ->header('X-Frame-Options', 'sameorigin')
        ->header('X-XSS-Protection', '1; mode=block');
```
4. Thats all folks