module.exports = function (grunt) {
    grunt.initConfig({
        'zap_start': {
            options: {
                port: 8090
            }
        },

        protractor: {
            options: {
                configFile: "node_modules/protractor/example/conf.js", // Default config file
                keepAlive: true,
                noColor: false,
                args: {}
            },
            your_target: {
                options: {
                    configFile: "config/config.js",
                    args: {}
                }
            },
        },

        'zap_scan': {
            options: {
                //url: 'http://localhost:00',
                port: 8090
            }
        },

        'zap_alert': {
            options: {
                port: 8090
            }
        },

        'zap_report': {
            options: {
                dir: 'reports/',
                port: 8090,
                html: false
            }
        },

        'zap_stop': {
            options: {
                port: 8090
            }
        },


    });

    grunt.loadNpmTasks('grunt-zaproxy');
    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.registerTask('zap', [
        'zap_start',//,
        'protractor',
        //'zap_spider',
        //'zap_scan',
        //'zap_alert',
        'zap_report',
        'zap_stop'
    ]);
};