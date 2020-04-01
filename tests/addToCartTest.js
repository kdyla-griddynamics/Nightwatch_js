module.exports = {
    '@tags': ['crt'],
    'Add To Cart Test'(browser) {
        const url = browser.globals.mainPage;
        const page = browser.page.mainPage();

        page
            .navigate(url)
            .maximizeWindow()
            .searchDress()
            .chooseDress()
            .addToCart()
            .proceedToCkeckout()
            .pause(3000);
    }
};