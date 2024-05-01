const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should execute sum when type is sum', () => {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.equal(calculateNumber('SUM', 0.9, 4.2), 5);
    assert.equal(calculateNumber('SUM', -1.4, -4.5), -5);
    assert.equal(calculateNumber('SUM', 8, 10), 18);
    assert.equal(calculateNumber('SUM', -2.5, 4.6), 3);
    assert.equal(calculateNumber('SUM', 6.8, 0.0), 7);
  });

  it('should execute subtract when type is subtract', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.equal(calculateNumber('SUBTRACT', -1.4, 4.5), -6);
    assert.equal(calculateNumber('SUBTRACT', 1.4, -4.5), 5);
    assert.equal(calculateNumber('SUBTRACT', 2, 4.5), -3);
    assert.equal(calculateNumber('SUBTRACT', 1.4, 0.0), 1);
    assert.equal(calculateNumber('SUBTRACT', 9, 4), 5);
  });

  it('should divide correctly when type is divide', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.equal(calculateNumber('DIVIDE', 1.4, 0.0), 'Error');
    assert.equal(calculateNumber('DIVIDE', 0, 4.5), 0);
    assert.equal(calculateNumber('DIVIDE', -1.4, 4.5), -0.2);
    assert.equal(calculateNumber('DIVIDE', 1.4, -4.5), -0.25);
    assert.equal(calculateNumber('DIVIDE', 20, 4.5), 4);
    assert.equal(calculateNumber('DIVIDE', 100, 25), 4);
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

});
