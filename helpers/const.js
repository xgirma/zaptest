module.exports = {
    url:{
        home: browser.baseUrl + 'home.jsp',
        about: browser.baseUrl + 'about.jsp',
        contact: browser.baseUrl + 'contact.jsp',
        login: browser.baseUrl + 'login.jsp',
        logout: browser.baseUrl + 'logout.jsp',
        basket: browser.baseUrl + 'basket.jsp',
        search: browser.baseUrl + 'search.jsp',
        product: browser.baseUrl + 'product.jsp',
        basket: browser.baseUrl + 'basket.jsp'
    },

    sqlInjection: "' or'1'=1",

    username: {
        test: 'test@thebodgeitstore.com',
        user: 'user1@thebodgeitstore.com',
        admin: 'admin@thebodgeitstore.com'
    },

    password:{
        guess: 'password',
        whatever: 'whatever'
    },

    challenge: {
        completed: 'Completed',
        notCompleted: 'Not completed'
    },

    hiddenContent : '<!-- td align="center" width="16%"><a href="admin.jsp">Admin</a></td-->',

    script:{
        qtyChange : "document.getElementById('quantity_26').value = 'a';",
        xss : '<script>alert("XSS")</script>'
    },

    error: {
        basketUpdate : 'HTTP Status 500 - java.lang.NumberFormatException: For input string: "a"'
    }
};