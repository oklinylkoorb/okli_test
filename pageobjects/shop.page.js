const Page = require("./page");

class ShopPage extends Page {
  open() {
    return super.open("shop");
  }

  // Shop Category Tabs

  freeCategoryTab() {
    return this.browser.$("[name='freeCategory']");
  }

  gamesCategoryTab() {
    return this.browser.$("[name='GamesCategory']");
  }

  creativityCategoryTab() {
    return this.browser.$("[name='CreativityCategory']");
  }

  stickersCategoryTab() {
    return this.browser.$("[name='StickersCategory']");
  }

  drawingCategoryTab() {
    return this.browser.$("[name='DrawingCategory']");
  }

  decorationCategoryTab() {
    return this.browser.$("[name='DecorationCategory']");
  }
  
  // Shop Containers and Titles

  dinoStickersContainer() {
    return this.browser.$("[name='dino-stickers']");
  }

  dinoStickersTitle() {
    return this.browser.$("[name='dino-stickers'] h3");
  }

  coloringChristmasTreeContainer() {
    return this.browser.$("[name='coloring-christmas-tree']");
  }

  coloringChristmasTreeTitle() {
    return this.browser.$("[name='coloring-christmas-tree'] h3");
  }

  myFirstGamesContainer() {
    return this.browser.$("[name='my-first-games']");
  }

  myFirstGamesTitle() {
    return this.browser.$("[name='my-first-games'] h3");
  }

  postcardChristmasDeerContainer() {
    return this.browser.$("[name='postcard-christmas-deer']");
  }

  postcardChristmasDeerTitle() {
    return this.browser.$("[name='postcard-christmas-deer'] h3");
  }

  posterFruitsContainer() {
    return this.browser.$("[name='poster-fruits']");
  }

  posterFruitsTitle() {
    return this.browser.$("[name='poster-fruits'] h3");
  }
}

module.exports = ShopPage;
