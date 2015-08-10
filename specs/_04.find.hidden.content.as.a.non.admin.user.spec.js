describe('04. Find hidden content as a non admin user', function(){
    var homePage,
        navBar,
        aboutPage,
        scorePage,
        sourcePage,
        common;

    beforeAll(function(){
        homePage = require('../page_objects/home.page.js');
        navBar = require('../page_objects/common/nav.bar.js');
        aboutPage = require('../page_objects/about.page.js');
        scorePage = require('../page_objects/score.page.js');
        sourcePage = require('../page_objects/common/source.page.js');
        common = require('../helpers/const.js');
        browser.get(browser.baseUrl + 'home.jsp');
    });

    it('should right click anywhere in the home page', function(){
        homePage.rightClick();
    });

    it('should navigate to [View Selection Source] from the context menu', function(){
        homePage.navToViewSelectionSource();
    });

    it('should click on [View Selection Source]', function(){
        var mainWin = browser.getWindowHandle();
        homePage.clickViewSelectionSource();

        var popWin = browser.getWindowHandle();
        browser.switchTo().window(popWin);

        expect(sourcePage.getHiddenContent()).toContain(common.hiddenContent);

        //TODO: close and switch
        browser.switchTo().window(mainWin);
    });

    it('challenge should not be done', function(){
        navBar.navToAbout();
        aboutPage.clickScoring();
        expect(scorePage.isChallenge04Completed()).toEqual(common.challenge.notCompleted);
    });
});