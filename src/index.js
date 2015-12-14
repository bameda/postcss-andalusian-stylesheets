import postcss from 'postcss';

import andalusianProperties from './properties.json';
import andalusianValues from './values.json';


export default postcss.plugin('postcss-andalusian-stylesheets', () => {
    return (css) => {
        css.walkDecls(decl => {
            Object.keys(andalusianProperties).forEach(property => {
                const andalusianProperty = andalusianProperties[property];
                if (andalusianProperty) {
                    decl.prop === andalusianProperty && (decl.prop = property);
                }
            });


            if (decl.value.indexOf('!arfavó') >= 0) {
                decl.value = decl.value.replace(/\s*!arfavó\s*/, '');
                decl.important = true;
            }
        });

        Object.keys(andalusianValues).forEach(value => {
            const andalusianValue = andalusianValues[value];

            if (andalusianValue) {
                if (typeof andalusianValue === 'string') {
                    css.replaceValues(new RegExp(andalusianValue, 'g'), { fast: andalusianValue }, value);
                } else {
                    andalusianValue.forEach(val => {
                        css.replaceValues(new RegExp(val, 'g'), { fast: val }, value);
                    });
                }
            }
        });
    };
});
