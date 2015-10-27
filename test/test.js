var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};

describe('postcss-andalusian-stylesheets', function () {

    it('converts redondeado to border-radius', function (done) {
        test('a{ redondeado: 3px; }', 'a{ border-radius: 3px; }', { }, done);
    });

    it('converts fondo to background', function (done) {
        test('a{ fondo: #fff; }', 'a{ background: #fff; }', { }, done);
    });

    it('converts ancho to width', function (done) {
        test('a{ ancho: 300px; }', 'a{ width: 300px; }', { }, done);
    });

    it('converts alto to height', function (done) {
        test('a{ alto: 300px; }', 'a{ height: 300px; }', { }, done);
    });

    it('converts arriba to top', function (done) {
        test('a{ arriba: 300px; }', 'a{ top: 300px; }', { }, done);
    });

    it('converts abajo to bottom', function (done) {
        test('a{ abajo: 300px; }', 'a{ bottom: 300px; }', { }, done);
    });

    it('converts izquierda to left', function (done) {
        test('a{ izquierda: 300px; }', 'a{ left: 300px; }', { }, done);
    });

    it('converts derecha to right', function (done) {
        test('a{ derecha: 300px; }', 'a{ right: 300px; }', { }, done);
    });

    it('converts espaciado to letter-spacing', function (done) {
        test('a{ espaciado: -1px; }', 'a{ letter-spacing: -1px; }', { }, done);
    });

    it('converts puntero to cursor', function (done) {
        test('a{ puntero: pointer; }', 'a{ cursor: pointer; }', { }, done);
    });

    it('converts pointer to manito', function (done) {
        test('a{ cursor: manito; }', 'a{ cursor: pointer; }', { }, done);
    });

    it('converts !importantisimo to !important', function (done) {
        test('a{ color: #000 !importantisimo; }',
             'a{ color: #000 !important; }', {}, done);
    });

});
