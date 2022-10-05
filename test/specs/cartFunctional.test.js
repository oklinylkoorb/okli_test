const HomePage = require("../pageobjects/home.page");
const ProductPage = require("../pageobjects/product.page");
const ShopPage = require("../pageobjects/shop.page");
const { continueShoppingBtn } = require("../pageobjects/shoppingBag.page");
const ShoppingBag = require("../pageobjects/shoppingBag.page");

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

  //Check order summary after product is removed
  it('Should update order summ after product is removed', async () => {
    console.log("TEST: Add product to cart");

    console.log("Step 1: Open Home Page");
    await HomePage.open();

    console.log("Step 2: Go to shop");
    const shopBtn = await HomePage.shopBtn();
    await shopBtn.click();

    console.log("Step 3: Select multiple products and add them to cart");
    const dinoStickersContainer = await ShopPage.dinoStickersContainer();
    await dinoStickersContainer.click();
    const addToCartBtn = await ProductPage.addToCartBtn();
    await addToCartBtn.click();
    const backToShop = ProductPage.backBtn();
    await backToShop.click();
    const posterFruitsContainer = await ShopPage.posterFruitsContainer();
    await posterFruitsContainer.click();
    await addToCartBtn.click();
    await backToShop.click();
    const stickersSpringContainer = await ShopPage.stickersSpringContainer();
    await stickersSpringContainer.click();
    await addToCartBtn.click();

    console.log("Step 4: Go to cart and check if all products were added");
    const clickBasket = await ProductPage.basketNavBtn();
    await clickBasket.click();
    expect(await dinoStickersContainer.isExisting());
    expect(await posterFruitsContainer.isExisting());
    expect(await stickersSpringContainer.isExisting());

    console.log("Step 5: Remove one product and check if order summ has changed ");
    const removePosterFruit = await ShoppingBag.removeProduct();
    await removePosterFruit.click();
    const orderSumm = ShoppingBag.orderSumm();
    return expect(await orderSumm.isEqual("2.00"));

  })
})
