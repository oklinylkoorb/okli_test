/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
 module.exports = class Page {
  
    // Page objects
   
     open(path = "") {
      browser.maximizeWindow(); 
      return browser.url(`https://mirakids.net/${path}`);
     }
   
     subscribeInputField() {
       return $("#subscribe [name='Put your e-mail here']");
     }
   
     subscribeBtn() {
       return $("#subscribe button");
     }

     basketContainer() {
       return $('.kBLtXO');
     }
   
     basketNavBtn() {
       return $("#basketNav");
     }

     wishlistNavBtn() {
      return $("#wishlistNav");
    }
   
     subscriptionSuccessMsg() {
       return $("[name='Done!']");
     }
   
     searchInputField() {
       return $("[name='Search...']");
     }
   
     searchResultsFallingList() {
       return $("#results a");
     }
     
     pageTitle() {
      return $(".jnPWak");
    }
   
   // Functions
   
     async fillingSearchField(query) {
       const inputField = await this.searchInputField();
       await inputField.click();
       await inputField.setValue(query);
       return this.searchResultsFallingList();
     }
   
     async fillingEmailForm(query) {
       const emailInputField = await this.subscribeInputField();
       await emailInputField.scrollIntoView();
       await emailInputField.click();
       await emailInputField.setValue(query);
       const clickSubBtn = await this.subscribeBtn();
       await clickSubBtn.click();
       return this.subscriptionSuccessMsg();
     }
   
   };
   