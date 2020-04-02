module.exports = {
    '@tags': ['crt'],
    'Add To Cart Test'(browser) {
        const url = browser.globals.mainPage;
        const page = browser.page.mainPage();
        const correctEmailAddress = browser.globals.registeredEmailsList;
        const correctPassword = 'password';
        const checkoutHeader = 'h1[id="cart_title"]';
        const checkoutHeaderText = 'SHOPPING-CART SUMMARY';
        const addressHeader = 'h1[class="page-heading"]';
        const addressHeaderText = 'ADDRESSES';
        const shippingHeader = 'h1[class="page-heading"]';
        const shippingHeaderText = 'SHIPPING';
        const paymentHeader = 'h1[class="page-heading"]';
        const paymentHeaderText = 'PLEASE CHOOSE YOUR PAYMENT METHOD';
        const emptyCartAlertBox = 'p[class="alert alert-warning"]';
        const payByBankWire = 'a[title="Pay by bank wire"]';
        const payByCheck = 'a[title="Pay by check."]';
        const bankWireBody = 'body[id="module-bankwire-payment"]';
        const orderConfirmationBody = 'body[id="order-confirmation"]';

        page
            .navigate(url)
            .maximizeWindow()
            .searchDress()
            .chooseDress()
            .addToCart()
            .proceedToCheckout()
            .pause(1000);

        browser
            .assert.visible(checkoutHeader, "Checkout page is visible")
            .assert.containsText(checkoutHeader, checkoutHeaderText, "Header text is correct")
            .assert.not.visible(emptyCartAlertBox, "Shopping cart is not empty");

        page
            .proceedToSignIn()
            .setLoginAndPassword(correctEmailAddress.pop(), correctPassword)
            .submitLogin(browser);

        browser
            .assert.visible(addressHeader, "Address page is visible")
            .assert.containsText(addressHeader, addressHeaderText, "Header text is correct");

        page
            .proceedToShipping()
            .checkTermsOfService();

        browser
            .assert.visible(shippingHeader, "Shipping page is visible")
            .assert.containsText(shippingHeader, shippingHeaderText, "Header text is correct");

        page
            .proceedToPayment();

        browser
            .assert.visible(paymentHeader, "Payment page is visible")
            .assert.containsText(paymentHeader, paymentHeaderText, "Header text is correct")
            .assert.visible(payByBankWire, "Pay by bank wire option is available")
            .assert.visible(payByCheck, "Pay by check option is available");

        page
            .payByBankWire();

        browser
            .assert.visible(bankWireBody, "Bank wire payment page is visible");

        page
            .confirmOrder();

        browser
            .assert.visible(orderConfirmationBody, "Order confirmation page is visible");
    }
};