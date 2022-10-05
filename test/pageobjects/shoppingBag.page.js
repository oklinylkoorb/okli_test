const Page = require("./page");

class ShoppingBag extends Page {
  continueShoppingBtn() {
    return $(".knvWZX");
  }
  
  removeProduct() {
    return $("[name='poster-fruits'] .cSYVpn");
  }
  
  orderSumm() {
    return $(".dndRjW");
  }
}

module.exports = new ShoppingBag();
