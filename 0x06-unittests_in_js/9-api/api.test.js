const request = require('request');
const chai = require('chai');

describe('Index page', () => {
  it('return Correct status code', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      chai.expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      chai.expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Other?', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      chai.expect(res.headers).to.have.property('content-type');
      done();
    });
  });
});

describe('Cart Page', () => {
  it('Correct status code when :id is a number?', (done) => {
    request('http://localhost:7865/cart/12', (err, res, body) => {
      chai.expect(res.statusCode).to.equal(200);
      chai.expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('Correct status code when :id is NOT a number (=> 404)?', (done) => {
    request('http://localhost:7865/cart/hello', (err, res, body) => {
      chai.expect(res.statusCode).to.equal(404);
      chai.expect(body).to.equal('Invalid cart ID\n');
      done();
    });
  });
});
