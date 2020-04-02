module.exports = {
    '@tags': ['log'],
    'Login Fail Test'(browser) {
        const url = browser.globals.authPageUrl;
        const wrongEmailsList = browser.globals.emailsToCheckList;
        const wrongPassword = 'wrongpassword';
        const formAlertError = 'div[class="alert alert-danger"]';
        const formAlertText = "There is 1 error\nAuthentication failed.";
        const authenticationPage = browser.page.authenticationPage();

        // checking if logging in with incorrect credentials
        // will cause alert box with appropriate error message
        for (i = 0; i < wrongEmailsList.length; i++) {
            authenticationPage
                .navigate(url)
                .setLoginAndPassword(wrongEmailsList[i], wrongPassword)
                .submitLogin(browser);

            browser
                .assert.visible(formAlertError, "Alert box is visible")
                .getText(formAlertError, function (result) {
                    this.assert.equal(result.value, formAlertText, "Error message is correct");
                })
        }
    },
    'Login Correct Test'(browser) {
        const url = browser.globals.authPageUrl;
        const correctEmailsList = browser.globals.registeredEmailsList;
        const correctPassword = 'password';
        const myAccountBody = 'body[id="my-account"]';
        const authenticationBody = 'body[id="authentication"]';
        const authenticationPage = browser.page.authenticationPage();

        // checking if logging in with correct credentials
        // will redirect to my account page
        for (i = 0; i < correctEmailsList.length; i++) {
            authenticationPage
                .navigate(url)
                .setLoginAndPassword(correctEmailsList[i], correctPassword)
                .submitLogin(browser);

            browser
                .waitForElementVisible(myAccountBody, 3000, function () {
                        this.assert.visible(myAccountBody);
                    },
                    "My account page is visible");

            authenticationPage
                .signOut()
                .waitForElementVisible(authenticationBody, 3000, "Authentication page is visible");
        }
    }
};