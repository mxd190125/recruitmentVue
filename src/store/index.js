import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    user: {
      id: "",
      username: '',
      password: '',
      isBaidu: '',
      isAlipay: '',
      avatarUrl: '',
      token: '',
      authorities: []
      // photoUrl: ''
    },
    activeIndex: "",
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getToken(state) {
      return state.user.token;
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.user.token = token;
    }
  },
  actions: {
  },
  modules: {
  }
})
