var http = require('http'),
    options = {
    host: browser.params.host,
    port: browser.params.port,
    path: '/bodgeit/password.jsp?password1=newpass2&password2=newpass2',
    method: 'GET'
};

exports.passChanger = function() {
    var defer = protractor.promise.defer();
    var req = http.request(options, function (res) {
        //console.log('STATUS: ' + res.statusCode);
        //console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            defer.fulfill(chunk);
            //console.log('BODY: ' + chunk);
        });
    });

    req.on('error', function (e) {
        console.log('problem with request: ' + e.message);
    });

    // write data to request body
    req.write('data\n');
    req.write('data\n');
    req.end();

    return defer.promise;
};