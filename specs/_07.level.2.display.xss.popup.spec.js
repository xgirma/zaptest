describe('\Level 2: Display a popup using: <script>alert("XSS")</script>', function () {
    var contactPage = require('../page_objects/contact.us.page.js'),
        utils = require('../helpers/utilities.js'),
        data = require('../helpers/data.json');

    beforeAll(function () {
        browser.get(browser.baseUrl + 'contact.jsp');
    });

    it('enter search word with xss', function () {
        contactPage.enterComment(data.script.xss2);
    });

    it('should display a XSS popup', function () {
        contactPage.clickSubmit();
        expect(utils.alertTxt()).toEqual("XSS");
        browser.sleep(4000);
    });
});