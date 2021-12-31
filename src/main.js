import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { createProvider } from './vue-apollo'
import PrimeVue from 'primevue/config';
import './assets/css/index.css'
import './assets/scss/app.scss'
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

Vue.use(PrimeVue);

Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
