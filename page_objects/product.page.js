module.exports = {
    webElements: {
        lblZipADeeDooDah: function () {
            return element(by.xpath("html/body/center/table/tbody/tr[3]/td/table/tbody/tr/td[2]/center/table/tbody/tr[2]/td[1]/a"));
        },

        btnAddToBasket: function () {
            return element(by.id('submit'));
        },

        txtZipADeeDooDahQty: function () {
            return element(by.id('quantity'));
        },

        btnAddToBasket: function () {
            return element(by.id('submit'));
        }
    },

    clickZipADeeDooDah: function () {
        this.webElements.lblZipADeeDooDah().click();
    },

    clickAddToBasket: function () {
        this.webElements.btnAddToBasket().click();
    },

    getZipADeeDooDahQty: function () {
        return this.webElements.txtZipADeeDooDahQty().getAttribute('value');
    },

    clickAddToBasket: function () {
        this.webElements.btnAddToBasket().click();
    }
};