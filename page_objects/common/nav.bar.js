module.exports = {
    webElements: {
        lnkHome: function () {
            return $('a[href="home.jsp"]');
        },

        lnkAbout: function () {
            return $('a[href="about.jsp"]');
        },

        lnkContact: function () {
            return $('a[href="contact.jsp"]');
        },

        lnkLogin: function () {
            return $('a[href="login.jsp"]');
        },

        lnkLogout: function () {
            return $('a[href="logout.jsp"]');
        },

        lnkBasket: function () {
            return $('a[href="basket.jsp"]');
        },

        lnkSearch: function () {
            return $('a[href="search.jsp"]');
        }
    },

    clickLogout: function () {
        this.webElements.lnkLogout().click();
    }
};