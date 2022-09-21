const {
  checkNavigationOnHomePage,
} = require("./checkNavigationOnHomePage.test");
const { subscribeWithEmailForTheFirstTime } = require("./newsletterSubscription.test");

module.exports = {
  checkNavigationOnHomePage: checkNavigationOnHomePage,
  subscribeWithEmailForTheFirstTime: subscribeWithEmailForTheFirstTime,
};
