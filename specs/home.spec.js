describe('Home Page', function(){
    var NavBar,
        HomePage;

    beforeAll(function(){
        browser.get(browser.baseUrl);
        NavBar = require('../page_objects/common/nav.bar.js');
        HomePage = require('../page_objects/home.page.js');
    });

});