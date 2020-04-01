module.exports = {
    '@tags': ['se'],
    'Submit Email Address Correct Test'(browser) {
        const url = browser.globals.authPageUrl;
        const correctEmailAddress = browser.globals.emailToCheckSubmitButton;
        const page = browser.page.authenticationPage();

        //checking if typing correct email address will cause entering an account creation form
        page
            .navigate(url)
            .setEmailCreate(correctEmailAddress)
            .submitCreate(browser);

        browser
            .assert.urlContains('my-account#account-creation', "Account creation website is visible");
    },
    'Submit Email Address Fail Test'(browser) {
        const url = browser.globals.authPageUrl;
        const registeredEmailAddress = browser.globals.registeredEmail;
        const incorrectEmailAddress = 'test123gmail.com';
        const emailAlertError = 'div[id="create_account_error"]';
        const emailRegisteredText = 'An account using this email address has already been registered. Please enter a valid password or request a new one.';
        const emailIncorrectText = 'Invalid email address.';
        const page = browser.page.authenticationPage();

        //checking if typing incorrect email address will cause alert box to be visible
        // with appropriate error message
        page
            .navigate(url)
            .setEmailCreate(incorrectEmailAddress)
            .submitCreate(browser);

        browser
            .assert.visible(emailAlertError, "Alert box is visible")
            .getText(emailAlertError, function (result) {
                this.assert.equal(result.value, emailIncorrectText, "Incorrect email address text is visible");
            });

        //checking if typing already registered email address will cause alert box to be visible
        // with appropriate error message
        page
            .navigate(url)
            .setEmailCreate(registeredEmailAddress)
            .submitCreate(browser);

        browser
            .assert.visible(emailAlertError, "Email error alert is visible");
        browser.getText(emailAlertError, function (result) {
            this.assert.equal(result.value, emailRegisteredText, "Already registered email address text is visible");
        });
    }
};