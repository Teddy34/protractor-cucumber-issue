const { When, Then } = require('cucumber');
const chai = require('chai');

When(
  /^I make a small test$/,
  function() {
    return Promise.resolve()
      .then(() => chai.expect('test').to.equal('toto')
      );
  }
);

Then(  /^the test succeed$/,
  function() {
  }
);
