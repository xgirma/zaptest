module.exports = {
    webElements: {
        txtZipADeeDooDahQty: function () {
            return element(by.id('quantity_26'));
        },

        lblTotal: function () {
            return element(by.xpath("html/body/center/table/tbody/tr[3]/td/table/tbody/tr/td[2]/form/table/tbody/tr[3]/td[4]"));
        }
    },

    getTotal: function () {
        return this.webElements.lblTotal().getText();
    }
};