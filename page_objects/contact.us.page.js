module.exports = {
    webElements: {
        txtComments: function () {
            return element(by.id("comments"));
        },

        btnSubmit: function () {
            return element(by.id("submit"));
        }
    },

    enterComment: function (comment) {
        var el = this.webElements.txtComments();
        el.clear();
        el.sendKeys(comment);
    },

    clickSubmit: function () {
        this.webElements.btnSubmit().click();
    }
};