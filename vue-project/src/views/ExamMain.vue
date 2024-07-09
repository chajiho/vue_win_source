<template>
  <div style="display: flex; width: 100%">
    <div style="width: 100%">
      <div style="height: 100%">
        <div class="top">
          <TopComponent></TopComponent>
        </div>

        <div class="tab">
          <TabComponent
            :pTestBtn="tabBtn_test"
            :pTipBtn="tabBtn_tip"
            :pRegTestBtn="tabBtn_regtest"
            :pRegTipBtn="tabBtn_regtip"
          ></TabComponent>
        </div>

        <div class="mid">
          <ExamListComponent v-show="state.midPage == 0" :pMovePage="movePage"></ExamListComponent>
          <ExamTestComponent
            v-show="state.midPage == 1"
            :pDataList="state.testDataList"
            :pMovePage="movePage"
            :pRefreshData="refreshData"
          ></ExamTestComponent>
          <ExamTipComponent
            v-show="state.midPage == 2"
            :pDataList="state.tipDataList"
            :pMovePage="movePage"
            :pRefreshData="refreshData"
          ></ExamTipComponent>
          <MidRegistInfoTech
            v-show="state.midPage == 3"
            :pRegistType="state.registType"
            :pMovePage="movePage"
          ></MidRegistInfoTech>
          <MidRegistInfoTech
            v-show="state.midPage == 4"
            :pRegistType="state.registType"
            :pMovePage="movePage"
          ></MidRegistInfoTech>
        </div>
      </div>

      <div class="footer">
        <FooterComponent></FooterComponent>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script>
import TopComponent from '@/components/mycomp/frame/TopComponent.vue'
import TabComponent from '@/components/mycomp/frame/TabComponent.vue'
import FooterComponent from '@/components/mycomp/frame/FooterComponent.vue'

import ExamListComponent from '@/components/mycomp/mid/ExamListComponent.vue'
import ExamTestComponent from '@/components/mycomp/mid/ExamTestComponent.vue'
import ExamTipComponent from '@/components/mycomp/mid/ExamTipComponent.vue'

import MidRegistInfoTech from '@/components/InfoTechStudy/MidRegistInfoTech.vue'

import { reactive, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  name: 'ExamMain',
  props: {},
  components: {
    TopComponent,
    TabComponent,
    FooterComponent,
    ExamListComponent,
    ExamTestComponent,
    ExamTipComponent,
    MidRegistInfoTech
  },
  setup() {
    const store = useStore()
    //const { proxy } = getCurrentInstance();
    const route = useRoute()

    const infoTechTestData = computed(() => store.state.infoTechTestDataList)
    const infoTechTipData = computed(() => store.state.infoTechTestTipList)

    // data
    let state = reactive({
      testId: route.query.testId,
      testType: route.query.testType,
      midPage: 0,
      titleText: '',
      registType: '',

      testDataList: [],
      tipDataList: []
    })

    //onMounted
    onMounted(function () {
      // console.log('examId >> ', state.examId)
      switch (state.testId) {
        case '0':
          state.titleText = '정보처리기능사 '
          break
        case '1':
          state.titleText = '정보처리산업기사 '
          break
        case '2':
          state.titleText = '정보처리기사 '
          break

        default:
          break
      }

      state.titleText += state.testType == 'c' ? '필기' : '실기'
    })

    const movePage = function (pageNum) {
      console.log('*** GO PAGE: ', pageNum)
      // if (state.midPage === -1 || pageNum > 0)
      state.midPage = pageNum
    }

    const tabBtn_test = function () {
      console.log('*** 시험 버튼: ', state.titleText)

      state.testIndex = 0

      if (state.testDataList.length == 0) {
        var testIdName = ''
        switch (state.testId) {
          case '0':
            testIdName = 't' //technician
            break
          case '1':
            testIdName = 'i' //indu_engineer
            break
          case '2':
            testIdName = 'e' //engineer
            break
        }

        var testTypeName = ''

        switch (state.testType) {
          case 'c':
            testTypeName = 'choice'
            break
          case 'a':
            testTypeName = 'answer'
            break
          case 't':
            testTypeName = 'tip'
            break
        }

        store.dispatch('getInfoTechTestList', [testIdName, testTypeName]).then(function ({
          isFinish
        }) {
          if (isFinish == true) {
            var originData = infoTechTestData.value.data
            state.testDataList = originData
            console.log('success data :', state.testDataList.length)
          }
        })
      }

      state.midPage = 1

      // if (state.midPage === -1 || pageNum > 0)
    }

    const tabBtn_tip = function () {
      console.log('*** 팁 버튼: ', state.titleText)
      // if (state.midPage === -1 || pageNum > 0)

      if (state.tipDataList.length == 0) {
        var testIdName = ''
        switch (state.testId) {
          case '0':
            testIdName = 't' //technician
            break
          case '1':
            testIdName = 'i' //indu_engineer
            break
          case '2':
            testIdName = 'e' //engineer
            break
        }

        var testTypeName = ''
        switch (state.testType) {
          case 'c':
            testTypeName = 'choice'
            break
          case 'a':
            testTypeName = 'answer'
            break
          case 't':
            testTypeName = 'tip'
            break
        }

        store.dispatch('getInfoTechTipList', [testIdName, testTypeName]).then(function ({
          isFinish
        }) {
          if (isFinish == true) {
            var originData = infoTechTipData.value.data
            state.tipDataList = originData

            console.log('success data :', state.tipDataList.length)
            // initTestData()
          }
        })
      }

      state.midPage = 2
    }

    const tabBtn_regtest = function () {
      console.log('*** 문제 등록: ', state.titleText)
      // if (state.midPage === -1 || pageNum > 0)

      state.registType = state.testType

      state.midPage = 3
    }

    const tabBtn_regtip = function () {
      console.log('*** 팁 등록: ', state.titleText)
      // if (state.midPage === -1 || pageNum > 0)

      state.registType = 't'

      state.midPage = 4
    }

    const refreshData = function (testType) {
      console.log('*** 새로고침: ', state.titleText)

      var testIdName = ''
      switch (state.testId) {
        case '0':
          testIdName = 't' //technician
          break
        case '1':
          testIdName = 'i' //indu_engineer
          break
        case '2':
          testIdName = 'e' //engineer
          break
      }

      switch (state.testType) {
        case 'c':
          store.dispatch('getInfoTechTestList', [testIdName, 'choice']).then(function ({
            isFinish
          }) {
            if (isFinish == true) {
              var originData = infoTechTestData.value.data
              state.testDataList = originData
              console.log('success data :', state.testDataList.length)
            }
          })
          break
        case 'a':
          store.dispatch('getInfoTechTestList', [testIdName, 'answer']).then(function ({
            isFinish
          }) {
            if (isFinish == true) {
              var originData = infoTechTestData.value.data
              state.testDataList = originData
              console.log('success data :', state.testDataList.length)
            }
          })
          break
        case 't':
          store.dispatch('getInfoTechTipList', [testIdName, 'tip']).then(function ({ isFinish }) {
            if (isFinish == true) {
              var originData = infoTechTipData.value.data
              state.tipDataList = originData

              console.log('success data :', state.tipDataList.length)
              // initTestData()
            }
          })
          break
      }

      // if (state.midPage === -1 || pageNum > 0)
    }

    return {
      state,
      movePage,
      refreshData,

      tabBtn_test,
      tabBtn_tip,
      tabBtn_regtest,
      tabBtn_regtip
    }
  }
}
</script>
