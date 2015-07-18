/* global element, by */
'use strict';

module.exports = {
    webElements: {
        challenge: function (num) {
            return element.all(by.css('.border>tbody>tr>td>img')).get(num).getAttribute('alt');;
        }
    },

    isChallenge01Completed: function () {
        return this.webElements.challenge('0');
    },

    isChallenge02Completed: function () {
        return this.webElements.challenge('1');
    },

    isChallenge03Completed: function () {
        return this.webElements.challenge('2');
    },

    isChallenge04Completed: function () {
        return this.webElements.challenge('3');
    }
};