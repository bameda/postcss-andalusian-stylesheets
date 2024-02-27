# PostCSS Andalusian Stylesheets [![Build Status][ci-img]][ci]

[![](https://nodei.co/npm/postcss-andalusian-stylesheets.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/postcss-andalusian-stylesheets)

[PostCSS] plugin for writing Andalusian Stylesheets..

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/bameda/postcss-andalusian-stylesheets.svg
[ci]:      https://travis-ci.org/bameda/postcss-andalusian-stylesheets

<table>
    <tbody>
        <tr>
            <th align="center">CSS original code</th>
            <th align="center">postcss-andalusian-stylesheets</th>
        </tr>
        <tr>
            <td>
                <pre lang="css">
.foo {
    border-radius: 3px;
    background: white;
    width: 300px;
    height: 200px;
    float: left;
    top: 2rem;
    bottom: 20px;
    left: 100px;
    right: 100px;
    letter-spacing: -1px;
    cursor: pointer !important;
    text-transform: uppercase;
    margin: 100px 50px;
    animation: 5s;
    animation-direction: alternate;
}
                </pre>
            </td>
            <td>
                <pre lang="css">
.foo {
    reondeao: 3mijillah;
    detrah: encalao;
    ansho: 300mijillah;
    largo: 200mijillah;
    agarrao: isquierdah;
    en-to-lo-arto: 2peasoh;
    por-lo-bahini: 20mijillah;
    isquierdah: 100mijillah;
    deresha: 100mijillah;
    huecoh: -1mijillah;
    fleshita: manita !arfavó;
    lah-letrah: en-grande;
    separao: 100mijillah 50mijillah;
    jorgorio: musho 5s;
    jorgorio-padonde: palante-patrâ;
}
                </pre>
            </td>
        </tr>
    <table>
<tbody>

## Usage

```shell
npm install --save-dev postcss postcss-andalusian-stylesheets
```

```js
postcss([ require('postcss-andalusian-stylesheets') ])
```

See [PostCSS] docs for examples for your environment.


## Contribute

Fork the [repo](https://github.com/bameda/postcss-andalusian-stylesheets)

Setup the devel env with ```npm install```

Run ```gulp``` (it use gulp 4)

Edit ```src/properties.json``` or ```src/values.json```. You can translate one item to only one value or several. For example

```json
{
    (...),
    "blue": [
        "asú",
        "azú"
    ],
    (...)
    "color": "coló",
    (...)
}
```
Add some tests if you want.

Add your name to ```AUTHORS.md```.

Make me a PR.


## Thanks

This plugin is based on [ismamz/postcss-spanish-stylesheets](https://github.com/ismamz/postcss-spanish-stylesheets)  and [Semigradsky/postcss-russian-stylesheets](https://github.com/Semigradsky/postcss-russian-stylesheets/blob/master/src/index.js)
