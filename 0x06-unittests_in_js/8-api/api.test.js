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
