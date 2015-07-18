describe('04. Find hidden content as a non admin user', function(){
    var homePage,
        navBar,
        aboutPage,
        scorePage,
        common;

    beforeAll(function(){
        homePage = require('../page_objects/home.page.js');
        navBar = require('../page_objects/common/nav.bar.js');
        aboutPage = require('../page_objects/about.page.js');
        scorePage = require('../page_objects/score.page.js');
        common = require('../helpers/const.js');
        browser.get(browser.baseUrl + 'home.jsp');
    });

    it('should right click', function(){
        homePage.rightClick();
    });

    it('should navigate to [View Selection Source] from the context menu', function(){
        homePage.navToViewSelectionSource();
    });

    // TODO find way to close source window
    xit('should click on [View Selection Source]', function(){
        homePage.clickViewSelectionSource();
    });

    it('challenge should not be done', function(){
        navBar.navToAbout();
        aboutPage.clickScoring();
        expect(scorePage.isChallenge04Completed()).toEqual(common.challenge.notCompleted);
    });
});