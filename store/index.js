import Vuex from 'vuex'
import axios from 'axios'

import {
  getField,
  updateField
} from 'vuex-map-fields'

// import auth from './modules/auth'

export const defaultState = () => ({
})

const state = () => defaultState();

export const mutations = {
  updateField,
  RESET_BASE_STATE(state) {
    Object.assign(state, defaultState())
  }
}

export const actions = {
  resetBaseState({ commit }) {
    commit('RESET_BASE_STATE')
  },

  /**
   * Note: we can only use this via SSR
   */
  async nuxtServerInit({ commit }, { req, redirect }) {}
}

export const getters = {
  getField
}

export default {
  namespaced: true,
  modules: {
    // auth: auth,
  },
  mutations,
  actions,
  getters,
  state,
};
// export default Store