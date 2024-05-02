const sinon = require('sinon');
const { expect } = require('chai');
const mocha = require('mocha');

const getPaymentTokenFromAPI = require('./6-payment_token');


describe('getPaymentTokenFromAPI', () => {
  it('resolve a promise when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data).to.eql({data: 'Successful response from the API' });
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should not resolve the promise when success is false', (done) => {
    getPaymentTokenFromAPI(false)
    .then(() => {
      done(new Error('Promise should not be resolved'));
    })
    .catch(() => {
      done();
    });
  });
});
