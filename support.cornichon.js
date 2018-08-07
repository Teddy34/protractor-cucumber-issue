const { When, Then } = require('cucumber');
const chai = require('chai');

Then(
  /^I make a small test fail$/,
  function() {
    chai.expect('this should').to.equal('fail')
  }
);

