describe('Navigate to the six main pages', function(){
    var NavPage,
        Const;

    beforeAll(function(){
        browser.get(browser.baseUrl);
        NavPage = require('../page_objects/common/nav.bar.js');
        Const = require('../helpers/const.js');
    });

    it('should be on home page', function(){
        NavPage.navToHome();
        expect(browser.getCurrentUrl()).toEqual(Const.url.home);
    });

    it('should be on about page', function(){
        NavPage.navToAbout();
        expect(browser.getCurrentUrl()).toEqual(Const.url.about);
    });

    it('should be on contact page', function(){
        NavPage.navToContact();
        expect(browser.getCurrentUrl()).toEqual(Const.url.contact);
    });

    it('should be on login page', function(){
        NavPage.navToLogin();
        expect(browser.getCurrentUrl()).toEqual(Const.url.login);
    });

    it('should be on basket page', function(){
        NavPage.navToBasket();
        expect(browser.getCurrentUrl()).toEqual(Const.url.basket);
    });

    it('should be on search page', function(){
        NavPage.navToSearch();
        expect(browser.getCurrentUrl()).toEqual(Const.url.search);
    });

});