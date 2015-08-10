describe('03. Login as admin@thebodgeitstore.com', function () {
    var homePage,
        loginPage,
        aboutPage,
        scorePage,
        navBar,
        common;

    beforeAll(function () {
        homePage = require('../page_objects/home.page.js');
        loginPage = require('../page_objects/login.page.js');
        aboutPage = require('../page_objects/about.page.js');
        scorePage = require('../page_objects/score.page.js');
        navBar = require('../page_objects/common/nav.bar.js');
        common = require('../helpers/const.js');
        browser.get(browser.baseUrl + 'home.jsp');
    });

    describe('Login using sql injection attack', function(){
        it('Navigate to the login page', function () {
            navBar.navToLogin();
            expect(browser.getCurrentUrl()).toEqual(common.url.login);
        });

        it('should login using "password" as password"', function(){
            loginPage.enterUsername('');
            loginPage.enterPassword(common.password.whatever);
            loginPage.clickLogin();
            expect(loginPage.isLoginSucceed()).toBe(true);
        });

        it('should have logout visible', function(){
            expect(navBar.isLogoutShown()).toBe(true);
        });

        it('should have "admin@thebodgeitstore.com" as user', function(){
            expect(loginPage.getUsername()).toEqual(common.username.admin);
        });

        it('challenge 3 should be completed', function(){
            navBar.navToAbout();
            aboutPage.clickScoring();
            expect(scorePage.isChallenge03Completed()).toBe(common.challenge.completed);
        });

        it('should logout', function(){
            navBar.navToLogout();
            expect(browser.getCurrentUrl()).toEqual(common.url.logout);
        });
    });
});