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
  const coloringChristmasTreeTitle = await shopPage.coloringChristmasTree();
  await coloringChristmasTreeTitle;

  return assert(await coloringChristmasTreeTitle.getText()).equals("Coloring Christmas tree");
}

module.exports = {
  checkNavigationOnHomePage: checkNavigationOnHomePage,
  checkShopTabs: checkShopTabs,
};
