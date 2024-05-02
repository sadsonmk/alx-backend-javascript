const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let stub;
  let spyConsole;

  beforeEach(() => {
    spyConsole = sinon.spy(console, 'log');
    stub = sinon.stub(Utils, 'calculateNumber');
  });
  
  afterEach(() => {
   spyConsole.restore();
   stub.restore();
  
  });
  it('check sendPaymentRequestToApi is the same as calculateNumber and logging', () => {
    stub.returns(10);
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(stub, 'SUM', 100, 20);
    sinon.assert.calledWith(spyConsole, 'The total is: 10');
  });
});
