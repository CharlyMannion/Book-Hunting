module.exports = {
  'hello world' : function (browser) {
    browser
      .url("http://localhost:3000/")
      .waitForElementVisible('p', 5000)
      .assert.containsText('p', 'Hello world!')
      .end()
  }
}
