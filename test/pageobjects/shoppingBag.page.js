const Page = require("./page");

class ShoppingBag extends Page {

  // Page objects

  continueShoppingBtn() {
    return $(".knvWZX");
  }
  
  removeProduct() {
    return $("[name='poster-fruits'] .cSYVpn");
  }
  
  removeDinoStickerProduct() {
    return $(".jgJnhG button");
  }

  orderSumm() {
    return $(".dndRjW");
  }

  orderSummTitle() {
    return $(".kDLdnT");
  }

  deliveryEmail() {
    return $(".fwHwjp");
  }

  buyBtn() {
    return $(".dLhUqw");
  }

  checkoutCardNumberInputField() {
    return $("#cardNumber");
  }
  
  checkoutCancelBtn() {
    return $("[href='https://mirakids.net/checkout/cancel']");
  }

  // Functions

  async fillingCheckoutEmailForm(query) {
    const deliveryEmailInputField = await this.deliveryEmail();
    await deliveryEmailInputField.scrollIntoView();
    await deliveryEmailInputField.click();
    await deliveryEmailInputField.setValue(query);
    const clickBuyBtn = await this.buyBtn();
    await clickBuyBtn.click();
    return this.checkoutCardNumberInputField();
  }
}

module.exports = new ShoppingBag();
