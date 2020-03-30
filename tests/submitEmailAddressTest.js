module.exports = {
    'Submit Email Address Test'(browser) {
        const correctEmailAddress = 'testnightwatch123@gmail.com';
        const registeredEmailAddress = 'test123@gmail.com';
        const incorrectEmailAddress = 'test123gmail.com';
        const emailAlertError = 'div[id="create_account_error"]';
        const emailRegisteredText = 'An account using this email address has already been registered. Please enter a valid password or request a new one.';
        const emailIncorrectText = 'Invalid email address.';
        const page = browser.page.authenticationPage();

        //checking if typing incorrect email address will cause alert box to be visible
        // with appropriate error message
        page
            .navigate()
            .setEmailCreate(incorrectEmailAddress)
            .submitCreate();

        browser
            .assert.visible(emailAlertError, "Email error alert is visible");
        browser.getText(emailAlertError, function (result) {
            this.assert.equal(result.value, emailIncorrectText, "Incorrect email address text is visible");
        });

        //checking if typing already registered email address will cause alert box to be visible
        // with appropriate error message
        page
            .navigate()
            .setEmailCreate(registeredEmailAddress)
            .submitCreate();

        browser
            .assert.visible(emailAlertError, "Email error alert is visible");
        browser.getText(emailAlertError, function (result) {
            this.assert.equal(result.value, emailRegisteredText, "Already registered email address text is visible");
        });

        //checking if typing correct email address will cause entering an account creation form
        page
            .navigate()
            .setEmailCreate(correctEmailAddress)
            .submitCreate();

        browser
            .assert.urlContains('my-account#account-creation', "Account creation website is visible");
    }
};