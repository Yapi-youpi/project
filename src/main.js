import Vue from 'vue'
import Vulidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min';

Vue.config.productionTip = false,

Vue.use(Vulidate)

new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')