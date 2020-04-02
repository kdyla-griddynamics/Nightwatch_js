const fs = require("fs");

const allureReporter = require('nightwatch-allure');
const authPage = 'http://automationpractice.com/index.php?controller=authentication&back=my-account';
const mainPage = 'http://automationpractice.com/index.php';
const wrongEmailSrc = fs.readFileSync("data-providers/wrongemail.txt", "utf-8");
const registeredEmailSrc = fs.readFileSync("data-providers/registeredemail.txt", "utf-8");
const unregisteredEmailToCheckSrc = fs.readFileSync("data-providers/unregisteredemailtocheck.txt", "utf-8");
const unregisteredEmailToCreateSrc = fs.readFileSync("data-providers/unregisteredemailtocreate.txt", "utf-8");
const wrongEmailsList = wrongEmailSrc.split("\n");
const registeredEmailsList = registeredEmailSrc.split("\n");
const unregisteredEmailsToCheckList = unregisteredEmailToCheckSrc.split("\n");
const unregisteredEmailsToCreateList = unregisteredEmailToCreateSrc.split("\n");
module.exports = {
    reporter: (results, done) => {
        const reporter = new allureReporter.NightwatchAllureReporter({});
        reporter.write(results, done);
    },
    mainPage: mainPage,
    authPageUrl: authPage,
    registeredEmailsList: registeredEmailsList,
    emailsToCheckList: unregisteredEmailsToCheckList,
    wrongEmailsList: wrongEmailsList,
    emailsToCreateAccount: unregisteredEmailsToCreateList,
};
