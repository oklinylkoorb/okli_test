const HomePage = require("../pageobjects/home.page");
const ProductPage = require("../pageobjects/product.page");
const ShopPage = require("../pageobjects/shop.page");
const { assert } = require("../utils/assert");

// Add product to cart
async function addProductToCart(browser) {
    console.log("TEST: Add product to cart");
  
    console.log("Step 1: Open Home Page");
    const homePage = new HomePage(browser);
    homePage.open();
  
    const closeModalBtn = await homePage.closeModalBtn();
    await closeModalBtn.click();
  
    console.log("Step 2: Go to shop");
    const shopBtn = await homePage.shopBtn();
    await shopBtn.click();
  
    console.log("Step 3: Select product and add to cart");
    const shopPage = new ShopPage(browser);
    const productPage = new ProductPage(browser);
    const dinoStickersContainer = await shopPage.dinoStickersContainer();
    await dinoStickersContainer.click();
    const addToCartBtn = await productPage.addToCartBtn();
    await addToCartBtn.click();
  
    console.log("Step 4: Check if product was added to cart");
    const searchResultsFallingList = await homePage.searchResultsFallingList();
    return assert(await searchResultsFallingList.getText()).equals("Dino stickers");
  }

  module.exports = {
    addProductToCart: addProductToCart,
  };