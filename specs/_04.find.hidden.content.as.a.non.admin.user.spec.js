var sourcePage = require('../page_objects/common/source.page.js'),
    utils = require('../helpers/utilities.js'),
    data = require('../helpers/data.json');

describe('Find hidden content as a non admin user', function () {
    beforeAll(function () {
        browser.get(browser.baseUrl + 'home.jsp');
    });

    it('should [right click] anywhere in the home page', function () {
        utils.rightClick();
    });

    it('should navigate to [page source] from the context menu', function () {
        utils.navToViewSelectionSource();
    });

    it('should display HTML [comment with admin.jsp] url', function () {
        var mainWin = browser.getWindowHandle();
        utils.clickViewSelectionSource();

        var popWin = browser.getWindowHandle();
        browser.switchTo().window(popWin);

        expect(sourcePage.getHiddenContent()).toContain(data.hiddenContent);
        browser.switchTo().window(mainWin);
    });

    it('should navigate to admin.jsp', function () {
        browser.get(browser.baseUrl + 'admin.jsp');
        expect(browser.getCurrentUrl()).toContain(data.url.admin);
    });
});