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

// -------------------------- Version Number Increaser Test ----------------------------//

describe('TimeTo_Go Version Number Increaser Test: ', () => {
  it('Should Return a String', (done) => {
    const incVersion = util.incVersion('1.0.0', 'patch');

    if (incVersion && incVersion === String(incVersion)) {
      done();
    }
  });

  it('Should Return False', (done) => {
    const incVersion = util.incVersion(1.2, 'minor');

    if (!incVersion) {
      done();
    }
  });

  it('Should Return False', (done) => {
    const incVersion = util.incVersion('1.0.0', 'pink');

    if (!incVersion) {
      done();
    }
  });
});
