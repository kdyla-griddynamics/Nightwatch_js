module.exports = {
    elements: {
        emailCreateInput: 'input[name="email_create"]',
        emailLoginInput: 'input[id="email"]',
        emailPasswordInput: 'input[id="passwd"]',
        submitCreateButton: 'button[id="SubmitCreate"][type="submit"]',
        submitLoginButton: 'button[id="SubmitLogin"][type="submit"]',
    },
    commands: [{
        setEmailCreate(email) {
            return this
                .setValue('@emailCreateInput', email);
        },
        setLoginAndPassword(login, password) {
            return this
                .setValue('@emailLoginInput', login)
                .setValue('@emailPasswordInput', password);
        },
        submitCreate(browser){
            this
                .waitForElementVisible('@submitCreateButton', 1000, "Submit button visible");
            browser.execute(function () {
                document.getElementById('SubmitCreate').click();
            })
        },
        submitLogin(browser){
            this
                .waitForElementVisible('@submitLoginButton', 1000, "Submit button visible");
            browser.execute(function () {
                document.getElementById('SubmitLogin').click();
            })
        }
    }]
};