const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('Should reject non-String values', () =>{
        var res = isRealString(98);
        expect(res).toBe(false);
    });
    it('Should reject String with only spaces', () => {
        var res = isRealString('    ');
        expect(res).toBe(false);
    });
    it('Should allow string with spaces.' , () => {
        var res = isRealString('   name    ');
        expect(res).toBe(true);
    });
});