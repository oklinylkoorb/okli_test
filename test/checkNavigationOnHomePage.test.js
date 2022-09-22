const HomePage = require("../pageobjects/home.page");
const ShopPage = require("../pageobjects/shop.page");
const { assert } = require("./../utils/assert");

//Check Navigation On Home Page
async function checkNavigationOnHomePage(browser) {
  console.log("TEST: shop page can be opened from home");

  console.log("Step 1: Open Home Page");
  const homePage = new HomePage(browser);
  homePage.open();

  const closeModalBtn = await homePage.closeModalBtn();
  await closeModalBtn.click();

  console.log("Step 2: Click on Shop Btn");
  const shopBtn = await homePage.shopBtn();
  await shopBtn.click();

  console.log("Step 3: Check that Dino Stickers present");
  const shopPage = new ShopPage(browser);
  const dinoStickersTitle = await shopPage.dinoStickersTitle();

  return assert(await dinoStickersTitle.getText()).equals("Dino stickers");
}

//Check If Shop Tabs Opens
async function checkShopTabs(browser) {
  console.log("TEST: shop tabs can be opened from shop page");

  console.log("Step 1: Open Home Page");
  const homePage = new HomePage(browser);
  homePage.open();

  const closeModalBtn = await homePage.closeModalBtn();
  await closeModalBtn.click();

  console.log("Step 2: Click on Shop Btn");
  const shopBtn = await homePage.shopBtn();
  await shopBtn.click();

  console.log("Step 3: Click on 'Free' category");
  const shopPage = new ShopPage(browser);
  const freeCategoryTab = await shopPage.freeCategoryTab();
  await freeCategoryTab.click();
  const coloringChristmasTreeTitle = await shopPage.coloringChristmasTreeTitle();
  await coloringChristmasTreeTitle;
  assert(await coloringChristmasTreeTitle.getText()).equals("Coloring Christmas tree");

  console.log("Step 4: Click on 'Games' category");
  const gamesCategoryTab = await shopPage.gamesCategoryTab();
  await gamesCategoryTab.click();
  const myFirstGamesTitle = await shopPage.myFirstGamesTitle();
  await myFirstGamesTitle;
  assert(await myFirstGamesTitle.getText()).equals("My first games");

  console.log("Step 5: Click on 'Creativity' category");
  const creativityCategoryTab = await shopPage.creativityCategoryTab();
  await creativityCategoryTab.click();
  const postcardChristmasDeerTitle = await shopPage.postcardChristmasDeerTitle();
  await postcardChristmasDeerTitle;
  assert(await postcardChristmasDeerTitle.getText()).equals("Postcard Christmas deer");

  console.log("Step 6 Click on 'Stickers' category");
  const stickersCategoryTab = await shopPage.stickersCategoryTab();
  await stickersCategoryTab.click();
  const dinoStickersTitle = await shopPage.dinoStickersTitle();
  await dinoStickersTitle;
  assert(await dinoStickersTitle.getText()).equals("Dino stickers");

  console.log("Step 7: Click on 'Drawing' category");
  const drawingCategoryTab = await shopPage.drawingCategoryTab();
  await drawingCategoryTab.click();
  await shopPage.coloringChristmasTreeTitle();
  await coloringChristmasTreeTitle;
  assert(await coloringChristmasTreeTitle.getText()).equals("Coloring Christmas tree");

  console.log("Step 8: Click on 'Decoration' category");
  const decorationCategoryTab = await shopPage.decorationCategoryTab();
  await decorationCategoryTab.click();
  const posterFruitsTitle = await shopPage.posterFruitsTitle();
  await posterFruitsTitle;
  return assert(await posterFruitsTitle.getText()).equals("Poster. Fruits");


}

module.exports = {
  checkNavigationOnHomePage: checkNavigationOnHomePage,
  checkShopTabs: checkShopTabs,
};
