var loginPage = require('../page_objects/login.page.js'),
    utils = require('../helpers/utilities.js'),
    data = require('../helpers/data.json');

describe('Login as test@thebodgeitstore.com', function () {

    beforeAll(function () {
        browser.get(browser.baseUrl + 'login.jsp');
    });

    describe('Login with predictable password', function () {
        it('should login using password guessing', function () {
            utils.login(data.user_type.test, data.password.guess);
            expect(loginPage.isLoginSucceed()).toBe(true);
        });

        it('should have "test@thebodgeitstore.com" as user name', function () {
            expect(loginPage.getUsername()).toEqual(data.user_name.test);
        });

        it('should logout', function () {
            utils.logout();
            expect(browser.getCurrentUrl()).toContain(data.url.logout);
        });
    });

    describe('Login using SQL injection attack', function () {
        it('should login using SQL-injection', function () {
            browser.get(browser.baseUrl + 'login.jsp');
            utils.sqlInjectionLogin(data.user_type.test, data.password.whatever);
            expect(loginPage.isLoginSucceed()).toBe(true);
        });

        it('should have "test@thebodgeitstore.com" as user', function () {
            expect(loginPage.getUsername()).toEqual(data.user_name.test);
        });

        it('should logout', function () {
            utils.logout();
            expect(browser.getCurrentUrl()).toContain(data.url.logout);
        });
    });
});