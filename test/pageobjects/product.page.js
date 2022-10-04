const Page = require("./page");

class ProductPage extends Page {
  addToCartBtn() {
    return $("#addToCardBtn");
  }
}

module.exports = new ProductPage();