import Vue from 'vue'
import Admin from './App.vue'

import store from './store'
import router from './router'
import '@/icons'
import './permission'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import './styles/element-variables.scss'
import './styles/index.scss'


import '@plugins/element'
import '@plugins/iview'

Vue.use(mavonEditor);

Vue.config.productionTip = false;

Vue.prototype.$Notice.config({
  top: 65,
  duration: 30,
});



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(Admin),
});
