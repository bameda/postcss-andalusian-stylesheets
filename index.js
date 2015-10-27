var postcss = require('postcss');

module.exports = postcss.plugin('postcss-andalusian-stylesheets', function (opts) {
    opts = opts || {};

    return function (css) {
        css.walkDecls(function transformDecl(decl) {
            decl.prop = decl.prop.replace('detrah', 'background');
            decl.prop = decl.prop.replace('agarrao', 'float');
            decl.prop = decl.prop.replace('ansho', 'width');
            decl.prop = decl.prop.replace('largo', 'height');
            decl.prop = decl.prop.replace('reondeao', 'border-radius');
            decl.value = decl.value.replace('isquierdah', 'left');
            decl.prop = decl.prop.replace('isquierdah', 'left');
            decl.value = decl.value.replace('deresha', 'right');
            decl.prop = decl.prop.replace('deresha', 'right');
            decl.value = decl.value.replace('en-to-lo-arto', 'top');
            decl.prop = decl.prop.replace('en-to-lo-arto', 'top');
            decl.value = decl.value.replace('por-lo-bahini', 'bottom');
            decl.prop = decl.prop.replace('por-lo-bahini', 'bottom');
            decl.prop = decl.prop.replace('huecoh', 'letter-spacing');
            decl.value = decl.value.replace('subrayao', 'underline');
            decl.prop = decl.prop.replace('fleshita', 'cursor');
            decl.value = decl.value.replace('manito', 'pointer');
            decl.value = decl.value.replace('en-grande', 'uppercase');
            decl.prop = decl.prop.replace('separao', 'margin');
            decl.prop = decl.prop.replace('lah-letrah', 'text-transform');

            if (decl.value.indexOf('!pisha') >= 0) {
                decl.value = decl.value.replace(/\s*!pisha\s*/, '');
                decl.important = true;
            }
        });
    };
});
