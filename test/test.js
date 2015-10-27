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

    it('converts reondeao to border-radius', function (done) {
        test('a{ reondeao: 3px; }', 'a{ border-radius: 3px; }', { }, done);
    });

    it('converts detrah to background', function (done) {
        test('a{ detrah: #fff; }', 'a{ background: #fff; }', { }, done);
    });

    it('converts ansho to width', function (done) {
        test('a{ ansho: 300px; }', 'a{ width: 300px; }', { }, done);
    });

    it('converts largo to height', function (done) {
        test('a{ largo: 300px; }', 'a{ height: 300px; }', { }, done);
    });

    it('converts en-to-lo-arto to top', function (done) {
        test('a{ en-to-lo-arto: 300px; }', 'a{ top: 300px; }', { }, done);
    });

    it('converts por-lo-bahini to bottom', function (done) {
        test('a{ por-lo-bahini: 300px; }', 'a{ bottom: 300px; }', { }, done);
    });

    it('converts isquierdah to left', function (done) {
        test('a{ isquierdah: 300px; }', 'a{ left: 300px; }', { }, done);
    });

    it('converts deresha to right', function (done) {
        test('a{ deresha: 300px; }', 'a{ right: 300px; }', { }, done);
    });

    it('converts huecoh to letter-spacing', function (done) {
        test('a{ huecoh: -1px; }', 'a{ letter-spacing: -1px; }', { }, done);
    });

    it('converts fleshita to cursor', function (done) {
        test('a{ fleshita: pointer; }', 'a{ cursor: pointer; }', { }, done);
    });

    it('converts pointer to manito', function (done) {
        test('a{ cursor: manito; }', 'a{ cursor: pointer; }', { }, done);
    });

    it('converts !pisha to !important', function (done) {
        test('a{ color: #000 !pisha; }',
             'a{ color: #000 !important; }', {}, done);
    });

    it('converts separao to margin', function (done) {
        test('a{ separao: 100px 50px; }', 'a{ margin: 100px 50px; }', { }, done);
    });

    it('converts lah-letrah to text-transform', function (done) {
        test('a{ lah-letrah: capitalize; }', 'a{ text-transform: capitalize; }', { }, done);
    });

    it('converts agarrao to float', function (done) {
        test('a{ agarrao: none; }', 'a{ float: none; }', { }, done);
    });

    it('converts jorgorio to animation', function (done) {
        test('a{ jorgorio: musha 5s; }', 'a{ animation: musha 5s; }', { }, done);
    });

});
