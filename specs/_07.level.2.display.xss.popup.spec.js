// Level 2: Display a popup using: <script>alert("XSS")</script>
describe('07. Level 1: Display a popup using XSS', function(){
    var contactPage,
        common;

    beforeAll(function(){
        contactPage = require('../page_objects/contact.us.page.js');
        common = require('../helpers/const.js');
        browser.get(browser.baseUrl + 'contact.jsp');
    });

    it('Enter search word with xss', function(){
        contactPage.enterComment(common.script.xss2);
    });

    it('should display a XSS popup', function(){
        contactPage.clickSubmit();
        var alertDialog = browser.switchTo().alert();
        expect(alertDialog.getText()).toEqual("XSS");
        browser.switchTo().alert().dismiss();
    });
});