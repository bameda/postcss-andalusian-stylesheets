# PostCSS Andalusian Stylesheets [![Build Status][ci-img]][ci]

[PostCSS] plugin for writing Andalusian Stylesheets..

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/bameda/postcss-andalusian-stylesheets.svg
[ci]:      https://travis-ci.org/bameda/postcss-andalusian-stylesheets

```css
.foo {
    reondeao: 3px;
    detrah: #fff;
    ansho: 300px;
    largo: 200px;
    agarrao: isquierdah;
    en-to-lo-arto: 10px;
    por-lo-bahini: 0px;
    isquierdah: 100px;
    deresha: 100px;
    huecoh: -1px;
    puntero: manito !pisha;
    lah-letrah: en-grande;
    separao: 100px 50px;
    fiezta: musha 5s;
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
    animation: musha 5s;
}
```

## Usage

```js
postcss([ require('postcss-andalusian-stylesheets') ])
```

See [PostCSS] docs for examples for your environment.


> This plugin is based on [ismamz/postcss-spanish-stylesheets](https://github.com/ismamz/postcss-spanish-stylesheets)
