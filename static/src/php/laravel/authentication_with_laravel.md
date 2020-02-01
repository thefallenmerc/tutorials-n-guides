# Authentication with laravel

1. Create new `laravel` project by doing `laravel new app`
2. install `passport` using `composer require `laravel/passport`
3. run `php artisan migrate`
4. run `php artisan passport:install`
5. add `HasApiTokens` trait to `User` model
6. change `config/auth.php` so that it looks like following - 

    ```php
        'api' => [
            'driver' => 'passport',
            'provider' => 'users',
            'hash' => false,
        ],
    ```

7. Add a new route for login in `api.php` routes file

    ```php
        Route::post('/login', 'AuthController@login');
    ```

8. Add new `AuthController` by running `php artisan make:controller AuthController` and add `login` method to it - 

    ```php
        public function login(Request $request)
        {
            $validator = Validator::make($request->all(), [
                'email' => 'exists:users|email|required',
                'password' => 'required'
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors()->all(), 200);
            }

            if (!auth()->attempt($validator->validated())) {
                return response()->json(['message' => 'unauthorized'], 401);
            } else {
                $token = auth()->user()->createToken('PAT')->accessToken;
                return response()->json(['token' => $token]);
            }
        }
    ```

9. You can now use the `auth:api` middleware, but for unauthenticated requests add following route to `api.php` - 

    ```php
        Route::get('/login', function () {
            return response()->json(['message' => 'unauthenticated!']);
        })->name('login');
    ```
