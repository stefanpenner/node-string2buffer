var string2buffer = require('./');
var expect = require('chai').expect;

describe('string2buffer', function() {
  it('handles empty string input', function() {
    expect(string2buffer('')).to.be.an.instanceof(Uint8Array);
    expect(string2buffer('')).to.have.length(0);
  });

  it('handles simple string input', function() {
    expect(string2buffer('abcd')).to.be.an.instanceof(Uint8Array);
    expect(string2buffer('abcd')).to.have.length(4);
    expect(string2buffer('abcd')).to.deep.equal({
      '0': 97,
      '1': 98,
      '2': 99,
      '3': 100
    });
  });
});
