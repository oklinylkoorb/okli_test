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

  freeCategoryTab() {
    return this.browser.$("[name='freeCategory']");
  }

  coloringChristmasTree() {
    return this.browser.$("[name='coloring-christmas-tree']");
  }

  coloringChristmasTreeTitle() {
    return this.browser.$("[name='coloring-christmas-tree'] h3");
  }
}

module.exports = ShopPage;
