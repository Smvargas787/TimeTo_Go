const util = require('../lib/util');
const expect = require('chai').expect;

describe('Debug-Tracker Testing: ', () => {
  it('Reading Debug Line', (done) => {
    expect(util.lineOut).to.not.equal(null);
    done();
  });
});
