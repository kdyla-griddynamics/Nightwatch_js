module.exports = {
    '@tags': ['se'],
    'Submit Email Address Correct Test'(browser) {
        const url = browser.globals.authPageUrl;
        const correctEmailsList = browser.globals.emailsToCheckList;
        const page = browser.page.authenticationPage();
        const authenticationBody = 'body[id="authentication"]';

        //checking if typing correct email address will cause entering an account creation form
        for (i = 0; i < correctEmailsList.length; i++) {
            page
                .navigate(url)
                .setEmailCreate(correctEmailsList[i])
                .submitCreate(browser);

            browser
                .waitForElementVisible(authenticationBody, 3000, function () {
                        this.assert.visible(authenticationBody);
                    },
                    "Authentication page is visible");
        }
    },
    'Submit Email Address Fail Test'(browser) {
        const url = browser.globals.authPageUrl;
        const registeredEmailsList = browser.globals.registeredEmailsList;
        const wrongEmailsList = browser.globals.wrongEmailsList;
        const emailAlertError = 'div[id="create_account_error"]';
        const emailRegisteredText = 'An account using this email address has already been registered. Please enter a valid password or request a new one.';
        const emailIncorrectText = 'Invalid email address.';
        const page = browser.page.authenticationPage();

        //checking if typing incorrect email address will cause alert box to be visible
        // with appropriate error message
        for (i = 0; i < wrongEmailsList.length; i++) {
            page
                .navigate(url)
                .setEmailCreate(wrongEmailsList[i])
                .submitCreate(browser);

            browser
                .assert.visible(emailAlertError, "Alert box is visible")
                .getText(emailAlertError, function (result) {
                    this.assert.equal(result.value, emailIncorrectText, "Incorrect email address text is visible");
                });
        }

        //checking if typing already registered email address will cause alert box to be visible
        // with appropriate error message
        for (i = 0; i < registeredEmailsList.length; i++) {
            page
                .navigate(url)
                .setEmailCreate(registeredEmailsList[i])
                .submitCreate(browser);

            browser
                .assert.visible(emailAlertError, "Email error alert is visible");
            browser.getText(emailAlertError, function (result) {
                this.assert.equal(result.value, emailRegisteredText, "Already registered email address text is visible");
            });
        }
    }
};