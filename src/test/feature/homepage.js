module.exports = {
  'Visit page and see welcome message' : function (browser) {
    browser
      .url("http://localhost:3000/")
      .waitForElementVisible('p', 5000)
      .assert.containsText('p', 'Find a good old book')
      .end()
  }
}
