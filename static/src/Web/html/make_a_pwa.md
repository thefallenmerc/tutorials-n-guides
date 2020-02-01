# Make a PWA

1. Add following to the `index.html`

```html
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="description" content="A PWA" />
  <link rel="manifest" href="/manifest.json" />
  <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
```

2. Add a `manifest.json` and make sure the assets are available and not missing, or the app wont work

```json
{
  "short_name": "Sample PWA App",
  "name": "This is a sample PWA App from The fallen merc",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

```
