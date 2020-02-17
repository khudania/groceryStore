import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VueFilterDateParse from 'vue-filter-date-parse'

import axios from 'axios'
// import VueAxios from 'vue-axios'


Vue.use(require('vue-moment'));

//using Axios for Api Integration 
Vue.use(axios)


// Date filtering
Vue.use(VueFilterDateParse)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
