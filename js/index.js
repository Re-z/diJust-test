let app = new Vue({
    el: '#app',
    data: {
        popupIsOpen: true,
        activeTab: 'log-in',
        formWithErrors: false,
        forms: {
            loginFormPassword: '',
            loginFormLogin: ''
        }
    },
    methods: {
        loginFormIsValid() {
            if(this.forms.loginFormPassword && this.forms.loginFormLogin) {
                return true
            } else {
                return false
            }
        }
    },
})