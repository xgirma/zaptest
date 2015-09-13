var data = require('../helpers/data.json');

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

        switch (name) {
            case 'test':
                el.sendKeys(data.user_name.test);
                break;
            case 'user1':
                el.sendKeys(data.user_name.user1);
                break;
            default:
                el.sendKeys(data.user_name.admin);
                break;
        }
    },

    // enters SQL injection name use name
    enterSQLInjection: function (name) {
        var el = this.webElements.txtUsername();
        el.clear();

        switch (name) {
            case 'test':
                el.sendKeys(data.sql_injection.test);
                break;
            case 'user1':
                el.sendKeys(data.sql_injection.user1);
                break;
            default:
                el.sendKeys(data.sql_injection.admin);
                break;
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