module.exports = {
    webElements: {
        lblDoodahs: function () {
            return element(by.xpath('html/body/center/table/tbody/tr[3]/td/table/tbody/tr/td[1]/a[1]'));
        }
    },

    clickDoodahs: function () {
        this.webElements.lblDoodahs().click();
    }
};