### Installation

```
npm install
```

### Start Dev Server

```
npm start
```

### Build Prod Version

```
npm run build
```

### Features:

- `ES6` Support **via babel (v7)**
- `SASS` Support via **sass-loader**
- `Linting` via **eslint** & **@babel/eslint-parser**
- `Formatter` via **prettier**
- `Autoprefix` via **postcss-preset-env**

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.

All external libs (jQuery and others) you should put in ./tools folder and provide the path in html file
