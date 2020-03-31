module.exports = {
    '@tags': ['log'],
    'Login Fail Test'(browser) {
        const wrongEmailAddress = `wrongaddress@gmail.com`;
        const wrongPassword = 'wrongpassword';
        const formAlertError = 'div[class="alert alert-danger"]';
        const formAlertText = "There is 1 error\nAuthentication failed.";
        const authenticationPage = browser.page.authenticationPage();

        authenticationPage
            .navigate()
            .setLoginAndPassword(wrongEmailAddress, wrongPassword)
            .submitLogin(browser);

        browser
            .assert.visible(formAlertError, "Alert box is visible")
            .getText(formAlertError, function (result) {
                this.assert.equal(result.value, formAlertText, "Error message is correct");
            })
    },
    'Login Correct Test'(browser) {
        const correctEmailAddress = `testnightwatch3023@gmail.com`;
        const correctPassword = 'password';
        const authenticationPage = browser.page.authenticationPage();

        authenticationPage
            .navigate()
            .setLoginAndPassword(correctEmailAddress, correctPassword)
            .submitLogin(browser);

        browser
            .assert.visible('body[id="my-account"]', "My account page is visible");
    }
};