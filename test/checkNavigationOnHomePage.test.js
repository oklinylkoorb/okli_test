const HomePage = require("../pageobjects/home.page");
const ShopPage = require("../pageobjects/shop.page");
const openChrome = require("../utils/driverUtils");
const { expect } = require("chai");

let browser;

describe("Check Navigation On Home Page", () => {
  beforeEach(async () => {
    browser = await openChrome();
  });

  afterEach(async () => {
    await browser.deleteSession();
  });

  it("shop page can be opened from home", async () => {
    const homePage = new HomePage(browser);

    homePage.open();

    const closeModalBtn = await homePage.closeModalBtn();
    await closeModalBtn.click();

    const shopBtn = await homePage.shopBtn();
    await shopBtn.click();

    const shopPage = new ShopPage(browser);
    const dinoStickersTitle = await shopPage.dinoStickersTitle();

    return await expect(await dinoStickersTitle.getText()).equal(
      "Dino stickers"
    );
  });
});
