// Level 1: Display a popup using: <script>alert("XSS")</script>
describe('06. Level 1: Display a popup using XSS', function () {
    var searchPage,
        common,
        navBar,
        aboutPage,
        scorePage;

    beforeAll(function () {
        searchPage = require('../page_objects/search.page.js');
        common = require('../helpers/const.js');
        navBar = require('../page_objects/common/nav.bar.js');
        aboutPage = require('../page_objects/about.page.js');
        scorePage = require('../page_objects/score.page.js');
        browser.get(browser.baseUrl + 'search.jsp');
    });

    it('Enter search word with xss', function () {
        searchPage.enterSearch(common.script.xss1);
    });

    it('should display a XSS popup', function () {
        searchPage.clickSearch();
        var alertDialog = browser.switchTo().alert();
        expect(alertDialog.getText()).toEqual("XSS");
        browser.switchTo().alert().dismiss();
    });

    it('challenge 6 should be completed', function () {
        navBar.navToAbout();
        aboutPage.clickScoring();
        expect(scorePage.isChallenge06Completed()).toEqual(common.challenge.completed);
    });
});