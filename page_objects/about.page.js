/* global element, by */
'use strict';

module.exports = {
    webElements: {
        lnkScoring: function () {
            return element(by.xpath('html/body/center/table/tbody/tr[3]/td/table/tbody/tr/td[2]/a'));
        }
    },

    clickScoring: function () {
        this.webElements.lnkScoring().click();
    }
};