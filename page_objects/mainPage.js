module.exports = {
    elements: {
        searchQuery: 'input[id="search_query_top"]',
        submitSearch: 'button[name="submit_search"]',
        dressImage: 'img[src="http://automationpractice.com/img/p/2/0/20-small_default.jpg"][class="replace-2x img-responsive"]',
        addToCartButton: 'p[id="add_to_cart"]',
        proceedToCheckoutButton: 'a[class="btn btn-default button button-medium"]',
        proceedToSignIn: 'a[class="button btn btn-default standard-checkout button-medium"]',
        proceedToShipping: 'button[name="processAddress"][type="submit"]',
        proceedToPayment: 'button[name="processCarrier"]',
        emailLoginInput: 'input[id="email"]',
        emailPasswordInput: 'input[id="passwd"]',
        submitLoginButton: 'button[id="SubmitLogin"][type="submit"]',
        termsOfServiceChecker: 'div[id="uniform-cgv"]',
        payByBankWire: 'a[title="Pay by bank wire"]',
        confirmOrderButton: 'button[class="button btn btn-default button-medium"]'
    },
    commands: [{
        searchDress() {
            return this
                .setValue('@searchQuery', 'dress')
                .click('@submitSearch')
        },
        chooseDress() {
           return this
                .waitForElementVisible('@dressImage', 3000, false, "Dress image is visible")
                .click('@dressImage');
        },
        addToCart() {
            return this
                .getLocationInView('@addToCartButton')
                .waitForElementVisible('@addToCartButton', 3000, false, "Add to cart button is visible")
                .click('@addToCartButton');
        },
        proceedToCheckout() {
            return this
                .waitForElementVisible('@proceedToCheckoutButton', 3000, false, "Proceed to checkout button is visible")
                .click('@proceedToCheckoutButton');
        },
        proceedToSignIn(){
            return this
                .waitForElementVisible('@proceedToSignIn', 3000, false, "Proceed to sign in button is visible")
                .click('@proceedToSignIn');
        },
        setLoginAndPassword(login, password) {
            return this
                .setValue('@emailLoginInput', login)
                .setValue('@emailPasswordInput', password);
        },
        submitLogin(browser){
            this
                .waitForElementVisible('@submitLoginButton', 1000, "Submit button visible");
            browser.execute(function () {
                document.getElementById('SubmitLogin').click();
            })
        },
        proceedToShipping(){
            return this
                .waitForElementVisible('@proceedToShipping', 3000, false, "Proceed to shipping button is visible")
                .click('@proceedToShipping');
        },
        checkTermsOfService(){
            return this
                .waitForElementVisible('@termsOfServiceChecker',3000, false, "Terms of service checker is visible")
                .click('@termsOfServiceChecker');
        },
        proceedToPayment(){
            return this
                .waitForElementVisible('@proceedToPayment', 3000, false, "Proceed to payment button is visible")
                .click('@proceedToPayment');
        },
        payByBankWire(){
            return this
                .waitForElementVisible('@payByBankWire', 3000, false, "Pay by bank wire button is visible")
                .click('@payByBankWire');
        },
        confirmOrder(){
            return this
                .waitForElementVisible('@confirmOrderButton', 3000, false, "Confirm order button is visible")
                .click('@confirmOrderButton');
        },
    }]
};