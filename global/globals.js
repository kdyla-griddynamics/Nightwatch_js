const allureReporter = require('nightwatch-allure');
const authPage = 'http://automationpractice.com/index.php?controller=authentication&back=my-account';
const mainPage = 'http://automationpractice.com/index.php';
const registeredEmail = 'testnightwatch3025@gmail.com';
const unregisteredEmailToCreateAccount = 'testnightwatch3031@gmail.com';
const unregisteredEmailToCheckSubmitButton = 'testnightwatch12hdxcvg124@gmail.com';
module.exports = {
    reporter: (results, done) => {
        const reporter = new allureReporter.NightwatchAllureReporter({});
        reporter.write(results, done);
    },
    authPageUrl: authPage,
    registeredEmail: registeredEmail,
    emailToCreateAccount: unregisteredEmailToCreateAccount,
    emailToCheckSubmitButton: unregisteredEmailToCheckSubmitButton,
    mainPage: mainPage
};
