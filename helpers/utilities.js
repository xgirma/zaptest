var loginPage = require('../page_objects/login.page.js'),
    navBar = require('../page_objects/common/nav.bar.js'),
    el = element(by.xpath('html/body/center/table/tbody/tr[3]/td/table/tbody/tr/td[2]/h3'));
    http = require('http'),
    options = {
        host: browser.params.host,
        port: browser.params.port,
        path: '/bodgeit/password.jsp?password1=newpass2&password2=newpass2',
        method: 'GET'
    };

exports.login = function (username, password) {
    loginPage.enterUsername(username);
    loginPage.enterPassword(password);
    loginPage.clickLogin();
};

exports.sqlInjectionLogin = function (username, password) {
    loginPage.enterSQLInjection(username);
    loginPage.enterPassword(password);
    loginPage.clickLogin();
};

exports.logout = function(){
    navBar.clickLogout();
};

exports.rightClick = function(){
    browser.actions().mouseMove(el).perform();
    browser.actions().click(protractor.Button.RIGHT).perform();
};

exports.navToViewSelectionSource = function(){
    var i = 0, len = 5;
    for (; i < len; ) {
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        i++;
    }
};

exports.clickViewSelectionSource = function(){
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
};

exports.alertTxt = function(){
    var deferred = protractor.promise.defer();

    var alertDialog = browser.switchTo().alert();
    alertDialog.getText().then(function(body){
        deferred.fulfill(body);
        browser.switchTo().alert().dismiss();
    });

    return deferred.promise;
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