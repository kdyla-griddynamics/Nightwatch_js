module.exports = {
    '@tags': ['ac'],
    'Account Creation Test'(browser) {
        const correctEmailAddress = 'testnightwatch123@gmail.com';
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
            .submitCreate();

        browser
            .assert.urlContains('my-account#account-creation', "Account creation page is visible");

        formPage
            .setGender()
            .setFirstAndLastName(firstName,lastName)
            .setPassword(password)
            .setAddressFirstAndLastName(firstName,lastName)
            .setAddress(address)
            .setCity(city)
            .selectFromList('@stateDropdown', 38)
            .setPostcode(postcode)
            .pause(2000)
            .setMobile(mobile)
            .pause(2000)
            .submitRegister();

        browser
            .assert.urlContains('index.php?controller=my-account', "My account page is visible");
    }
};