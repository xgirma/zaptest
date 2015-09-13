var loginPage = require('../page_objects/login.page.js'),
    utils = require('../helpers/utilities.js'),
    data = require('../helpers/data.json');

describe('Login as user1@thebodgeitstore.com', function () {
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

    it('should logout', function () {
        utils.logout();
        expect(browser.getCurrentUrl()).toContain(data.url.logout);
    });
});