module.exports = {
    elements: {
        searchQuery: 'input[id="search_query_top"]',
        submitSearch: 'button[name="submit_search"]',
        dressImage: 'img[src="http://automationpractice.com/img/p/2/0/20-small_default.jpg"][class="replace-2x img-responsive"]',
        addToCartButton: 'p[id="add_to_cart"]',
        proceedToCheckoutButton: 'a[class="btn btn-default button button-medium"]',
    },
    commands: [{
        searchDress() {
            return this
                .setValue('@searchQuery', 'dress')
                .click('@submitSearch')
        },
        chooseDress() {
           return this
                .waitForElementVisible('@dressImage', 3000, false)
                .click('@dressImage');
        },
        addToCart() {
            return this
                .getLocationInView('@addToCartButton')
                .waitForElementVisible('@addToCartButton', 3000, false)
                .click('@addToCartButton');
        },
        proceedToCkeckout(){
            return this
                .waitForElementVisible('@proceedToCheckoutButton', 3000, false)
                .click('@proceedToCheckoutButton');
        }
    }]
};