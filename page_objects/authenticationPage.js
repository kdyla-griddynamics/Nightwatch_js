module.exports = {
    url: "http://automationpractice.com/index.php?controller=authentication&back=my-account",
    elements: {
        emailInput: 'input[name="email_create"]',
        submitCreateButton: 'button[name="SubmitCreate"][type="submit"]',
    },
    commands: [{
        setEmailCreate(email) {
            return this
                .setValue('@emailInput', email);
        },
        submitCreate() {
            return this
                .click('@submitCreateButton');
        },
    }]
};