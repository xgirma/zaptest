describe('\Level 1: Display a popup using: <script>alert("XSS")</script>', function () {
    var searchPage = require('../page_objects/search.page.js'),
        utils = require('../helpers/utilities.js'),
        data = require('../helpers/data.json');

    beforeAll(function () {
        browser.get(browser.baseUrl + 'search.jsp');
    });

    it('enter search word with xss', function () {
        searchPage.enterSearch(data.script.xss1);
    });

    it('should display a XSS popup', function () {
        searchPage.clickSearch();
        expect(utils.alertTxt()).toEqual("XSS");
    });
});