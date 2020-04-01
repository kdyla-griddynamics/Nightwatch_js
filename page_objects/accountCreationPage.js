module.exports = {
    elements: {
        genderMaleRadioInput: 'label[for="id_gender1"]',
        genderFemaleRadioInput: 'label[for="id_gender2"]',
        firstName: 'input[id="customer_firstname"]',
        addressFirstName: 'input[id="firstname"]',
        lastName: 'input[id="customer_lastname"]',
        addressLastName: 'input[id="lastname"]',
        password: 'input[id="passwd"]',
        address: 'input[id="address1"]',
        city: 'input[id="city"]',
        postcode: 'input[id="postcode"]',
        mobile: 'input[id="phone_mobile"]',
        stateDropdown: 'select[id="id_state"]',
        submitRegisterButton: 'button[name="submitAccount"]',
    },
    commands: [{
        setGender() {
            return this
                .click('@genderMaleRadioInput')
        },
        setFirstAndLastName(firstName, lastName) {
            return this
                .setValue('@firstName', firstName)
                .setValue('@lastName', lastName);
        },
        setPassword(password) {
            return this
                .setValue('@password', password);
        },
        setAddressFirstAndLastName(firstName, lastName) {
            return this
                .clearValue('@addressFirstName')
                .setValue('@addressFirstName', firstName)
                .clearValue('@addressLastName')
                .setValue('@addressLastName', lastName);
        },
        setAddress(address) {
            return this
                .setValue('@address', address);
        },
        setCity(city) {
            return this
                .setValue('@city', city);
        },
        selectFromList(selector, value) {
            return this
                .click(selector)
                .click(`option[value="${value}"]`);
        },
        setPostcode(postcode) {
            return this
                .setValue('@postcode', postcode);
        },
        setMobile(mobile) {
            return this
                .setValue('@mobile', mobile);
        },
        submitRegister(browser) {
            this
                .waitForElementVisible('@submitRegisterButton', 1000, "Submit button visible");
            browser.execute(function () {
                document.getElementById('submitAccount').click();
            })
        }
    }]
};