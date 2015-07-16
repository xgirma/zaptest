describe('01. Login as test@thebodgeitstore.com', function () {
    var homePage,
        loginPage,
        aboutPage,
        scorePage,
        navBar,
        ccommon;

    beforeAll(function () {
        homePage = require('../page_objects/home.page.js');
        loginPage = require('../page_objects/login.page.js');
        aboutPage = require('../page_objects/about.page.js');
        scorePage = require('../page_objects/score.page.js');
        navBar = require('../page_objects/common/nav.bar.js');
        ccommon = require('../helpers/const.js');
        browser.get(browser.baseUrl + 'home.jsp');
    });

    describe('Login by trying predictable password', function(){
        it('Navigate to the login page', function () {
            navBar.navToLogin();
            expect(browser.getCurrentUrl()).toEqual(ccommon.url.login);
        });

        it('should login using "password" as password"', function(){
            loginPage.enterUsername(ccommon.username.test);
            loginPage.enterPassword(ccommon.password.guess);
            loginPage.clickLogin();
            expect(loginPage.isLoginSucceed()).toBe(true);
        });

        it('should have logout visible', function(){
            expect(navBar.isLogoutShown()).toBe(true);
        });

        it('should have "test@thebodgeitstore.com" as user', function(){
            expect(loginPage.getUsername()).toEqual(ccommon.username.test);
        });

        it('challenge should be done', function(){
            navBar.navToAbout();
            aboutPage.clickScoring();
            expect(scorePage.isChallenge01Completed()).toBe(ccommon.challenge.completed);
        });

        it('should logout', function(){
            navBar.navToLogout();
            expect(browser.getCurrentUrl()).toEqual(ccommon.url.logout);
        });
    });

    describe('Login using sql injection attack', function(){
        it('should be on login page', function(){
            navBar.navToLogin();
            expect(browser.getCurrentUrl()).toEqual(ccommon.url.login);
        });

        it('should login using sql-injection', function(){
            loginPage.enterUsername('sql');
            loginPage.enterPassword(ccommon.password.whatever);
            loginPage.clickLogin();
            expect(navBar.isLogoutShown()).toBe(true);
        });

        it('should have "test@thebodgeitstore.com" as user', function(){
            expect(loginPage.getUsername()).toEqual(ccommon.username.test);
        });

        it('challenge should be done', function(){
            navBar.navToAbout();
            aboutPage.clickScoring();
            expect(scorePage.isChallenge01Completed()).toBe(ccommon.challenge.completed);
        });

        it('should logout', function(){
            navBar.navToLogout();
            expect(browser.getCurrentUrl()).toEqual(ccommon.url.logout);
        });
    });
});