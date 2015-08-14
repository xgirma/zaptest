module.exports = {
    webElements: {
        btnUpdateBasket: function(){
            return element(by.id('update'));
        },

        txtZipADeeDooDahQty: function(){
            return element(by.id('quantity_26'));
        },

        lblTotal: function(){
            return element(by.xpath("html/body/center/table/tbody/tr[3]/td/table/tbody/tr/td[2]/form/table/tbody/tr[3]/td[4]"));
        }
    },

    getZipADeeDooDahQty: function(){
        return this.webElements.txtZipADeeDooDahQty().getAttribute('value');
    },

    clickUpdateBasket: function(){
        this.webElements.btnUpdateBasket().click();
    },

    getTotal: function(){
        return this.webElements.lblTotal().getText();
    }
};