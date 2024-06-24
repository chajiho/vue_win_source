import { createStore } from 'vuex'

import axios from 'axios'

import SERVER from '@/API/url'

export default createStore({
  state: {
    visitorList: {},
    infoTechTestDataList: {},
    infoTechTestData: {},
    infoTechTestTip: {},
    infoTechTestTipList: {}
  },
  getters: {},
  mutations: {
    SET_VISITORLIST(state, visitorList) {
      state.visitorList = visitorList
    },
    SET_INFOTECHTESTDATALIST(state, infoTechTestDataList) {
      state.infoTechTestDataList = infoTechTestDataList
    },
    SET_INFOTECHTESTDATA(state, infoTechTestData) {
      state.infoTechTestData = infoTechTestData
    },
    SET_INFOTECHTESTTIP(state, infoTechTestTip) {
      state.infoTechTestTip = infoTechTestTip
    },
    SET_INFOTECHTESTTIPLIST(state, infoTechTestTipList) {
      state.infoTechTestTipList = infoTechTestTipList
    }
  },
  actions: {
    fetchVisitorList({ commit }) {
      console.log(`##### test log :: `, SERVER.URL + SERVER.ROUTES.register)
      axios
        .get(SERVER.URL + SERVER.ROUTES.register)
        .then((res) => commit('SET_VISITORLIST', res.data))
        .catch((err) => console.error(err.response.data))
    },

    addVisitor({ dispatch }, visitorInfo) {
      console.log('addVisitor ok', visitorInfo)
      axios
        .post(SERVER.URL + SERVER.ROUTES.register, visitorInfo)
        .then(() => dispatch('fetchVisitorList'))
        .catch((err) => console.error(err.response.data))
    },

    registInfoTechTest({ dispatch }, infoTechTestData) {
      console.log('registInfoTechTest ok', infoTechTestData)
      //   axios.post(SERVER.URL + SERVER.ROUTES.register, infoTechTestData)
      axios
        .post(SERVER.URL + SERVER.ROUTES.infotech, infoTechTestData)
        .then((res) => console.log('Test Log Success = ' + res))
        .catch((err) => console.error(err.response.data))
    },

    registInfoTechTip({ dispatch }, infoTechTestTip) {
      console.log('registInfoTechTip ok', infoTechTestTip)
      //   axios.post(SERVER.URL + SERVER.ROUTES.register, infoTechTestData)
      axios
        .post(SERVER.URL + SERVER.ROUTES.infotechtip, infoTechTestTip)
        .then((res) => console.log('Tip Log Success = ' + res))
        .catch((err) => console.error(err.response.data))
    },

    // 리스트 가져오기
    async getInfoTechTestList({ commit }, [testId, testType]) {
      console.log(
        'getInfoTechTest :: ',
        SERVER.URL + SERVER.ROUTES.infotechList,
        '?testId=',
        testId,
        '&testType=',
        testType
      )

      const promise = await axios
        .get(
          SERVER.URL + SERVER.ROUTES.infotechList + '?testId=' + testId + '&testType=' + testType
        )
        .then((res) => {
          commit('SET_INFOTECHTESTDATALIST', res.data)
          return {
            isFinish: true
          }
        })
        .catch((err) => console.error(err.response.data))
      return promise
    },

    async getInfoTechTipList({ commit }, [testId, testType]) {
      console.log(
        'getInfoTechTipList :: ',
        SERVER.URL + SERVER.ROUTES.infotechtipList + '?testId=' + testId + '&testType=' + testType
      )

      const promise = await axios
        .get(
          SERVER.URL + SERVER.ROUTES.infotechtipList + '?testId=' + testId + '&testType=' + testType
        )
        .then((res) => {
          commit('SET_INFOTECHTESTTIPLIST', res.data)
          return {
            isFinish: true
          }
        })
        .catch((err) => console.error(err.response.data))
      return promise
    },

    async getInfoTechTest({ commit }, [testType, index]) {
      console.log(
        'getInfoTechTest :: ',
        SERVER.URL + SERVER.ROUTES.infotech,
        '?type=',
        testType,
        '&index=',
        index
      )

      const promise = await axios
        .get(SERVER.URL + SERVER.ROUTES.infotech + '?type=' + testType + '&index=' + index)
        .then((res) => {
          commit('SET_INFOTECHTESTDATA', res.data)
          return {
            isFinish: true
          }
        })
        .catch((err) => console.error(err.response.data))
      return promise
    },

    async getInfoTechTip({ commit }, index) {
      console.log('getInfoTechTip :: ', SERVER.URL + SERVER.ROUTES.infotechtip, '?index=', index)

      const promise = await axios
        .get(SERVER.URL + SERVER.ROUTES.infotechtip + '?index=' + index)
        .then((res) => {
          commit('SET_INFOTECHTESTTIP', res.data)
          return {
            isFinish: true
          }
        })
        .catch((err) => console.error(err.response.data))
      return promise
    }
  },
  modules: {}
})
