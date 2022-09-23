const HomePage = require("../pageobjects/home.page");
const ShopPage = require("../pageobjects/shop.page");
const { assert } = require("../utils/assert");

// Subscribe With New Email
async function subscribeWithEmailForTheFirstTime(browser) {
  console.log(
    "TEST: Subscribe with email the first time - check successful message"
  );

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
  return assert(await homePage.subscriptionSuccessMsg()).elementTextContains(
    "Done!"
  );
}

// Subscribe With Empty Field - Check Validation Message
async function subscribeWithEmptyField(browser) {
  console.log(
    "TEST: Subscribe With Empty Field - Check Validation Message"
  );

  console.log("Step 1: Open Home Page");
  const homePage = new HomePage(browser);
  homePage.open();

  const closeModalBtn = await homePage.closeModalBtn();
  await closeModalBtn.click();

  console.log("Step 2: Click on Subscribe Button");
  const subscribeInputField = await homePage.subscribeInputField();
  subscribeInputField.scrollIntoView();
  const subscribeBtn = await homePage.subscribeBtn();
  await subscribeBtn.click();
  return assert(await homePage.subscriptionSuccessMsg()).elementTextContains("Subscribe");  
}

// Subscribe with already subscribed email - check validation message
async function subscribeWithAlreadyRegisteredEmail(browser) {
  console.log(
    "TEST: Subscribe with already subscribed email - check validation message"
  );

  console.log("Step 1: Open Home Page");
  const homePage = new HomePage(browser);
  homePage.open();

  const closeModalBtn = await homePage.closeModalBtn();
  await closeModalBtn.click();

  console.log("Step 2: Register new email");
  await homePage.fillingEmailForm("jacksson@ukr.net");
  assert (await homePage.subscriptionSuccessMsg()).elementTextContains("Done!");

  console.log("Step 3: Refresh page and enter already registered email");
  browser.refresh();
  await homePage.fillingEmailForm("jacksson@ukr.net");
  return assert (await homePage.subscriptionSuccessMsg()).elementTextContains("Subscribe");
}

// Subscribe with invalid data
async function subscribeWithInvalidData(browser) {
  console.log(
    "TEST: Subscribe with invalid data"
  );

  console.log("Step 1: Open Home Page");
  const homePage = new HomePage(browser);
  homePage.open();

  const closeModalBtn = await homePage.closeModalBtn();
  await closeModalBtn.click();

  console.log("Step 2: Insert invalid data into registration field");
  const resultMssg = await homePage.fillingEmailForm("asdf");
  return assert (resultMssg).elementTextContains("Subscribe");
}

module.exports = {
  subscribeWithEmailForTheFirstTime: subscribeWithEmailForTheFirstTime,
  subscribeWithEmptyField: subscribeWithEmptyField,
  subscribeWithAlreadyRegisteredEmail: subscribeWithAlreadyRegisteredEmail,
  subscribeWithInvalidData: subscribeWithInvalidData,
};
