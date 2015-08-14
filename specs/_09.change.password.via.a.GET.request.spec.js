describe('09. Change your password via a GET request', function () {
    var loginPage,
        common,
        password,
        util;

    beforeAll(function () {
        loginPage = require('../page_objects/login.page.js');
        browser.get(browser.baseUrl + 'login.jsp');
        common = require('../helpers/const.js');
        util = require('../helpers/pass.changer.js');
        password = require('../page_objects/password.page.js');
    });

    it('should login as user1', function () {
        loginPage.enterUsername('user1');
        loginPage.enterPassword(common.password.whatever);
        loginPage.clickLogin();
        expect(loginPage.isLoginSucceed()).toBe(true);
    });

    it('should change password using browser.get(), UI verification', function () {
        browser.get(common.url.passGet);
        expect(password.getMessage()).toBe(common.msg.successPassChange);
    });

    it('should change password node http, no UI and response verification', function () {
        expect(util.passChanger()).toContain(common.msg.successPassChange);
    });
});