const Page = require("./page");

class ShopPage extends Page {
  open() {
    return super.open("shop");
  }

  // Shop Category Tabs

  freeCategoryTab() {
    return $("[name='freeCategory']");
  }

  gamesCategoryTab() {
    return $("[name='GamesCategory']");
  }

  creativityCategoryTab() {
    return $("[name='CreativityCategory']");
  }

  stickersCategoryTab() {
    return $("[name='StickersCategory']");
  }

  drawingCategoryTab() {
    return $("[name='DrawingCategory']");
  }

  decorationCategoryTab() {
    return $("[name='DecorationCategory']");
  }
  
  // Shop Containers and Titles

  dinoStickersContainer() {
    return $("[name='dino-stickers']");
  }

  dinoStickersTitle() {
    return $("[name='dino-stickers'] h3");
  }

  coloringChristmasTreeContainer() {
    return $("[name='coloring-christmas-tree']");
  }

  coloringChristmasTreeTitle() {
    return $("[name='coloring-christmas-tree'] h3");
  }

  myFirstGamesContainer() {
    return $("[name='my-first-games']");
  }

  myFirstGamesTitle() {
    return $("[name='my-first-games'] h3");
  }

  postcardChristmasDeerContainer() {
    return $("[name='postcard-christmas-deer']");
  }

  postcardChristmasDeerTitle() {
    return $("[name='postcard-christmas-deer'] h3");
  }

  posterFruitsContainer() {
    return $("[name='poster-fruits']");
  }

  posterFruitsTitle() {
    return $("[name='poster-fruits'] h3");
  }
}

module.exports = new ShopPage();
