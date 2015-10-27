var postcss = require('postcss');

module.exports = postcss.plugin('postcss-andalusian-stylesheets', function (opts) {
    opts = opts || {};

    return function (css) {
        css.eachDecl(function transformDecl(decl) {
            decl.prop = decl.prop.replace('fondo', 'background');
            decl.prop = decl.prop.replace('flota', 'float');
            decl.prop = decl.prop.replace('ancho', 'width');
            decl.prop = decl.prop.replace('alto', 'height');
            decl.prop = decl.prop.replace('redondeado', 'border-radius');
            decl.value = decl.value.replace('izquierda', 'left');
            decl.prop = decl.prop.replace('izquierda', 'left');
            decl.value = decl.value.replace('derecha', 'right');
            decl.prop = decl.prop.replace('derecha', 'right');
            decl.value = decl.value.replace('en-to-lo-arto', 'top');
            decl.prop = decl.prop.replace('en-to-lo-arto', 'top');
            decl.value = decl.value.replace('abajo', 'bottom');
            decl.prop = decl.prop.replace('abajo', 'bottom');
            decl.prop = decl.prop.replace('espaciado', 'letter-spacing');
            decl.value = decl.value.replace('subrayado', 'underline');
            decl.prop = decl.prop.replace('puntero', 'cursor');
            decl.value = decl.value.replace('manito', 'pointer');
            decl.value = decl.value.replace('mayuscula', 'uppercase');

            if (decl.value.indexOf('!importantisimo') >= 0) {
                decl.value = decl.value.replace(/\s*!importantisimo\s*/, '');
                decl.important = true;
            }
        });
    };
});
