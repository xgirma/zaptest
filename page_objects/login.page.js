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

        switch(name) {
            case 'test' || 'test@thebodgeitstore.com':
                el.sendKeys("test@thebodgeitstore.com' or '1'='1");
                break;
            case 'test@thebodgeitstore.com':
                el.sendKeys("test@thebodgeitstore.com");
                break;
            case 'user1':
                el.sendKeys("user1@thebodgeitstore.com' or '1'='1");
                break;
            case 'user1@thebodgeitstore.com':
                el.sendKeys("user1@thebodgeitstore.com");
                break;
            case 'admin@thebodgeitstore.com':
                el.sendKeys("admin@thebodgeitstore.com");
                break;
            default:
                el.sendKeys("admin@thebodgeitstore.com' or '1'='1");
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