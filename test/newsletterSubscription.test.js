const HomePage = require("../pageobjects/home.page");
const ShopPage = require("../pageobjects/shop.page");
const { assert } = require("../utils/assert");

// Subscribe With New Email
async function subscribeWithEmailForTheFirstTime(browser) {
  console.log("TEST: Subscribe with email the first time - check successful message");

  console.log("Step 1: Open Home Page");
  const homePage = new HomePage(browser);
  homePage.open();

  const closeModalBtn = await homePage.closeModalBtn();
  await closeModalBtn.click();

  console.log("Step 2: Click on Subscribe Field");
  const subscribeInputField = await homePage.subscribeInputField();
  subscribeInputField.scrollIntoView();
  await subscribeInputField.click();

  console.log("Step 3: Type text into Subscribe Field");
  await subscribeInputField.setValue("jacksson@ukr.net");

  console.log("Step 4: Click on Subscribe Button");
  const subscribeBtn = await homePage.subscribeBtn();
  await subscribeBtn.click();
  const subscriptionSuccessMsg = await homePage.subscriptionSuccessMsg();

  return assert(await subscriptionSuccessMsg.getText()).equals("Done!");
}

module.exports = {
  subscribeWithEmailForTheFirstTime: subscribeWithEmailForTheFirstTime,
};
