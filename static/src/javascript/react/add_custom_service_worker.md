# How to add a custom service worker to react cra template

1.in file `index.js` do the following - 

``` javascript
    serviceWorker.register();
```

2.open `src/serviceWorker.js` and look at the method `export function register(config)` , 
edit the `load` eventListener and change to the following - 

``` javascript
    const swUrl = `${process.env.PUBLIC_URL}/sw.js` ;
```

3.create two files in `src` , namely `sw-build.js` ( Provides the build instructions for the custom Service Worker generation.)
and `sw-template.js` (Is the template for Workbox Service Worker. Custom caching rules go here.)

4.edit `src/sw-build.js` -

``` javascript
    const workboxBuild = require('workbox-build');
    // NOTE: This should be run *AFTER* all your assets are built
    const buildSW = () => {
        // This will return a Promise
        return workboxBuild.injectManifest({
            swSrc: 'src/sw-template.js', // this is your sw template file
            swDest: 'build/sw.js', // this will be created in the build step
            globDirectory: 'build',
            globPatterns: [
                '**\/*.{js,css,html,png}',
            ]
        }).then(({
            count,
            size,
            warnings
        }) => {
            // Optionally, log any warnings and details.
            warnings.forEach(console.warn);
            console.log( `${count} files will be precached, totaling ${size} bytes.` );
        });
    }
    buildSW();
```

5. Provide Custom Caching Rules in `src/sw-template.js` 

    ```javascript
    if ('function' === typeof importScripts) {

  importScripts(

    'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'

  ); 
  /* global workbox */
  if (workbox) {

    console.log('Workbox is loaded');

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([]);

    /* custom cache rules*/
    workbox.routing.registerNavigationRoute('/index.html', {
        blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
        });

    workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg)$/,
        workbox.strategies.cacheFirst({
            cacheName: 'images',
            plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
            ],
        })
        );

    } else {
        console.log('Workbox could not be loaded. No Offline support');
    }
    }
    ```

6. run `npm install workbox-build --save-dev` in not installed already

7. change commands in `package.json` to - 

    ```json
    {  
    "build-sw": "node ./src/sw-build.js",
    "clean-cra-sw": "node_modules\\.bin\\rimraf build/precache-manifest.*.js && node_modules\\.bin\\rimraf build/service-worker.js",
    "build": "react-scripts build && npm run build-sw && npm run clean-cra-sw",
    "start-sw": "php -S 0.0.0.0:80 -t build",
    }
    ```
