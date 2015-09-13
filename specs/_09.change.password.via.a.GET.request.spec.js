describe('Change your password via a GET request', function () {
    var loginPage = require('../page_objects/login.page.js'),
        utils = require('../helpers/utilities.js'),
        passwordPage = require('../page_objects/password.page.js'),
        data = require('../helpers/data.json');

    beforeAll(function () {
        browser.get(browser.baseUrl + 'login.jsp');
    });

    it('should login using SQL-injection', function () {
        utils.sqlInjectionLogin(data.user_type.user1, data.password.whatever);
        expect(loginPage.isLoginSucceed()).toBe(true);
    });

    it('should have "user1@thebodgeitstore.com" as user', function () {
        expect(loginPage.getUsername()).toEqual(data.user_name.user1);
    });

    it('should change password using browser.get(), UI verification', function () {
        browser.get(data.url.passGet);
        expect(passwordPage.getMessage()).toBe(data.successPassChange);
    });

    it('should change password node http, no UI and response verification', function () {
        expect(utils.passChanger()).toContain(data.successPassChange);
    });

    it('should logout', function () {
        utils.logout();
        expect(browser.getCurrentUrl()).toContain(data.url.logout);
    });
});