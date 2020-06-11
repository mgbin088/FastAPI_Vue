import Cookies from 'js-cookie'

let SidebarStatusKey = "sidebarStatus";

export default {
  namespaced: true,
  state: {
    sidebar: {
      opened: Cookies.get(SidebarStatusKey)? !!+Cookies.get('sidebarStatus'): true,
      withoutAnimation: false
    },
    device: 'desktop'
  },
  mutations: {
    toggle_sidebar(state) {
      state.sidebar.opened = !state.sidebar.opened;
      state.sidebar.withoutAnimation = false;
      if (state.sidebar.opened) {
        Cookies.set(SidebarStatusKey, 1)
      } else {
        Cookies.set(SidebarStatusKey, 0)
      }
    },
    close_sidebar(state, withoutAnimation) {
      Cookies.set(SidebarStatusKey, 0);
      state.sidebar.opened = false;
      state.sidebar.withoutAnimation = withoutAnimation
    },
    toggle_device(state, device) {
      state.device = device
    }
  
  },
  actions: {
    toggleSidebar({ commit }) {
      commit('toggle_sidebar')
    },
    closeSidebar({ commit }, { withoutAnimation }) {
      commit('close_sidebar', withoutAnimation)
    },
    toggleDevice({ commit }, device) {
      commit('toggle_device', device)
    }
  },
  
}