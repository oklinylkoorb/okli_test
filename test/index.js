const {
  checkNavigationOnHomePage,
} = require("./checkNavigationOnHomePage.test");
const { subscribeWithEmailForTheFirstTime } = require("./newsletterSubscription");

module.exports = {
  checkNavigationOnHomePage: checkNavigationOnHomePage,
  subscribeWithEmailForTheFirstTime: subscribeWithEmailForTheFirstTime,
};
