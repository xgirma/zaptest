/* global element, by */
'use strict';

module.exports = {
    webElements: {
        challenge: function (num) {
            var el = element(by.xpath("html/body/center/table/tbody/tr[3]/td/table/tbody/tr/td[2]/center/table/tbody/tr[" + num +"]/td[2]/img"));
            return el.getAttribute('alt');
        }
    },

    // TODO optimizing verification
    isChallenge01Completed: function () {
        return this.webElements.challenge('2');
    },

    isChallenge02Completed: function () {
        return this.webElements.challenge('3');
    },

    isChallenge03Completed: function () {
        return this.webElements.challenge('4');
    },

    isChallenge04Completed: function () {
        return this.webElements.challenge('5');
    },

    isChallenge05Completed: function () {
        return this.webElements.challenge('6');
    }
};