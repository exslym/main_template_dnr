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
- `Image Optimization` via **image-minimizer-webpack-plugin** & **svgo**

When you run `npm run build`:
<br />The css file moves to a separate bundle file and gets it included in the head of the `index.html` via [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin).
<br />All image files (svg, png, jpg/jpeg, webp) gets compressed with lossless quality via [image-minimizer-webpack-plugin](https://github.com/webpack-contrib/image-minimizer-webpack-plugin).

Place all external connected files (jQuery and others) in ./tools and provide them path in html file.
