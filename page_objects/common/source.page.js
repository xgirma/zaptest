module.exports = {
    webElements: {
        navBarAll: function () {
            return element(by.xpath("html/body/center/table/tbody/tr[2]"));
        }
    },

    getHiddenContent: function () {
        var deferred = protractor.promise.defer();

        this.webElements.navBarAll().getInnerHtml().then(function (html) {
            deferred.fulfill(html);
        });

        return deferred.promise;
    }
};