const util = require('../src/util');
const expect = require('chai').expect;

// -------------------------- Debug Line Test ----------------------------//

describe('TimeTo_Go Debug Test: ', () => {
  it('Should Read Debug Line Strings', (done) => {
    expect(util.out).to.not.equal(null);
    done();
  });
});

// -------------------------- TimeStamp Test ----------------------------//

describe('TimeTo_Go Time Test: ', () => {
  it('Should Read The Time/Date Format', (done) => {
    expect(util.time).to.not.equal(null);
    done();
  });
});

// Version Number Incrementer
describe('TimeTo_Go Version Number Increaser Test: ', () => {
  it('Should Not Return False', (done) => {
    if (util.vni('1.0.1', 'minor')) {
      done();
    }
  });
});
