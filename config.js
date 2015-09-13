exports.config = {

    specs: [
        './specs/*.spec.js'
    ],

    exclude: [],

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
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: true,
            displaySpecDuration: true,
            displaySuiteNumber: true
        }));
    },

    framework: 'jasmine2',

    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 30000,
        print: function() {}
    },

    params:{
        host: 'localhost',
        port: '8080'
    }
};
