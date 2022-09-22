const HomePage = require("../pageobjects/home.page");
const { assert } = require("../utils/assert");

// Search With Valid Data
async function searchWithValidData(browser) {
  console.log("TEST: Valid data search");

  console.log("Step 1: Open Home Page");
  const homePage = new HomePage(browser);
  homePage.open();

  const closeModalBtn = await homePage.closeModalBtn();
  await closeModalBtn.click();

  console.log("Step 2: Click on Search Field");
  const searchInputField = await homePage.searchInputField();
  await searchInputField.click();

  console.log("Step 3: Type text into Search Field");
  await searchInputField.setValue("Dino");

  console.log("Step 4: Check if search result contains 'Dino'");
  const searchResultsFallingList = await homePage.searchResultsFallingList();
  return assert(await searchResultsFallingList.getText()).equals("Dino stickers");
}

// Search With Invalid Data
async function searchWithInvalidData(browser) {
    console.log("TEST: Valid data search");
  
    console.log("Step 1: Open Home Page");
    const homePage = new HomePage(browser);
    homePage.open();
  
    const closeModalBtn = await homePage.closeModalBtn();
    await closeModalBtn.click();
  
    console.log("Step 2: Fill search field with invalid data and check result");
    const searchResultsFallingList = await homePage.fillingSearchField("asdf");
    return assert (await searchResultsFallingList.isExisting()).toBe(false);
  }

module.exports = {
  searchWithValidData: searchWithValidData,
  searchWithInvalidData: searchWithInvalidData,
};