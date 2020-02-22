# Send proper json response on 404

1.edit the `render` method of `App\Exceptions\Handler.php` 

``` php
        if ($exception instanceof ModelNotFoundException && $request->wantsJson()) {
            return response()->json(['message' => 'Not Found!'], 404);
        }
```
