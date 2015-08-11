describe('05. Find diagnostic data', function(){
    var homePage,
        productPage,
        basketPage,
        basketDebugPage,
        navBar,
        aboutPage,
        scorePage,
        common;

    beforeAll(function(){
        homePage = require('../page_objects/home.page.js');
        productPage = require('../page_objects/product.page.js');
        basketPage = require('../page_objects/basket.page.js');
        basketDebugPage = require('../page_objects/basket.debug.page.js');
        navBar = require('../page_objects/common/nav.bar.js');
        aboutPage = require('../page_objects/about.page.js');
        scorePage = require('../page_objects/score.page.js');
        common = require('../helpers/const.js');
        browser.get(browser.baseUrl + 'home.jsp');
    });

    it('click on [zip a dee doo dah] should redirect to products page', function(){
        homePage.clickDoodahs();
        expect(browser.getCurrentUrl()).toEqual(common.url.product + '?typeid=6');
    });

    it('click on [add to basket] should redirect to basket page', function(){
        productPage.clickZipADeeDooDah();
        productPage.clickAddToBasket();
        expect(browser.getCurrentUrl()).toEqual(common.url.basket);
    });

    it('should change quantity to [a]', function(){
        browser.executeScript(common.script.qtyChange);
        expect(basketPage.getZipADeeDooDahQty()).toEqual('a');
    });

    it('click [update basket] should display debug message', function(){
        basketPage.clickUpdateBasket();
        expect(basketDebugPage.getPageTitle()).toEqual(common.error.basketUpdate);
    });

    it('challenge 5 should be completed', function(){
        browser.navigate().back();
        navBar.navToAbout();
        aboutPage.clickScoring();
        expect(scorePage.isChallenge05Completed()).toEqual(common.challenge.notCompleted);
    });
});