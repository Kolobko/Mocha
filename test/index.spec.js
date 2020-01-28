const assert = require('assert');
const {expect} = require('chai');

const {sum, mult} = require('../index.js');

describe('function sum', () => {

    it("should sum a + b equals 6", () => {
        // assert.equal(sum(2, 4), 6);
        expect(sum(2, 4)).eq(6);
    });

    it('should sum a + b not equals 0', () => {
        assert.notEqual(sum(2, 4), 0);
    });

    it('should mult a * b equals 8', () => {
        assert.equal(mult(2, 4), 8);
    });
});

