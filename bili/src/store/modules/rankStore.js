import { rankApi } from '../../api'
import * as TYPE from '../actionType/rankType'
import _ from 'lodash'

const state = {
  ranklist: []
}

const getters = {
  ranklist: state => state.ranklist
}

const actions = {
  ranklist ({ commit, rootState }) {
    rootState.requesting = true
    commit(TYPE.RANK_LIST_REQUEST)
    rankApi.ranking3().then(res => {
      rootState.requesting = false
      commit(TYPE.RANK_LIST_SUCCESS, res)
    }, (error) => {
      console.log(error)
      rootState.requesting = false
      commit(TYPE.RANK_LIST_FAILURE)
    })
  }
}
const mutations = {
  [TYPE.RANK_LIST_SUCCESS] (state, res) {
    state.ranklist = _.values(res.recommend.list)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}