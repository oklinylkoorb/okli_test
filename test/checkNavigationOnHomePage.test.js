const HomePage = require("../pageobjects/home.page");
const ShopPage = require("../pageobjects/shop.page");
const { assert } = require("./../utils/assert");

//Check Navigation On Home Page
async function checkNavigationOnHomePage(browser) {
  console.log("TEST: shop page can be opened from home");

  console.log("Step 1: Open Home Page");
  const homePage = new HomePage(browser);
  homePage.open();

  console.log("Step 2: Click on Shop Btn");
  const closeModalBtn = await homePage.closeModalBtn();
  await closeModalBtn.click();

  const shopBtn = await homePage.shopBtn();
  await shopBtn.click();

  console.log("Step 3: Check that Dino Stickers present");
  const shopPage = new ShopPage(browser);
  const dinoStickersTitle = await shopPage.dinoStickersTitle();

  return assert(await dinoStickersTitle.getText()).equals("Dino stickers");
}

async function checkNavigationOnHomePage2(browser) {
  console.log("TEST: shop page can be opened from home");

  console.log("Step 1: Open Home Page");
  const homePage = new HomePage(browser);
  homePage.open();

  console.log("Step 2: Click on Shop Btn");
  const closeModalBtn = await homePage.closeModalBtn();
  await closeModalBtn.click();

  const shopBtn = await homePage.shopBtn();
  await shopBtn.click();

  console.log("Step 3: Check that Dino Stickers present");
  const shopPage = new ShopPage(browser);
  const dinoStickersTitle = await shopPage.dinoStickersTitle();

  return assert(await dinoStickersTitle.getText()).equals("Dino2 stickers");
}

module.exports = {
  checkNavigationOnHomePage: checkNavigationOnHomePage,
  checkNavigationOnHomePage2: checkNavigationOnHomePage2,
};
