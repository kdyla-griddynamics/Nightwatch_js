module.exports = {
    '@tags': ['log'],
    'Login Fail Test'(browser) {
        const url = browser.globals.authPageUrl;
        const wrongEmailAddress = `wrongaddress@gmail.com`;
        const wrongPassword = 'wrongpassword';
        const formAlertError = 'div[class="alert alert-danger"]';
        const formAlertText = "There is 1 error\nAuthentication failed.";
        const authenticationPage = browser.page.authenticationPage();

        // checking if logging in with incorrect credentials
        // will cause alert box with appropriate error message
        authenticationPage
            .navigate(url)
            .setLoginAndPassword(wrongEmailAddress, wrongPassword)
            .submitLogin(browser);

        browser
            .assert.visible(formAlertError, "Alert box is visible")
            .getText(formAlertError, function (result) {
                this.assert.equal(result.value, formAlertText, "Error message is correct");
            })
    },
    'Login Correct Test'(browser) {
        const url = browser.globals.authPageUrl;
        const correctEmailAddress = browser.globals.registeredEmail;
        const correctPassword = 'password';
        const myAccountBody = 'body[id="my-account"]';
        const authenticationPage = browser.page.authenticationPage();

        // checking if logging in with correct credentials
        // will redirect to my account page
        authenticationPage
            .navigate(url)
            .setLoginAndPassword(correctEmailAddress, correctPassword)
            .submitLogin(browser);

        browser
            .assert.visible(myAccountBody, "My account page is visible");
    }
};