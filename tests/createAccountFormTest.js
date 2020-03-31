module.exports = {
    '@tags': ['ac'],
    'Account Creation Fail Test'(browser) {
        const correctEmailAddress = `testnightwatch3013@gmail.com`;
        const formAlertError = 'div[class="alert alert-danger"]';
        const formAlertText = "There are 8 errors\n" + "You must register at least one phone number.\n" +
            "lastname is required.\n" +
            "firstname is required.\n" +
            "passwd is required.\n" +
            "address1 is required.\n" +
            "city is required.\n" +
            "The Zip/Postal code you've entered is invalid. It must follow this format: 00000\n" +
            "This country requires you to choose a State.";
        const authenticationPage = browser.page.authenticationPage();
        const formPage = browser.page.accountCreationPage();

        authenticationPage
            .navigate()
            .setEmailCreate(correctEmailAddress)
            .submitCreate(browser);

        browser
            .assert.urlContains('my-account#account-creation', "Account creation page is visible");

        formPage
            .submitRegister(browser);

        browser
            .assert.visible(formAlertError, "Alert box is visible")
            .getText(formAlertError, function (result) {
                this.assert.equal(result.value, formAlertText, "Error message is correct");
            })
    },
    'Account Creation Correct Test'(browser) {
        const correctEmailAddress = `testnightwatch3023@gmail.com`;
        const firstName = 'FirstName';
        const lastName = 'LastName';
        const password = 'password';
        const address = 'Foo Street 100';
        const city = 'Scranton';
        const postcode = '90210';
        const mobile = '777888999';
        const authenticationPage = browser.page.authenticationPage();
        const formPage = browser.page.accountCreationPage();

        authenticationPage
            .navigate()
            .setEmailCreate(correctEmailAddress)
            .submitCreate(browser);

        browser
            .assert.urlContains('my-account#account-creation', "Account creation page is visible");

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
            .assert.urlContains('index.php?controller=my-account', "My account page url is correct")
            .assert.visible('body[id="my-account"]', "My account page is visible");
    }
};