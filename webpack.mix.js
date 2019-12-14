const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const config = require('./webpack.config');

mix.webpackConfig(config);

if ( ! mix.inProduction()) {
  mix.webpackConfig({
      devtool: 'inline-source-map'
  })
}

mix.react('resources/js/app.js', 'public/js')
  // TODO https://github.com/JeffreyWay/laravel-mix/issues/1914
  .extract(['react', 'redux', '@material-ui/core'])
  .sass('resources/sass/app.scss', 'public/css');
