const HomePage = require("../pageobjects.old/home.page");

describe('Search Field Test', () => {

  // Search With Valid Data
  it('Should shov falling list as a result of search', async () => {
    console.log("TEST: Valid data search");

    console.log("Step 1: Open Home Page");
    await HomePage.open();

    const closeModalBtn = await HomePage.closeModalBtn();
    await closeModalBtn.click();

    console.log("Step 2: Click on Search Field");
    const searchInputField = await HomePage.searchInputField();
    await searchInputField.click();

    console.log("Step 3: Type text into Search Field");
    const searchInputFill = HomePage.fillingSearchField("Dino");
    await searchInputFill();

    console.log("Step 4: Check if search result contains 'Dino'");
    const searchResultsFallingList = await HomePage.searchResultsFallingList();
    return expect(await searchResultsFallingList.getText()).toHaveTextContaining("Dino stickers");
  })

  // Search With Invalid Data
  it('Should not show falling list', async () => {
    console.log("TEST: Valid data search");

    console.log("Step 1: Open Home Page");
    await HomePage.open();

    console.log("Step 2: Fill search field with invalid data and check result");
    const searchResultsFallingList = await HomePage.fillingSearchField("asdf");
    return expect(await searchResultsFallingList.toExist()).toBe(false);
  })

})