const HomePage = require("../pageobjects/home.page");
const ProductPage = require("../pageobjects/product.page");
const ShopPage = require("../pageobjects/shop.page");

describe('Cart Functionality Test', () => {

  // Add Product To Cart
  it('Should add product to cart', async () => {
    console.log("TEST: Add product to cart");
  
    console.log("Step 1: Open Home Page");
    await HomePage.open();
  
    const closeModalBtn = await HomePage.closeModalBtn();
    await closeModalBtn.click();
  
    console.log("Step 2: Go to shop");
    const shopBtn = await HomePage.shopBtn();
    await shopBtn.click();
  
    console.log("Step 3: Select product and add to cart");
    const dinoStickersContainer = await ShopPage.dinoStickersContainer();
    await dinoStickersContainer.click();
    const addToCartBtn = await ProductPage.addToCartBtn();
    await addToCartBtn.click();
 
    console.log("Step 4: Go to cart and check if product was added");
    const clickBasket = await ProductPage.basketNavBtn();
    await clickBasket.click();
    return expect(await dinoStickersContainer.isExisting());
  })

})
