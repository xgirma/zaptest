/* global element, by */
'use strict';

module.exports = {

    webElements: {
        txtUsername: function () {
            return element(by.id('username'));
        },

        txtPassword: function () {
            return element(by.id('password'));
        },

        btnLogin: function () {
            return element(by.id('submit'));
        },

        lblSuccess: function () {
            return element(by.xpath('html/body/center/table/tbody/tr[3]/td/table/tbody/tr/td[2]'));
        },

        lblUsername: function () {
            return element(by.xpath('html/body/center/table/tbody/tr[1]/td/table/tbody/tr/td[3]/a'));
        }
    },

    enterUsername: function (name) {
        var el = this.webElements.txtUsername();
        el.clear();

        if (name === 'sql') {
            el.sendKeys("test@thebodgeitstore.com' or '1'='1");
        } else {
            el.sendKeys(String(name));
        }
    },

    enterPassword: function (pass) {
        var el = this.webElements.txtPassword();
        el.clear();
        el.sendKeys(pass);
    },

    clickLogin: function () {
        this.webElements.btnLogin().click();
    },

    isLoginSucceed: function () {
        return this.webElements.lblSuccess().isDisplayed();
    },

    getUsername: function () {
        return this.webElements.lblUsername().getText();
    }
};