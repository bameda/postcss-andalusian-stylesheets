# PostCSS Andalusian Stylesheets [![Build Status][ci-img]][ci]

[PostCSS] plugin for writing Andalusian Stylesheets..

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/bameda/postcss-andalusian-stylesheets.svg
[ci]:      https://travis-ci.org/bameda/postcss-andalusian-stylesheets

```css
.foo {
    reondeao: 3px;
    fondo: #fff;
    ancho: 300px;
    alto: 200px;
    flota: izquierda;
    en-to-lo-arto: 10px;
    abajo: 0px;
    izquierda: 100px;
    derecha: 100px;
    espaciado: -1px;
    puntero: manito !importantisimo;
    text-transform: mayuscula;
    linde: 100px 50px;
}
```

```css
.foo {
    border-radius: 3px;
    background: #fff;
    width: 300px;
    height: 200px;
    float: left;
    top: 10px;
    bottom: 0px;
    left: 100px;
    right: 100px;
    letter-spacing: -1px;
    cursor: pointer !important;
    text-transform: uppercase;
    margin: 100px 50px;
}
```

## Usage

```js
postcss([ require('postcss-andalusian-stylesheets') ])
```

See [PostCSS] docs for examples for your environment.


> This plugin is based on [ismamz/postcss-spanish-stylesheets](https://github.com/ismamz/postcss-spanish-stylesheets)
