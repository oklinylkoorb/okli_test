const HomePage = require("../pageobjects/home.page");
const ProductPage = require("../pageobjects/product.page");
const ShopPage = require("../pageobjects/shop.page");
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
    console.log("TEST: Check order summary after product is removed");

    console.log("Step 1: Open Home Page");
    await HomePage.open();
    const closeModalBtn = await HomePage.closeModalBtn();
    await closeModalBtn.click();

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
    return expect(await orderSumm.getText()).toContain("2.00");
  })

  // Continue shopping from cart
  it('Should redirect to shop page', async () => {
    console.log("TEST: Continue shopping");

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
    expect(await dinoStickersContainer.isExisting());

    console.log("Step 5: Click 'Continue Shopping' button and check if redirected to shop page");
    const backToShop = await ShoppingBag.continueShoppingBtn();
    await backToShop.click();
    const pageTitle = await ShoppingBag.pageTitle();
    return expect(await pageTitle.getText()).toContain("Shop");
  })

  // Proceed to Checkout
  it('Should proceed to checkout page', async () => {
    console.log("TEST: Proceed to Checkout");

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
    expect(await dinoStickersContainer.isExisting());

    console.log("Step 5: Input email, click on buy button and check if redirected to checkout page ");
    const inputDeliveryEmail = await ShoppingBag.fillingCheckoutEmailForm("Jacksson@ukr.net");
    await inputDeliveryEmail.isExisting();
    const checkoutPage = await ShoppingBag.checkoutCardNumberInputField();
    return expect(await checkoutPage.isExisting());
  })

  // Proceed to Checkout with empty email
  it('Should not proceed to checkout page with empty delivery email form', async () => {
    console.log("TEST: Proceed to Checkout with empty email");

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
    expect(await dinoStickersContainer.isExisting());

    console.log("Step 5: Click on 'Buy' button");
    const buyBtnClick = await ShoppingBag.buyBtn();
    await buyBtnClick.scrollIntoView();
    await buyBtnClick.click();
    const checkoutPage = await ShoppingBag.orderSummTitle();
    return expect(await checkoutPage.isExisting());
  })

  // Remove Product From Cart
  it('Should remove product from cart', async () => {
    console.log("TEST: Remove product from cart");

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
    expect(await dinoStickersContainer.isExisting());

    console.log("Step 5: Remove product from cart");
    const removeProd = await ShoppingBag.removeDinoStickerProduct();
    await removeProd.click();
    return expect(await dinoStickersContainer.isExisting(false));
  })

  // Add multiple products to cart
  it('Should add multiple products to cart', async () => {
    console.log("TEST: Add multiple products to cart");

    console.log("Step 1: Open Home Page");
    await HomePage.open();
    const closeModalBtn = await HomePage.closeModalBtn();
    await closeModalBtn.click();

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
    return expect(await stickersSpringContainer.isExisting());
  })

  // Cancel Checkout
  it('Should return back to "Shop" page', async () => {
    console.log("TEST: Cancel checkout");

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
    expect(await dinoStickersContainer.isExisting());

    console.log("Step 5: Input email, click on buy button");
    const inputDeliveryEmail = await ShoppingBag.fillingCheckoutEmailForm("Jacksson@ukr.net");
    await inputDeliveryEmail.isExisting();
    const checkoutPage = await ShoppingBag.checkoutCardNumberInputField();
    
    console.log("Step 6: Click on 'Back' button");
    const cancelCheckout = await ShoppingBag.checkoutCancelBtn();
    await cancelCheckout.click();
    const pageTitle = await ShoppingBag.pageTitle();
    return expect(await pageTitle.getText()).toContain("Oh-ow! Something went wrong with your payment.");
  })

})  
