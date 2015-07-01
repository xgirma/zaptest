module.exports = {
    webEl: {
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

        lnkLogout: function(){
            return $('a[href="logout.jsp"]');
        },

        lnkBasket: function () {
            return $('a[href="basket.jsp"]');
        },

        lnkSearch: function () {
            return $('a[href="search.jsp"]');
        }
    },

    navToHome: function () {
        this.webEl.lnkHome().click();
    },

    navToAbout: function () {
        return this.webEl.lnkAbout().click();
    },

    navToContact: function () {
        return this.webEl.lnkContact().click();
    },

    navToLogin: function () {
        return this.webEl.lnkLogin().click();
    },

    navToLogout: function(){
        return this.webEl.lnkLogout().click();
    },

    navToBasket: function () {
        return this.webEl.lnkBasket().click();
    },

    navToSearch: function () {
        return this.webEl.lnkSearch().click();
    },

    isLogoutShown: function(){
        return this.webEl.lnkLogout().isDisplayed();
    },

    isLoginShown: function(){
        return this.webEl.lnkLogin().isDisplayed();
    }
};