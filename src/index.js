import andalusianProperties from './properties.json'
import andalusianValues from './values.json'

const pluginCreator = () => {
  return {
    postcssPlugin: 'postcss-andalusian-stylesheets',
    Once (root) {
      root.walkDecls(decl => {
        Object.keys(andalusianProperties).forEach(property => {
          let andalusianProperty = andalusianProperties[property]
          if (andalusianProperty) {
            decl.prop === andalusianProperty && (decl.prop = property)
          }
        })

        if (decl.value.includes('!arfavó')) {
          decl.value = decl.value.replace(/\s*!arfavó\s*/, '')
          decl.important = true
        }
      })

      Object.keys(andalusianValues).forEach(value => {
        let andalusianValue = andalusianValues[value]

        if (andalusianValue) {
          if (typeof andalusianValue === 'string') {
            /* eslint-disable security/detect-non-literal-regexp */
            root.replaceValues(
              new RegExp(andalusianValue, 'g'),
              { fast: andalusianValue },
              value
            )
          } else {
            andalusianValue.forEach(val => {
              /* eslint-disable security/detect-non-literal-regexp */
              root.replaceValues(new RegExp(val, 'g'), { fast: val }, value)
              /* eslint-enable security/detect-non-literal-regexp */
            })
          }
        }
      })
    }
  }
}

pluginCreator.postcss = true

export default pluginCreator
