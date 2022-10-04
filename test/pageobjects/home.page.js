const Page = require("./page");

class HomePage extends Page {
  shopBtn() {
    return $("#shopBtn");
  }

  closeModalBtn() {
    return $(".mc-closeModal");
  }

  open() {
    return super.open();
  }
}

module.exports = new HomePage();
