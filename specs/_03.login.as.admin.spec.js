var loginPage = require('../page_objects/login.page.js'),
    utils = require('../helpers/utilities.js'),
    data = require('../helpers/data.json');

describe('Login as admin@thebodgeitstore.com', function () {
    beforeAll(function () {
        browser.get(browser.baseUrl + 'login.jsp');
    });

    describe('Login using SQL injection attack', function () {
        it('should login using SQL-injection', function () {
            browser.get(browser.baseUrl + 'login.jsp');
            utils.sqlInjectionLogin(data.user_type.admin, data.password.whatever);
            expect(loginPage.isLoginSucceed()).toBe(true);
        });

        it('should have "user1@thebodgeitstore.com" as user', function () {
            expect(loginPage.getUsername()).toEqual(data.user_name.admin);
        });

        it('should logout', function () {
            utils.logout();
            expect(browser.getCurrentUrl()).toContain(data.url.logout);
        });
    });
});