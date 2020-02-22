# Allowing cors in laravel

1. Create a middleware by doing `php artisan make:middleware  Cors`.
2. Edit the middleware -

```php
    <?php
    namespace App\Http\Middleware;
    use Closure;
    class Cors
    {
    public function handle($request, Closure $next)
    {
        return $next($request)
        ->header(‘Access-Control-Allow-Origin’, ‘*’)
        ->header(‘Access-Control-Allow-Methods’, ‘GET, POST, PUT, DELETE, OPTIONS’)
        ->header(‘Access-Control-Allow-Headers’, ‘X-Requested-With, Content-Type, X-Token-Auth, Authorization’);
    }
    }
```

3. Add the middleware to `$routeMiddleware` in `app\Http\Kernel.php` - 
4. Use middleware wherever you like