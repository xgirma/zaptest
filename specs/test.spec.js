describe('test', function(){

    beforeAll(function(){
        browser.get(browser.baseUrl);
    });

    it('Title', function(){
        var el = element(by.xpath('html/body/center/table/tbody/tr[1]/td/h1'));
        expect(el.isDisplayed()).toBe(true);
    });

    it('Login', function(){
        var el = element(by.xpath('html/body/center/table/tbody/tr[2]/td[4]/a'));
        el.click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/bodgeit/login.jsp');
    });

    it('Registration', function(){
        var el = element(by.xpath('html/body/center/table/tbody/tr[3]/td/table/tbody/tr/td[2]/a'));
        el.click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/bodgeit/register.jsp');
    });

    it('Register', function(){
        var un = element(by.id('username')),
            pw1 = element(by.id('password1')),
            pw2 = element(by.id('password2')),
            reg = element(by.id('submit')),
            el = element(by.xpath('html/body/center/table/tbody/tr[3]/td/table/tbody/tr/td[2]'));
        un.sendKeys('username@email.com');
        pw1.sendKeys('password');
        pw2.sendKeys('password');
        reg.click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/bodgeit/register.jsp');
        expect(el.isDisplayed()).toBe(true);
    });

    it('Logout', function(){
        var el = element(by.xpath('html/body/center/table/tbody/tr[2]/td[4]/a')),
            msg = element(by.xpath('html/body/center/table/tbody/tr[3]/td/table/tbody/tr/td[2]'));
        el.click();
        expect(msg.isDisplayed()).toBe(true);
    });

    it('Login', function(){
        var el = element(by.xpath('html/body/center/table/tbody/tr[2]/td[4]/a')),
            un = element(by.id('username')),
            pw = element(by.id('password')),
            submit = element(by.id('submit'));
        el.click();
        un.sendKeys('username@email.com');
        pw.sendKeys('password');
        submit.click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/bodgeit/login.jsp');
    });

});