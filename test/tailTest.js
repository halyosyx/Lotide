const tail = require('../tail');
const assert = require('chai').assert;


describe('tail', () => {

    it("Returns [2,3] for [1,2,3]", () => {
        assert.deepEqual(tail([1,2,3]),[2,3] );
    });

});