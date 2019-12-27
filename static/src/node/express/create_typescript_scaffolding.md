# Create a Typescript based express js project skeleton

1. Create project folder, in our case `t-ex`
2. open the directory in terminal and run `npm init -y`
3. save the dev dependencies by doing `npm i --save-dev tsc typescript tslint @types/express`
4. save express by doing `npm i express`
5. make `tsconfig.json` by running `node_modules\.bin\tsc --init` 
6. make `tslint` by running `node_modules\.bin\tslint --init`
7. add `no-console` to `jsRules` of `tslint.json` and set it to `false` so that we can use `console.log`
8. add following to `tsconfig.json` and replace all previous
    ```json
        {
          "include": [
            "src/**/*"
          ],
          "exclude": [
            "dist",
            "node_modules"
          ],
          "compilerOptions": {
            "module": "commonjs",
            "esModuleInterop": true,
            "target": "ES6",
            "moduleResolution": "Node",
            "sourceMap": false,
            "outDir": "dist"
          },
          "lib": "es2015"
        }
    ```
9. add build script to 
3. Thats all folks