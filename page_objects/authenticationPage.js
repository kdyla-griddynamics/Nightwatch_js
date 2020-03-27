module.exports = {
    url: "http://automationpractice.com/index.php?controller=authentication&back=my-account",
    elements: {
        emailInput: 'input[name="email_create"]',
        submitCreateButton: 'button[id="SubmitCreate"][type="submit"]',
    },
    commands: [{
        setEmailCreate(email) {
            return this
                .setValue('@emailInput', email);
        },
        submitCreate() {
            return this
                .submitForm('@submitCreateButton', function (result) {
                    this.assert.strictEqual(result.status, 0);
                });
        },
    }]
};