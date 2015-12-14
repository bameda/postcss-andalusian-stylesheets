import postcss from 'postcss';
import { expect } from 'chai';

import plugin from '../';

const test = (input, output, opts, done) => {
    postcss([ plugin(opts) ]).process(input).then(result => {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(done);
};

describe('postcss-andalusian-stylesheets', function () {

    it('converts reondeao to border-radius', done => {
        test(
            'a{ reondeao: 3px; }',
            'a{ border-radius: 3px; }',
        {}, done);
    });

    it('converts detrah to background', done => {
        test(
            'a{ detrah: #fff; }',
            'a{ background: #fff; }',
        {}, done);
    });

    it('converts ansho to width', done => {
        test(
            'a{ ansho: 300px; }',
            'a{ width: 300px; }',
        {}, done);
    });

    it('converts largo to height', done => {
        test(
            'a{ largo: 300px; }',
            'a{ height: 300px; }',
        {}, done);
    });

    it('converts en-to-lo-arto to top', done => {
        test(
            'a{ en-to-lo-arto: 300px; }',
            'a{ top: 300px; }',
        {}, done);
    });

    it('converts por-lo-bahini to bottom', done => {
        test(
            'a{ por-lo-bahini: 300px; }',
            'a{ bottom: 300px; }',
        {}, done);
    });

    it('converts isquierdah to left', done => {
        test(
            'a{ isquierdah: 300px; }',
             'a{ left: 300px; }',
        {}, done);
    });

    it('converts deresha to right', done => {
        test(
            'a{ deresha: 300px; }',
            'a{ right: 300px; }',
        {}, done);
    });

    it('converts huecoh to letter-spacing', done => {
        test(
            'a{ huecoh: -1px; }',
            'a{ letter-spacing: -1px; }',
        {}, done);
    });

    it('converts cursor to fleshita', done => {
        test(
            'a{ fleshita: pointer; }',
            'a{ cursor: pointer; }',
        {}, done);
    });

    it('converts pointer to manito', done => {
        test(
            'a{ cursor: manito; }',
            'a{ cursor: pointer; }',
        {}, done);
    });

    it('converts !arfavó to !important', done => {
        test(
            'a{ color: #000 !arfavó; }',
            'a{ color: #000 !important; }',
         {}, done);
    });

    it('converts separao to margin', done => {
        test(
            'a{ separao: 100px 50px; }',
            'a{ margin: 100px 50px; }',
        {}, done);
    });

    it('converts lah-letrah to text-transform', done => {
        test(
            'a{ lah-letrah: capitalize; }',
            'a{ text-transform: capitalize; }',
        {}, done);
    });

    it('converts agarrao to float', done => {
        test(
            'a{ agarrao: none; }',
            'a{ float: none; }',
        {}, done);
    });

    it('converts jorgorio to animation', done => {
        test(
            'a{ jorgorio: musho 5s; }',
            'a{ animation: musho 5s; }',
        {}, done);
    });

    it('converts px to mijillah', done => {
        test(
            'a{ separao: 100mijillah 50mijillah; }',
            'a{ margin: 100px 50px; }',
        {}, done);
    });

    it('converts rem to peasoh', done => {
        test(
            'a{ separao: 4peasoh 2peasoh; }',
            'a{ margin: 4rem 2rem; }',
        {}, done);
    });
});
