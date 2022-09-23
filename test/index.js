const {
  checkNavigationOnHomePage, checkShopTabs,
} = require("./checkNavigationOnHomePage.test");
const {
  subscribeWithEmailForTheFirstTime, subscribeWithEmptyField, subscribeWithAlreadyRegisteredEmail, subscribeWithInvalidData,
} = require("./newsletterSubscription.test");
const { 
  searchWithValidData, searchWithInvalidData,
} = require("./searchField.test");
const {
  addProductToCart 
} = require("./cartFunctional.test");

module.exports = {
  checkNavigationOnHomePage: checkNavigationOnHomePage,
  checkShopTabs: checkShopTabs,
  subscribeWithEmailForTheFirstTime: subscribeWithEmailForTheFirstTime,
  subscribeWithEmptyField: subscribeWithEmptyField,
  subscribeWithAlreadyRegisteredEmail: subscribeWithAlreadyRegisteredEmail,
  subscribeWithInvalidData: subscribeWithInvalidData,
  searchWithValidData: searchWithValidData,
  searchWithInvalidData: searchWithInvalidData,
  addProductToCart: addProductToCart,
};
