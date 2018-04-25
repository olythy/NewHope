let mix = require('laravel-mix');


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
 
mix.webpackConfig({ devtool: "inline-source-map" });

mix.react('resources/assets/src/index.js', 'public/js')
   .sass('resources/assets/src/index.scss', 'public/css').sourceMaps();
   
mix.react('resources/assets/auth/js/app.js', 'public/js')
   .sass('resources/assets/auth/sass/app.scss', 'public/css').sourceMaps();