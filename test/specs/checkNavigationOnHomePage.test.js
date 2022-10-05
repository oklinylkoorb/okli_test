const HomePage = require("../pageobjects/home.page");
const ShopPage = require("../pageobjects/shop.page");


describe('Navigation on Home page Test', () => {

  //Check Navigation On Home Page
  it('Should open "Shop page" from "Home page"', async () => {
    console.log("TEST: Shop page can be opened from home");

    console.log("Step 1: Open Home Page");
    await HomePage.open();
    const closeModalBtn = await HomePage.closeModalBtn();
    await closeModalBtn.click();

    console.log("Step 2: Click on Shop Btn");
    const shopBtn = await HomePage.shopBtn();
    await shopBtn.click();

    console.log("Step 3: Check that Dino Stickers present");
    const dinoStickersTitle = await ShopPage.dinoStickersTitle();
    return expect(await dinoStickersTitle.getText()).toContain("Dino stickers");
  });

  //Check If Shop Tabs Opens
  it('Should open shop tabs from shop page', async () => {
    console.log("TEST: shop tabs can be opened from shop page");

    console.log("Step 1: Open Home Page");
    await HomePage.open();
    const closeModalBtn = await HomePage.closeModalBtn();
    await closeModalBtn.click();

    console.log("Step 2: Click on Shop Btn");
    const shopBtn = await HomePage.shopBtn();
    await shopBtn.click();

    console.log("Step 3: Click on 'Free' category");
    const freeCategoryTab = await ShopPage.freeCategoryTab();
    await freeCategoryTab.click();
    const coloringChristmasTreeTitle = await ShopPage.coloringChristmasTreeTitle();
    expect(await coloringChristmasTreeTitle.getText()).toContain("Coloring Christmas tree");

    console.log("Step 4: Click on 'Games' category");
    const gamesCategoryTab = await ShopPage.gamesCategoryTab();
    await gamesCategoryTab.click();
    const myFirstGamesTitle = await ShopPage.myFirstGamesTitle();
    expect(await myFirstGamesTitle.getText()).toContain("My first games");

    console.log("Step 5: Click on 'Creativity' category");
    const creativityCategoryTab = await ShopPage.creativityCategoryTab();
    await creativityCategoryTab.click();
    const postcardChristmasDeerTitle = await ShopPage.postcardChristmasDeerTitle();
    expect(await postcardChristmasDeerTitle.getText()).toContain("Postcard Christmas deer");

    console.log("Step 6 Click on 'Stickers' category");
    const stickersCategoryTab = await ShopPage.stickersCategoryTab();
    await stickersCategoryTab.click();
    const dinoStickersTitle = await ShopPage.dinoStickersTitle();
    expect(await dinoStickersTitle.getText()).toContain("Dino stickers");

    console.log("Step 7: Click on 'Drawing' category");
    const drawingCategoryTab = await ShopPage.drawingCategoryTab();
    await drawingCategoryTab.click();
    await ShopPage.coloringChristmasTreeTitle();
    expect(await coloringChristmasTreeTitle.getText()).toContain("Coloring Christmas tree");

    console.log("Step 8: Click on 'Decoration' category");
    const decorationCategoryTab = await ShopPage.decorationCategoryTab();
    await decorationCategoryTab.click();
    const posterFruitsTitle = await ShopPage.posterFruitsTitle();
    return expect(await posterFruitsTitle.getText()).toContain("Poster. Fruits");

  });

});
