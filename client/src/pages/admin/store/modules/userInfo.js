import { getToken, setToken, removeToken } from "@utils/auth";
import { post, request } from "@utils/axios";
import router, { resetRouter } from "../../router";

export default {
  namespaced: true,
  
  state: {
    token: getToken(),
    roles: []
  },
  
  mutations: {
    Set_Token(state, token){
      state.token = token
    },
    Set_Roles(state, roles) {
      state.roles = roles
    }
  },
  
  actions: {
    login({state, commit}, params) {
      return new Promise((resolve, reject) => {
        // post("userinfo/login", params).then(res => {
        //   if (res.status === 200) {
        //     const { data } = res;
        //     if (data.code === 1) {
        //       commit('Set_Token', data.token);
        //       setToken(data.token)
        //     }
        //   }
        //   resolve(res)
        // }).catch(err => {
        //   reject(err)
        // })
        commit('Set_Token', 'hello');
        setToken('hello');
        resolve({data: {code: 1}})
      })
    },
    getInfo({ commit, state }){
      return new Promise((resolve, reject) => {
        commit('Set_Roles', ['admin']);
        resolve({roles: ['admin']})
      })
    },
    logout({ commit, state, dispatch }) {
      return new Promise((resolve, reject) => {
        commit('Set_Token', '');
        commit('Set_Roles', []);
        removeToken();
        resetRouter();
        dispatch('tagsView/delAllViews', null, { root: true })
      })
    },
    resetToken({ commit }) {
      return new Promise(resolve => {
        commit('Set_Token', '');
        commit('Set_Roles', []);
        removeToken();
        resolve()
      })
    }
  }
};
