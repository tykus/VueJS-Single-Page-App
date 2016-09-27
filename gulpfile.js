const elixir = require('laravel-elixir');

require('laravel-elixir-vue');
require('laravel-elixir-vueify');
require('laravel-elixir-browserify-official');
require('laravel-elixir-livereload');
 
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.browserify('main.js')
       .livereload()
       .styles([
          './node_modules/normalize.css/normalize.css'
       ]);
});
