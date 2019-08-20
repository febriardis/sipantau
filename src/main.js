import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueSweetalert2 from 'vue-sweetalert2';
import VueApexCharts from 'vue-apexcharts';

Vue.config.productionTip = false;

axios.defaults.baseURL = 'http://sipapi.billionairecoach.co.id/api';
axios.defaults.headers = {  
    'Content-Type': 'application/json', 
    'X-Requested-With': 'XMLHttpRequest'
}

Vue.use(VueSweetalert2);
Vue.use(VueApexCharts);
 
Vue.component('apexchart', VueApexCharts);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
