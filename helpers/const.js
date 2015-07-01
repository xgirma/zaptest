module.exports = {
    url:{
        home: browser.baseUrl + 'home.jsp',
        about: browser.baseUrl + 'about.jsp',
        contact: browser.baseUrl + 'contact.jsp',
        login: browser.baseUrl + 'login.jsp',
        logout: browser.baseUrl + 'logout.jsp',
        basket: browser.baseUrl + 'basket.jsp',
        search: browser.baseUrl + 'search.jsp'
    },

    sqlInjection: "' or'1'=1",

    username: {
        test: 'test@thebodgeitstore.com',
        user: 'user1@thebodgeitstore.com',
        admin: 'admin@thebodgeitstore.com'
    },

    password:{
        test: 'password',
        whatever: 'whatever'
    },

    challenge: {
        completed: 'Completed',
        notCompleted: 'Not Completed'
    }
};