/// <reference types = "cypress"/>

const locaters = {
    LOGIN: {
        USER: '[data-test="email"]',
        PASSWORD: '[data-test="passwd"]',
        BTN_LOGIN: '.btn.btn-primary'
    },
    MENU: {
        SETTINGS: '[data-test="menu-settings"]',
        COUNT: 'a[href="/contas"]'
    },
    COUNT: {
        NAME_COUNT: '[data-test="nome"]',
        BTN_SAVE: '.btn.btn-primary.btn-block'
    },
    MESSAGE: '#toast-container'

}

export default locaters;