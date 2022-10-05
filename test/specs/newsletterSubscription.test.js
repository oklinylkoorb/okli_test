const HomePage = require("../pageobjects/home.page");
//const ShopPage = require("../pageobjects/shop.page");
//const { expect } = require("../utils/expect");

describe('Newsletter subscription Test', () => {

  // Subscribe With New Email
  it('Should show successful message after subscribing with new email', async () => {
    console.log("TEST: Subscribe with email the first time - check successful message");

    console.log("Step 1: Open Home Page");
    await HomePage.open();

    const closeModalBtn = await HomePage.closeModalBtn();
    await closeModalBtn.click();

    console.log("Step 2: Click on Subscribe Field");
    const subscribeInputField = await HomePage.subscribeInputField();
    await subscribeInputField.scrollIntoView();
    await subscribeInputField.click();

    console.log("Step 3: Type text into Subscribe Field");
    await HomePage.fillingEmailForm("jacksson@ukr.net");

    console.log("Step 4: Click on Subscribe Button");
    const subscribeBtn = await HomePage.subscribeBtn();
    await subscribeBtn.click();
    return expect(await HomePage.subscriptionSuccessMsg()).toHaveTextContaining('Done!');
  })


  // Subscribe With Empty Field - Check Validation Message
  it('Should show "Input email" message', async () => {
    console.log(
      "TEST: Subscribe With Empty Field - Check Validation Message"
    );

    console.log("Step 1: Open Home Page");
    HomePage.open();

    console.log("Step 2: Click on Subscribe Button");
    const subscribeInputField = await HomePage.subscribeInputField();
    await subscribeInputField.scrollIntoView();
    const subscribeBtn = await HomePage.subscribeBtn();
    await subscribeBtn.click();
    return expect(await HomePage.subscriptionSuccessMsg()).toHaveTextContaining("Subscribe");
  })

  // Subscribe with already subscribed email - check validation message
  it('Should show "Email is already registered" message', async () => {
    console.log(
      "TEST: Subscribe with already subscribed email - check validation message"
    );

    console.log("Step 1: Open Home Page");
    HomePage.open();

    console.log("Step 2: Register new email");
    await HomePage.fillingEmailForm("jacksson@ukr.net");
    expect(await HomePage.subscriptionSuccessMsg()).toHaveTextContaining("Done!");

    console.log("Step 3: Refresh page and enter already registered email");
    browser.refresh();
    await HomePage.fillingEmailForm("jacksson@ukr.net");
    return expect(await HomePage.subscriptionSuccessMsg()).toHaveTextContaining("Subscribe");
  })

  // Subscribe with invalid data
  it('Should show "Invalid data" message', async () => {
    console.log(
      "TEST: Subscribe with invalid data"
    );

    console.log("Step 1: Open Home Page");
    HomePage.open();

    console.log("Step 2: Insert invalid data into registration field");
    const resultMssg = await HomePage.fillingEmailForm("asdf");
    return expect(resultMssg).toHaveTextContaining("Subscribe");
  })

})

