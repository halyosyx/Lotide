const middle = require('../middle');
const assert = require('chai').assert;


//assertArraysEqual(middle([]), []);
//assertArraysEqual(middle([23,12]), []);
//assertArraysEqual(middle([44,70,90]), [70]);
//assertArraysEqual(middle([44,70,90,44,56,90]), [90,44]);

describe('middle', () => {

    it("Returns [90,44] for [44,70,90,44,56,90]", () => {
        assert.deepEqual(middle([44,70,90,44,56,90]),[90,44] );
    });

    it("Returns [70] for [44,70,90]", () => {
        assert.deepEqual(middle([44,70,90]),[70] );
    });

    it("Returns [] for [23,12]", () => {
        assert.deepEqual(middle([23,12]),[] );
    });

    it("Returns [] for []", () => {
        assert.deepEqual(middle([]),[] );
    });

});