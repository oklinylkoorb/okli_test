const Page = require("./page");

class ProductPage extends Page {
  addToCartBtn() {
    return $("#addToCardBtn");
  }

  backBtn() {
    return $(".eRGBPP");
  }
}

module.exports = new ProductPage();