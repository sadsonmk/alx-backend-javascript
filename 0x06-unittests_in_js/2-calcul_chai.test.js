const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');


describe('calculateNumber', function () {
  it('should execute sum when type is sum', function () {
    chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    chai.expect(calculateNumber('SUM', 0.9, 4.2)).to.equal(5);
    chai.expect(calculateNumber('SUM', -1.4, -4.5)).to.equal(-5);
    chai.expect(calculateNumber('SUM', 8, 10)).to.equal(18);
    chai.expect(calculateNumber('SUM', -2.5, 4.6)).to.equal(3);
    chai.expect(calculateNumber('SUM', 6.8, 0.0)).to.equal(7);
  });

  it('should execute subtract when type is subtract', function () {
    chai.expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    chai.expect(calculateNumber('SUBTRACT', -1.4, 4.5)).to.equal(-6);
    chai.expect(calculateNumber('SUBTRACT', 1.4, -4.5)).to.equal(5);
    chai.expect(calculateNumber('SUBTRACT', 2, 4.5)).to.equal(-3);
    chai.expect(calculateNumber('SUBTRACT', 1.4, 0.0)).to.equal(1);
    chai.expect(calculateNumber('SUBTRACT', 9, 4)).to.equal(5);
  });

  it('should divide correctly when type is divide', function () {
    chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    chai.expect(calculateNumber('DIVIDE', 1.4, 0.0)).to.equal('Error');
    chai.expect(calculateNumber('DIVIDE', 0, 4.5)).to.equal(0);
    chai.expect(calculateNumber('DIVIDE', -1.4, 4.5)).to.equal(-0.2);
    chai.expect(calculateNumber('DIVIDE', 1.4, -4.5)).to.equal(-0.25);
    chai.expect(calculateNumber('DIVIDE', 20, 4.5)).to.equal(4);
    chai.expect(calculateNumber('DIVIDE', 100, 25)).to.equal(4);
    chai.expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
