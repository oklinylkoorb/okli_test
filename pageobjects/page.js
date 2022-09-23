/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
module.exports = class Page {
  constructor(browser) {
    this.browser = browser;
  }

 // Page objects

  open(path = "") {
    return this.browser.url(`https://mirakids.net/${path}`);
  }

  subscribeInputField() {
    return this.browser.$("#subscribe [type='email']");
  }

  subscribeBtn() {
    return this.browser.$("#subscribe button");
  }

  basketNavBtn() {
    return this.browser.$("#basketNav");
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

// Functions

  async fillingSearchField(query) {
    const inputField = await this.searchInputField();
    await inputField.click();
    await inputField.setValue(query);
    return this.searchResultsFallingList();
  }

  async fillingEmailForm(query) {
    const emailInputField = await this.subscribeInputField();
    await emailInputField.scrollIntoView();
    await emailInputField.click();
    await emailInputField.setValue(query);
    const clickSubBtn = this.subscribeBtn();
    await clickSubBtn.click();
    return this.subscriptionSuccessMsg();
  }

};
