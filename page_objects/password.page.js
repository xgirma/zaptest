module.exports = {
    webElements: {
        lblMsg: function () {
            return element(by.xpath("html/body/center/table/tbody/tr[3]/td/table/tbody/tr/td[2]/p"));
        }
    },

    getMessage: function () {
        return this.webElements.lblMsg().getText();
    }
};