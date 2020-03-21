import * as url from './urlConfig'
import axios from 'axios'

//获取轮播图
export const bannerApi = {
  list () {
    return axios.get(url.banner).then((res) => {
      return res.data
    })
  }
}

//排行榜
export const ranKApi = {
  ranKing3 () {
    return axios.get(url.ranking3).then((res) => {
      return res.data
    })
  }
}

//推广
export const promoteApi = {
  promote () {
    return axios.get(url.promote).then((res) => {
      return res.data
    })
  }
}

//直播
export const liveApi = {
  live () {
    return axios.get(url.live).then((res) => {
      return res.data
    })
  }
}
//具体内容
export const contentApi = {
  content () {
    return axios.get(url.contet).then(res => {
      return res.data
    })
  }
}

//具体内柔的三日排行消息
export const contentrankApi = {
  contentrank (param) {
    return axios.post(url.contentrank, param).then(res => {
      return res.data
    })
  },
  contentrankweek (param) {
    return axios.post(url.contentrankweek, param).then(res => {
      return res.data
    })
  }
}