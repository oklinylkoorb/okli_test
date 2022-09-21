const {
  checkNavigationOnHomePage, checkShopTabs,
} = require("./checkNavigationOnHomePage.test");
const {
  subscribeWithEmailForTheFirstTime,
} = require("./newsletterSubscription.test");

module.exports = {
  checkNavigationOnHomePage: checkNavigationOnHomePage,
  checkShopTabs: checkShopTabs,
  subscribeWithEmailForTheFirstTime: subscribeWithEmailForTheFirstTime,
};
