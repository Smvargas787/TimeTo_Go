const util = require('../lib/util');
const expect = require('chai').expect;

describe('TimeTo_Go Debug Test: ', () => {
  it('Should Read Debug Line Strings', (done) => {
    expect(util.out).to.not.equal(null);
    done();
  });
});

describe('TimeTo_Go Time Test: ', () => {
  it('Should Read The Time/Date Format', (done) => {
    expect(util.time).to.not.equal(null);
    done();
  });
});
