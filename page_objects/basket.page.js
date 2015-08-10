module.exports = {
    webElements: {
        btnUpdateBasket: function(){
            return element(by.id('update'));
        },

        txtZipADeeDooDahQty: function(){
            return element(by.id('quantity_26'));
        }
    },

    getZipADeeDooDahQty: function(){
        return this.webElements.txtZipADeeDooDahQty().getAttribute('value');
    },

    clickUpdateBasket: function(){
        this.webElements.btnUpdateBasket().click();
    }
};