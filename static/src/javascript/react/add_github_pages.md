### Add Github Pages to React App

1. Do `npm i -D gh-pages`,

2. put following in `package.json` scripts - 
```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
```

3. run `npm run deploy` to deploy.

4. Push