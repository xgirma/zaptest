module.exports = {
    webElements: {
        txtSearch: function () {
            return element(by.xpath("html/body/center/table/tbody/tr[3]/td/table/tbody/tr/td[2]/" +
                "font/form/table/tbody/tr[1]/td[2]/input"));
        },

        btnSearch: function () {
            return element(by.xpath("html/body/center/table/tbody/tr[3]/td/table/tbody/tr/td[2]/" +
                "font/form/table/tbody/tr[2]/td[2]/input"));
        }
    },

    enterSearch: function (word) {
        var el = this.webElements.txtSearch();
        el.clear();
        el.sendKeys(word);
    },

    clickSearch: function () {
        return this.webElements.btnSearch().click();
    }
};