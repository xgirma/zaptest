exports.config = {

    specs: [
        '../specs/*.spec.js'
    ],

    exclude: [
        '../specs/nav.spec.js'
    ],

    capabilities: {
        browserName: 'firefox',
        'proxy': {
            proxyType: 'manual',
            httpProxy: 'localhost:8090',
            sslProxy: 'localhost:8090'
        }
    },

    baseUrl: 'http://localhost:8080/bodgeit/',

    rootElement: 'body',

    allScriptsTimeout: 11000,
    getPageTimeout: 10000,

    onPrepare: function () {
        browser.ignoreSynchronization = true;

        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));

    },

    framework: 'jasmine2',

    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 30000
    }
};
