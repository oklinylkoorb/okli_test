const {
  checkNavigationOnHomePage, checkShopTabs,
} = require("./checkNavigationOnHomePage.test");
const {
  subscribeWithEmailForTheFirstTime,
} = require("./newsletterSubscription.test");
const { 
  searchWithValidData 
} = require("./searchField.test");

module.exports = {
  checkNavigationOnHomePage: checkNavigationOnHomePage,
  checkShopTabs: checkShopTabs,
  subscribeWithEmailForTheFirstTime: subscribeWithEmailForTheFirstTime,
  searchWithValidData: searchWithValidData,
};
