import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueTouch from 'vue-touch';

const BASE_URL = 'https://lineoa-api.ava.fund';

VueTouch.config.swipe = {
  direction: 'horizontal',
  threshold: 200
};

Vue.config.productionTip = false
Vue.use(VModal);
Vue.use(VueTouch);
Vue.use(VueAxios, axios.create({ baseURL: BASE_URL }));

new Vue({
  render: h => h(App),
}).$mount('#app')
