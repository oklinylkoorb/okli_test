/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
module.exports = class Page {
  constructor(browser) {
    this.browser = browser;
  }
 
  open(path = "") {
    return this.browser.url(`https://mirakids.net/${path}`);
  }

  subscribeInputField() {
    return this.browser.$("#subscribe [type='email']");
  }

  subscribeBtn() {
    return this.browser.$("#subscribe button");
  }

  subscriptionSuccessMsg() {
    return this.browser.$("#subscribe [name='Done!']");
  }

  searchInputField() {
    return this.browser.$("[name='Search...']");
  }

  searchResultsFallingList() {
    return this.browser.$("#results a");
  }

  async fillingSearchField(query) {
    const inputField = await this.searchInputField();
    await inputField.click();
    await inputField.setValue(query);
    return this.searchResultsFallingList();
  }

};
