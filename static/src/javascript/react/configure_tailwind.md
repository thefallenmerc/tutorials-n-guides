# Configure Tailwind

1. `npm i tailwindcss --save-dev` 

2. ` ./node_modules/.bin/tailwind init tailwind.config.js` 

3.create a file `src/styles/tailwind.src.css` and write - 

```css
@tailwind preflight;
@tailwind components;
@tailwind utilities;
```

4.add following scripts to `package.json` 

``` json
    "tw:css": "node_modules\\.bin\\tailwind build src/styles/tailwind.src.css -c tailwind.config.js -o src/styles/tailwind.css",
    "start": "npm run tw:css && react-scripts start",
    "build": "npm run tw:css && react-scripts build",
```
