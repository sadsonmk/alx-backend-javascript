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

describe('/available_payments endpoint', () => {
  it('Correct status code?', (done) => {
    request('http://localhost:7865/available_payments', (err, res, body) => {
      const expRes = {
        payment_methods: {
         credit_cards: true,
         paypal: false
        },
      };
      chai.expect(res.statusCode).to.equal(200);
      chai.expect(JSON.parse(body)).to.deep.equal(expRes);
      done();
    });
  });
});

describe('/login endpoint', () => {
  it('return correct data and status code 200', (done) => {
    const opts = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: true,
      body: { "userName": "Betty" },
    };
    request(opts, (err, res, body) => {
      chai.expect(res.statusCode).to.equal(200);
      chai.expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  it('return correct data and status code 400', (done) => {
    const opts = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: true,
      body: {},
    };
    request(opts, (err, res, body) => {
      chai.expect(res.statusCode).to.equal(400);
      chai.expect(body).to.equal('Missing userName\n');
      done();
    });
  });
});
