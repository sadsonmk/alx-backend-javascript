const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('check sendPaymentRequestToApi is the same as calculateNumber', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(spy, 'SUM', 100, 20);
    spy.restore();
  });
});
