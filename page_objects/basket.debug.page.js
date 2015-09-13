module.exports = {
    webElements: {
        lblPageTitle: function () {
            return element(by.xpath("html/body/h1"));
        }
    },

    getPageTitle: function () {
        return this.webElements.lblPageTitle().getText();
    }
};