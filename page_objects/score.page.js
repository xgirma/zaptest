/* global element, by */
'use strict';

module.exports = {
    webElements: {
        challenge01: function () {
            return element(by.xpath('html/body/center/table/tbody/tr[3]/td/table/tbody/tr/td[2]/center/table/tbody/tr[2]/td[2]/img'));
        }
    },

    isChallenge01Completed: function () {
        return this.webElements.challenge01().getAttribute('alt');
    }
};