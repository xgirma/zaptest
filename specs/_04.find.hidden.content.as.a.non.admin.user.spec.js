describe('04. Find hidden content as a non admin user', function(){
    var homePage;

    beforeAll(function(){
        homePage = require('../page_objects/home.page.js');
        browser.get(browser.baseUrl + 'home.jsp');
    });

    it('should right click', function(){
        homePage.rightClick();
    });

    it('should navigate to [View Selection Source] from the context menu', function(){
        homePage.navToViewSelectionSource();
    });

    it('should click on [View Selection Source]', function(){
        homePage.clickViewSelectionSource();
    });
});