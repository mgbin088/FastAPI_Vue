import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex);

let ms = require.context('./modules', false, /\.js$/);

const modules = ms.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = ms(modulePath);
  modules[moduleName] = value.default;
  return modules
}, {});

const store = new Vuex.Store({
  modules,
  getters
});

export default store