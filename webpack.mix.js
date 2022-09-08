// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/js/app.js', 'js').sass('src/scss/styles.scss', 'css').setPublicPath('dist');