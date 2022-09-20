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
};
