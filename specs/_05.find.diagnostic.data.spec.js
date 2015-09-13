var homePage = require('../page_objects/home.page.js'),
    productPage = require('../page_objects/product.page.js'),
    basketDebugPage = require('../page_objects/basket.debug.page.js'),
    data = require('../helpers/data.json');

describe('Find diagnostic data', function () {
    beforeAll(function () {
        browser.get(browser.baseUrl + 'home.jsp');
    });

    it('click on doodahs should reveal type id', function () {
        homePage.clickDoodahs();
        expect(browser.getCurrentUrl()).toContain(data.url.product + data.url.type_id);
    });

    it('click on zip a dee doo dah add should reveal product', function () {
        productPage.clickZipADeeDooDah();
        expect(browser.getCurrentUrl()).toContain(data.url.product + data.url.prod_id);
    });

    it('should change quantity to [a]', function () {
        browser.executeScript(data.script.qtyChange);
        expect(productPage.getZipADeeDooDahQty()).toEqual('a');
    });

    it('click [add to basket] should display debug message', function () {
        productPage.clickAddToBasket();
        expect(basketDebugPage.getPageTitle()).toEqual(data.add_basket_err);
    });
});