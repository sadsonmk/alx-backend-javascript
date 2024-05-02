const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spyConsole;

  beforeEach(() => {
    spyConsole = sinon.spy(console, 'log');
  });
  
  afterEach(() => {
   spyConsole.restore();
  
  });

  it('call sendPaymentRequestToAPI with 100, and 20', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(120);
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(spyConsole, 'The total is: 120');
    sinon.assert.calledOnce(spyConsole);
    stub.restore();
  });

  it('call sendPaymentRequestToAPI with 10, and 10', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(20);
    sendPaymentRequestToApi(10, 10);

    sinon.assert.calledWith(spyConsole, 'The total is: 20');
    sinon.assert.calledOnce(spyConsole);
    stub.restore();
  });
});
