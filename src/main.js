import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueTouch from 'vue-touch';
import VueMixpanel from 'vue-mixpanel'

Vue.use(VueMixpanel, {
    token: "e5b4ec9be8d4a50ae4400e94efaf9375",
    config: {
      debug: true
    }
  })

const urlParams = new URLSearchParams(window.location.search);
const fundCode = urlParams.get("FundCode");
// const userID = urlParams.get("UserID");


if (/Windows|Ububtu/i.test(navigator.userAgent)) {
    console.log('windows  ',/Windows|Ububtu/i.test(navigator.userAgent))
    window.location.href = `https://www.scbam.com/th/fund/morningstar/fund-information/${fundCode}`;
} else {
    //Mozilla/5.0 (Linux; Android 8.1.0; SM-N960U Build/M1AJQ) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.91 Mobile Safari/537.36
    console.log('Mobile  ',/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    const BASE_URL = 'https://lineoa-api.ava.fund';

    VueTouch.config.swipe = {
        direction: 'horizontal',
        threshold: 10
    };

    Vue.config.productionTip = false
    Vue.use(VModal);
    Vue.use(VueTouch);
    Vue.use(VueAxios, axios.create({ baseURL: BASE_URL }));
    

    new Vue({
        render: h => h(App),
    }).$mount('#app')
}



