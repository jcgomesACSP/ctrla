import Vue from 'vue'
import DefaultTemplate from './layouts/DefaultTemplate'

import router from './routes/router';

new Vue({
    render: h => h(DefaultTemplate),
    router
}).$mount('#app')
