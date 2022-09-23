const Page = require("./page");

class ProductPage extends Page {
  addToCartBtn() {
    return this.browser.$("#addToCardBtn");
  }
}

module.exports = ProductPage;