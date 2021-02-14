import postcss from 'postcss'

import plugin from '../'

const test = (input, output, opts, done) => {
  postcss(plugin(opts))
    .process(input, { from: undefined })
    .then(result => {
      expect(result.css).toEqual(output)
      expect(result.warnings()).toHaveLength(0)
      done()
    })
    .catch(done)
}

describe('postcss-andalusian-stylesheets', () => {
  it('converts reondeao to border-radius', done => {
    test('a{ reondeao: 3px; }', 'a{ border-radius: 3px; }', {}, done)
  })

  it('converts detrah to background', done => {
    test('a{ detrah: #fff; }', 'a{ background: #fff; }', {}, done)
  })

  it('converts ansho to width', done => {
    test('a{ ansho: 300px; }', 'a{ width: 300px; }', {}, done)
  })

  it('converts largo to height', done => {
    test('a{ largo: 300px; }', 'a{ height: 300px; }', {}, done)
  })

  it('converts en-to-lo-arto to top', done => {
    test('a{ en-to-lo-arto: 300px; }', 'a{ top: 300px; }', {}, done)
  })

  it('converts por-lo-bahini to bottom', done => {
    test('a{ por-lo-bahini: 300px; }', 'a{ bottom: 300px; }', {}, done)
  })

  it('converts isquierdah to left', done => {
    test('a{ isquierdah: 300px; }', 'a{ left: 300px; }', {}, done)
  })

  it('converts deresha to right', done => {
    test('a{ deresha: 300px; }', 'a{ right: 300px; }', {}, done)
  })

  it('converts huecoh to letter-spacing', done => {
    test('a{ huecoh: -1px; }', 'a{ letter-spacing: -1px; }', {}, done)
  })

  it('converts cursor to fleshita', done => {
    test('a{ fleshita: pointer; }', 'a{ cursor: pointer; }', {}, done)
  })

  it('converts pointer to manito', done => {
    test('a{ cursor: manito; }', 'a{ cursor: pointer; }', {}, done)
  })

  it('converts !arfavó to !important', done => {
    test('a{ color: #000 !arfavó; }', 'a{ color: #000 !important; }', {}, done)
  })

  it('converts separao to margin', done => {
    test('a{ separao: 100px 50px; }', 'a{ margin: 100px 50px; }', {}, done)
  })

  it('converts lah-letrah to text-transform', done => {
    test(
      'a{ lah-letrah: capitalize; }',
      'a{ text-transform: capitalize; }',
      {},
      done
    )
  })

  it('converts agarrao to float', done => {
    test('a{ agarrao: none; }', 'a{ float: none; }', {}, done)
  })

  it('converts jorgorio to animation', done => {
    test('a{ jorgorio: musho 5s; }', 'a{ animation: musho 5s; }', {}, done)
  })

  it('converts mijillah to px', done => {
    test(
      'a{ separao: 100mijillah 50mijillah; }',
      'a{ margin: 100px 50px; }',
      {},
      done
    )
  })

  it('converts peasoh to rem', done => {
    test('a{ separao: 4peasoh 2peasoh; }', 'a{ margin: 4rem 2rem; }', {}, done)
  })

  it('converts coló-de-detrah to background-color', done => {
    test(
      'a{ coló-de-detrah: #ffffff; }',
      'a{ background-color: #ffffff; }',
      {},
      done
    )
  })

  it('converts ziempre to always', done => {
    test(
      'h1 {page-break-before: ziempre; }',
      'h1 {page-break-before: always; }',
      {},
      done
    )
  })

  it('converts borde-isquierdoh to border-left', done => {
    test(
      'a{ borde-isquierdoh: thick double #ff0000; }',
      'a{ border-left: thick double #ff0000; }',
      {},
      done
    )
  })

  it('converts ansho-del-borde-isquierdoh to border-left-width', done => {
    test(
      'a{ ansho-del-borde-isquierdoh: thick; }',
      'a{ border-left-width: thick; }',
      {},
      done
    )
  })

  it('converts eztilo-del-borde-isquierdoh to border-left-style', done => {
    test(
      'a{ eztilo-del-borde-isquierdoh: double; }',
      'a{ border-left-style: double; }',
      {},
      done
    )
  })

  it('converts coló-del-borde-isquierdoh to border-left-color', done => {
    test(
      'a{ coló-del-borde-isquierdoh: #ff0000; }',
      'a{ border-left-color: #ff0000; }',
      {},
      done
    )
  })
  it('converts borde-deresho to border-right', done => {
    test(
      'a{ borde-deresho: thick double #ff0000; }',
      'a{ border-right: thick double #ff0000; }',
      {},
      done
    )
  })

  it('converts ansho-del-borde-deresho to border-right-width', done => {
    test(
      'a{ ansho-del-borde-deresho: thick; }',
      'a{ border-right-width: thick; }',
      {},
      done
    )
  })

  it('converts eztilo-del-borde-deresho to border-right-style', done => {
    test(
      'a{ eztilo-del-borde-deresho: double; }',
      'a{ border-right-style: double; }',
      {},
      done
    )
  })

  it('converts coló-del-borde-deresho to border-right-color', done => {
    test(
      'a{ coló-del-borde-deresho: #ff0000; }',
      'a{ border-right-color: #ff0000; }',
      {},
      done
    )
  })

  it('converts letra-shica to lowercase', done => {
    test(
      'a{ text-transform: letra-shica; }',
      'a{ text-transform: lowercase; }',
      {},
      done
    )
  })

  it('converts la-primera-en-grande to capitalize', done => {
    test(
      'a{ text-transform: la-primera-en-grande; }',
      'a{ text-transform: capitalize; }',
      {},
      done
    )
  })

  it('converts daleá to italic', done => {
    test('a{ font-style: daleá; }', 'a{ font-style: italic; }', {}, done)
  })

  it('converts na-de-ná to none', done => {
    test('div{ display: na-de-ná }', 'div{ display: none }', {}, done)
  })

  it('converts quieto-parao to paused', done => {
    test(
      'dic{ animation-play-state: quieto-parao; }',
      'dic{ animation-play-state: paused; }',
      {},
      done
    )
  })

  it('converts colorao to red', done => {
    test('a{ detrah: colorao; }', 'a{ background: red; }', {}, done)
  })

  it('converts asituna to olive', done => {
    test('a{ detrah: asituna; }', 'a{ background: olive; }', {}, done)
  })
})
