module.exports = {
    'Account Creation Test'(browser){
        const correctEmailAddress = 'testnightwatch123@gmail.com';
        const page = browser.page.authenticationPage();

        page
            .navigate()
            .setEmailCreate(correctEmailAddress)
            .submitCreate();

        browser
            .assert.urlContains('my-account#account-creation');
    }
};