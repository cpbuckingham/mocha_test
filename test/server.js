

const request = require('request');
const expect = require('chai').expect;

describe('Color Code converter API', ()=>{
    describe('RGB to HEX conversion', ()=>{
        const url = 'http://localhost:3000/rgbToHex?red=255&green=255&blue=255';
        it('returns status 200', ()=>{
            request(url, (error, response, body)=>{
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it('returns the color in hex', ()=>{
            request(url, (error, response, body)=>{
                expect(body).to.equal('ffffff');
                done();
            });
        });
    });
    describe('HEX to RGB conversion', ()=>{
        const url = 'http://localhost:3000/hexToRgb?hex=00ff00';

        it('returns status 200', ()=>{
            request(url, (error, response, body)=>{
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        it('returns the color in RGB', ()=>{
            request(url, (error, response, body)=>{
                expect(body).to.equal('[0,255,0]');
                done();
            });
        });
    });
});
