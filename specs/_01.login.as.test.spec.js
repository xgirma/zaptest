describe('01. Login as test@thebodgeitstore.com', function () {
    var HomePage,
        LoginPage,
        AboutPage,
        ScorePage,
        NavBar,
        Const;

    beforeAll(function () {
        HomePage = require('../page_objects/home.page.js');
        LoginPage = require('../page_objects/login.page.js');
        AboutPage = require('../page_objects/about.page.js');
        ScorePage = require('../page_objects/score.page.js');
        NavBar = require('../page_objects/common/nav.bar.js');
        Const = require('../helpers/const.js');
        browser.get(browser.baseUrl + 'home.jsp');
    });

    // http://wpengine.com/unmasked/
    describe('Login by trying predictable password', function(){
        it('Navigate to the login page', function () {
            NavBar.navToLogin();
            expect(browser.getCurrentUrl()).toEqual(Const.url.login);
        });

        it('should login using "password" as password"', function(){
            LoginPage.enterUsername(Const.username.test);
            LoginPage.enterPassword(Const.password.test);
            LoginPage.clickLogin();
            expect(LoginPage.isLoginSucceed()).toBe(true);
        });

        it('should have logout visible', function(){
            expect(NavBar.isLogoutShown()).toBe(true);
        });

        it('should have "test@thebodgeitstore.com" as user', function(){
            expect(LoginPage.getUsername()).toEqual(Const.username.test);
        });

        it('challenge should be done', function(){
            NavBar.navToAbout();
            AboutPage.clickScoring();
            expect(ScorePage.isChallenge01Completed()).toBe(Const.challenge.completed);
        });

        it('should logout', function(){
            NavBar.navToLogout();
            expect(browser.getCurrentUrl()).toEqual(Const.url.logout);
        });
    });

    describe('Login using sql injection attack', function(){
        it('should be on login page', function(){
            NavBar.navToLogin();
            expect(browser.getCurrentUrl()).toEqual(Const.url.login);
        });

        it('should login using sql-injection', function(){
            LoginPage.enterUsername('sql');
            LoginPage.enterPassword(Const.password.whatever);
            LoginPage.clickLogin();
            expect(NavBar.isLogoutShown()).toBe(true);
        });

        it('should have "test@thebodgeitstore.com" as user', function(){
            expect(LoginPage.getUsername()).toEqual(Const.username.test);
        });

        it('challenge should be done', function(){
            NavBar.navToAbout();
            AboutPage.clickScoring();
            expect(ScorePage.isChallenge01Completed()).toBe(Const.challenge.completed);
        });

        it('should logout', function(){
            NavBar.navToLogout();
            expect(browser.getCurrentUrl()).toEqual(Const.url.logout);
        });
    });
});