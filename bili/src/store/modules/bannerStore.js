import { bannerApi } from '../../api'
import * as TYPE from '../actionType/bannerType'

const state = {
  bannerlist: []
}
const getters = {
  bannerlist: state => state.bannerlist
}

const actions = {
  bannerlist ({ commit, rootState }) {
    rootState.requesting = true
    commit(TYPE.BANNER_LIST_REQUEST)
    bannerApi.list().then(res => {
      rootState.requesting = false
      commit(TYPE.BANNER_LIST_SUCCESS, res)
    }, error => {
      rootState.requesting = false
      console.log(error)
      commit(TYPE.BANNER_LIST_FAILURE)
    })
  }
}

const mutations = {

  [TYPE.BANNER_LIST_SUCCESS] (state, bannerlist) {
    state.bannerlist = bannerlist.data
  }

}


export default {
  state,
  getters,
  actions,
  mutations
}