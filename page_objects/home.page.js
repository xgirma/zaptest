module.exports = {
    webElements: {
        dealTitle: function(){
            return element(by.xpath('html/body/center/table/tbody/tr[3]/td/table/tbody/tr/td[2]/h3'));
        }
    },

    // right click on the home page title
    rightClick: function(){
        browser.actions().mouseMove(this.webElements.dealTitle()).perform();
        browser.actions().click(protractor.Button.RIGHT).perform();
    },

    navToViewSelectionSource: function(){
        var i = 0, len = 5;
        for (; i < len; ) {
            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
            i++;
        }
    },

    clickViewSelectionSource: function(){
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    },

    closeSourceWindow: function(){
        // TODO to close
    }
};