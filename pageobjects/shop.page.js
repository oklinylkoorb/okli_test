const Page = require("./page");

class ShopPage extends Page {
  dinoStickersContainer() {
    return this.browser.$("[name='dino-stickers']");
  }

  dinoStickersTitle() {
    return this.browser.$("[name='dino-stickers'] h3");
  }

  open() {
    return super.open("shop");
  }
}

module.exports = ShopPage;
