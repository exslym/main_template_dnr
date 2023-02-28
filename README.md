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

### Deployment to GiitHub Pages (Optional)

```
npm run deploy
```

This adds gh-pages branch to github repository and deploy built project there, then you can host site from the gh-pages branch via GitHub Pages.

### Features:

- `ES6` Support **via babel (v7)**
- `SASS` Support via **sass-loader**
- `Linting` via **eslint** & **@babel/eslint-parser**
- `Formatter` via **prettier**
- `Autoprefix` via **postcss-preset-env**

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.

Place all external connected files (jQuery and others) in ./tools and provide them path in html file
