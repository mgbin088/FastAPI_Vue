import { defaultRouter } from "@/router";



export default {
  namespaced: true,
  
  state: {
    routes: []
  },
  mutations: {
    Set_Routes(state, routes) {
      state.routes = defaultRouter.concat(routes)
    }
  },
  actions: {
    generateRoutes({ commit }, data){
      return new Promise(resolve => {
        commit('Set_Routes', []);
        resolve([])
      })
    }
  }
  
};
