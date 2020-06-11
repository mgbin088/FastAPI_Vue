export default {
  namespaced: true,
  state: {
    visitedViews: [],
    cachedViews: []
  },
  mutations: {
    Add_Visited_View(state, view) {
      if (state.visitedViews.some(v => v.path === view.path)) return;
      state.visitedViews.push(
          Object.assign({}, view, {
            title: view.meta.title || 'no-name'
      })
      )
    },
    Add_Cached_View(state, view) {
      if (state.cachedViews.includes(view.name)) return;
      if (!view.meta.noCache) {
        state.cachedViews.push(view.name)
      }
    },
    Del_Visited_View(state, view) {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews.splice(i, 1);
          break
        }
      }
    },
    Del_Cached_View(state, view) {
      const index = state.cachedViews.indexOf(view.name);
      index > -1 && state.cachedViews.splice(index, 1)
    },
    Del_Others_Visited_Views(state, view) {
      state.visitedViews = state.visitedViews.filter(v => {
        return v.meta.affix || v.path === view.path
      })
    },
    Del_Others_Cached_Views(state, view) {
      const index = state.cachedViews.indexOf(view.name);
      if (index > -1) {
        state.cachedViews = state.cachedViews.slice(index, index + 1)
      } else {
        state.cachedViews = []
      }
    },
    Del_All_Visited_Views(state) {
      state.visitedViews = state.visitedViews.filter(tag => tag.meta.affix)
    },
    Del_All_Cached_Views(state) {
      state.cachedViews = []
    },
    Update_Visited_View(state, view) {
      for (let v of state.visitedViews) {
        if (v.path === view.path) {
          v = Object.assign(v, view);
          break
        }
      }
    }
  },
  actions: {
    addView({dispatch}, view) {
      dispatch('addVisitedView', view);
      dispatch('addCachedView', view)
    },
    addVisitedView({ commit }, view) {
      commit("Add_Visited_View", view)
    },
    addCachedView({ commit }, view) {
      commit('Add_Cached_View', view)
    },
    
    delView({ dispatch, state}, view) {
      return new Promise(resolve => {
        dispatch('delVisitedView', view);
        dispatch('delCachedView', view);
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews]
        })
      })
    },
    delVisitedView({ commit, state}, view) {
      return new Promise(resolve => {
        commit('Del_Visited_View', view);
        resolve([...state.visitedViews])
      })
    },
    delCachedView({ commit, state}, view) {
      return new Promise(resolve => {
        commit('Del_Cached_View', view);
        resolve([...state.cachedViews])
      })
    },
    delOthersViews({dispatch, state}, view) {
      return new Promise(resolve => {
        dispatch('delOthersVisitedViews', view);
        dispatch('delOthersCachedViews', view);
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews]
        })
      })
    },
    delOthersVisitedViews({ commit, state }, view) {
      return new Promise(resolve => {
        commit('Del_Others_Visited_Views', view);
        resolve([...state.visitedViews])
      })
    },
    delOthersCachedViews({ commit, state }, view) {
      return new Promise(resolve => {
        commit('Del_Others_Cached_Views', view);
        resolve([...state.cachedViews])
      })
    },
    delAllViews({ dispatch, state}, view) {
      return new Promise(resolve => {
        dispatch('delAllVisitedViews', view);
        dispatch('delAllCachedViews', view);
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews]
        })
      })
    },
    delAllVisitedViews({ commit, state }) {
      return new Promise(resolve => {
        commit('Del_All_Visited_Views');
        resolve([...state.visitedViews])
      })
    },
    delAllCachedViews({ commit, state }) {
      return new Promise(resolve => {
        commit('Del_All_Cached_Views');
        resolve([...state.cachedViews])
      })
    },
    updateVisitedView({ commit }, view) {
      commit('Update_Visited_View', view)
    }
  },
  
}