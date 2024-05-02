const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');
const { describe, it } = require('mocha');


describe('calculateNumber', function () {
  it('should execute sum when type is sum', function () {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUM', 0.9, 4.2)).to.equal(5);
    expect(calculateNumber('SUM', -1.4, -4.5)).to.equal(-5);
    expect(calculateNumber('SUM', 8, 10)).to.equal(18);
    expect(calculateNumber('SUM', -2.5, 4.6)).to.equal(3);
    expect(calculateNumber('SUM', 6.8, 0.0)).to.equal(7);
  });

  it('should execute subtract when type is subtract', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', -1.4, 4.5)).to.equal(-6);
    expect(calculateNumber('SUBTRACT', 1.4, -4.5)).to.equal(5);
    expect(calculateNumber('SUBTRACT', 2, 4.5)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', 1.4, 0.0)).to.equal(1);
    expect(calculateNumber('SUBTRACT', 9, 4)).to.equal(5);
  });

  it('should divide correctly when type is divide', function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 1.4, 0.0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 0, 4.5)).to.equal(0);
    expect(calculateNumber('DIVIDE', -1.4, 4.5)).to.equal(-0.2);
    expect(calculateNumber('DIVIDE', 1.4, -4.5)).to.equal(-0.25);
    expect(calculateNumber('DIVIDE', 20, 4.5)).to.equal(4);
    expect(calculateNumber('DIVIDE', 100, 25)).to.equal(4);
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
