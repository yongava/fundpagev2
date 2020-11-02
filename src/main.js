import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'

import axios from 'axios'
import VueAxios from 'vue-axios'

const BASE_URL = 'https://lineoa-api.ava.fund';

Vue.config.productionTip = false
Vue.use(VModal);
Vue.use(VueAxios, axios.create({ baseURL: BASE_URL }));

new Vue({
  render: h => h(App),
}).$mount('#app')
