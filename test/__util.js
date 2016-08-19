const util = require('../lib/util');
const expect = require('chai').expect;

describe('TimeTo_Go Debug Testing: ', () => {
  it('Should Read Debug Lines String', (done) => {
    expect(util.out).to.not.equal(null);
    done();
  });
});
