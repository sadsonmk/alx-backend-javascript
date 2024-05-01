const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should round passed args and return the sum', () => {
    assert.equal(calculateNumber(2.3, 7.8), 10);
    assert.equal(calculateNumber(-2.3, -7.9), -10);
    assert.equal(calculateNumber(2.6, 4.3), 7);
    assert.equal(calculateNumber(-2.6, -4.3), -7);
  });
  it('should sum whole numbers correctly', () => {
    assert.equal(calculateNumber(8, 8), 16);
    assert.equal(calculateNumber(-8, -8), -16);
  });
  it('should sum a whole number and float correctly', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(-1, -3.7), -5);
  });
  it('should sum a positive and a negative number correctly', () => {
    assert.equal(calculateNumber(-5.6, 6.6), 1);
    assert.equal(calculateNumber(-5, 6), 1);
  });

});
