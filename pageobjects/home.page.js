const Page = require("./page");

class HomePage extends Page {
  shopBtn() {
    return this.browser.$("#shopBtn");
  }

  closeModalBtn() {
    return this.browser.$(".mc-closeModal");
  }

  open() {
    return super.open();
  }
}

module.exports = HomePage;
