import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueTouch from 'vue-touch';
//import bootstrapvue from 'bootstrap-vue'

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    // console.log('Mobile')
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
} else {
    const urlParams = new URLSearchParams(window.location.search);
    const fundCode = urlParams.get("FundCode");
    //const userID = urlParams.get("UserID");
    //  console.log('Win')
    window.location.href = `https://www.scbam.com/th/fund/morningstar/fund-information/${fundCode}`;
}