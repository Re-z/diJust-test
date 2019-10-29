let app = new Vue({
    el: '#app',
    data: {
        popupIsOpen: true,
        activeTab: 'log-in',
        loginFormWithErrors: false,
        signupFormWithErrors: false,
        formsData: {
            loginFormPassword: '',
            loginFormLogin: '',
            signupFormEmail: '',
            signUpFormPassword: '',
            signUpFormCountry: '',
            signUpFormCurrency: '',
            signUpFormTerms: false
        }
    },
    methods: {
        loginFormIsValid() {
            if(this.formsData.loginFormPassword && this.formsData.loginFormLogin) {
                return true
            } else {
                return false
            }
        },
        signupFormIsValid(){
            if(this.formsData.signupFormEmail 
                && this.formsData.signUpFormPassword 
                && this.formsData.signUpFormCountry
                && this.formsData.signUpFormTerms
                && this.formsData.signUpFormCurrency) {
                return true
            } else {
                return false
            }

        }
    },
})