module.exports = {
    '@tags': ['ac'],
    'Account Creation Fail Test'(browser) {
        const url = browser.globals.authPageUrl;
        const correctEmailAddress = browser.globals.emailToCreateAccount;
        const formAlertError = 'div[class="alert alert-danger"]';
        const formAlertText = "There are 8 errors\n" + "You must register at least one phone number.\n" +
            "lastname is required.\n" +
            "firstname is required.\n" +
            "passwd is required.\n" +
            "address1 is required.\n" +
            "city is required.\n" +
            "The Zip/Postal code you've entered is invalid. It must follow this format: 00000\n" +
            "This country requires you to choose a State.";
        const correctAccountCreationUrl = 'my-account#account-creation';
        const authenticationPage = browser.page.authenticationPage();
        const formPage = browser.page.accountCreationPage();

        // checking if creating account without filling
        // required fields will cause alert box with appropriate error messages
        authenticationPage
            .navigate(url)
            .setEmailCreate(correctEmailAddress)
            .submitCreate(browser);

        browser
            .assert.urlContains(correctAccountCreationUrl, "Account creation page is visible");

        formPage
            .submitRegister(browser);

        browser
            .assert.visible(formAlertError, "Alert box is visible")
            .getText(formAlertError, function (result) {
                this.assert.equal(result.value, formAlertText, "Error message is correct");
            })
    },
    'Account Creation Correct Test'(browser) {
        const url = browser.globals.authPageUrl;
        const correctEmailAddress = browser.globals.emailToCreateAccount;
        const firstName = 'FirstName';
        const lastName = 'LastName';
        const password = 'password';
        const address = 'Foo Street 100';
        const city = 'Scranton';
        const postcode = '90210';
        const mobile = '777888999';
        const correctMyAccountUrl = 'index.php?controller=my-account';
        const correctAccountCreationUrl = 'my-account#account-creation';
        const myAccountBody = 'body[id="my-account"]';
        const authenticationPage = browser.page.authenticationPage();
        const formPage = browser.page.accountCreationPage();

        // checking if creating account with new email address
        // correct data in required fields will redirect to my account page
        authenticationPage
            .navigate(url)
            .setEmailCreate(correctEmailAddress)
            .submitCreate(browser);

        browser
            .assert.urlContains(correctAccountCreationUrl, "Account creation page is visible");

        formPage
            .setGender()
            .setFirstAndLastName(firstName, lastName)
            .verify.value('@firstName', firstName, "First name set")
            .verify.value('@lastName', lastName, "Last name set")
            .setPassword(password)
            .verify.value('@password', password, "Password set")
            .setAddressFirstAndLastName(firstName, lastName)
            .verify.value('@addressFirstName', firstName, "Address first name set")
            .verify.value('@addressLastName', lastName, "Address last name set")
            .setAddress(address)
            .verify.value('@address', address, "Address set")
            .setCity(city)
            .verify.value('@city', city, "City set")
            .selectFromList('@stateDropdown', 38)
            .verify.value('@stateDropdown', '38', "State set")
            .setPostcode(postcode)
            .verify.value('@postcode', postcode, "Postcode set")
            .setMobile(mobile)
            .verify.value('@mobile', mobile, "Mobile set")
            .submitRegister(browser);

        browser
            .assert.urlContains(correctMyAccountUrl, "My account page url is correct")
            .assert.visible(myAccountBody, "My account page is visible");
    }
};