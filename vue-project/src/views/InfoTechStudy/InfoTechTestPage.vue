<template>
  <div style="display: flex; width: 100%">
    <div style="width: 100%">
      <div class="top">
        <h1>{{ state.titleText }}</h1>
        <h5>{{ state.subTitleText }}</h5>
      </div>

      <div class="mid">
        <!-- 상황에 따라 필기, 실기, 팁 변환 하기 -->

        <div v-if="state.testType == 't'">
          <MidTipComp></MidTipComp>
        </div>
        <div v-else>
          <MidQuestionComp
            :pShowData="showInfoTechTestData"
            :pIsShowCorrect="state.isShowCorrect"
            :pIsShowComment="state.isShowComment"
            :pIsShowHint="state.isShowHint"
          ></MidQuestionComp>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');

* {
  font-family: 'Gowun Dodum', sans-serif;
}

.top {
  background-color: green;
  color: white;

  height: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('@/assets/pexels-negative-space-97077.jpg'); */
  background-position: center;
  background-size: cover;
}

.image {
  /* background-color: green; */

  width: 450px;

  text-align: center;
}
</style>

<script>
import MidQuestionComp from '@/components/InfoTechStudy/MidQuestionComp.vue'
import MidTipComp from '@/components/InfoTechStudy/MidTipComp.vue'

import { reactive, ref, computed, watch, onMounted, defineComponent, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  name: 'InfoTechTestPage',
  props: {},
  components: {
    MidQuestionComp,
    MidTipComp
  },
  setup() {
    const store = useStore()
    //const { proxy } = getCurrentInstance();
    const route = useRoute()
    const infoTechTestData = computed(() => store.state.infoTechTestDataList)
    const showInfoTechTestData = computed(() => {
      if (state.dataList > 0) {
        return state.dataList[state.testIndex]
      } else {
        return state.showData
      }
    })
    // const initTestData = computed(() => {

    // })

    // const showTitleQuestion = computed(() => state.showData.titleQuestion.replace("\n", "<br />"));
    // const showSubQuestion = computed(() => state.showData.subQuestion.replace("\n", "<br />"));
    // const showChoiceGroup = computed(() => state.showData.choiceGroup.replace("\n", "<br />"));
    // const showCorrect = computed(() => state.showData.correct.replace("\n", "<br />"));
    // const showComment_text = computed(() => state.showData.comment_text.replace("\n", "<br />"));
    // const showHint_text = computed(() => state.showData.hint_text.replace("\n", "<br />"));

    // data
    const state = reactive({
      testId: route.query.testId,
      testType: route.query.testType,
      isAnswerType: false,
      isChoiceType: false,
      isTipType: false,

      titleText: '',
      subTitleText: '',

      dataList: [],
      oneData: {},
      showData: {
        testType: '',
        examRound: '',
        subject: '',
        titleQuestion: '',
        subQuestion: '',
        image: '',
        choiceGroup: '',
        correct: '',
        comment_text: '',
        comment_img: '',
        hint_text: '',
        hint_img: ''
      },
      testIndex: 0,

      isShowCorrect: false,
      isShowComment: false,
      isShowHint: false
    })

    //onMounted
    onMounted(function () {
      console.log('')

      switch (state.testId) {
        case '0':
          state.titleText = '정보처리기능사'
          break
        case '1':
          state.titleText = '정보처리산업기사'
          break
        case '2':
          state.titleText = '정보처리기사'
          break
      }

      switch (state.testType) {
        case 'c':
          state.subTitleText = '필기'
          break
        case 'a':
          state.subTitleText = '실기'
          break
        case 't':
          state.subTitleText = '팁'
          break
      }

      // store.dispatch("getInfoTechTestList")
      // .then(function ({isFinish}) {
      //   if(isFinish == true){
      //     var originData = infoTechTestData.value.data
      //     state.dataList = originData
      //     console.log('success data :', state.dataList.length)
      //   }
      // });
    })

    const nextTest = function () {
      ++state.testIndex
      ;(state.isShowCorrect = false), (state.isShowComment = false), (state.isShowHint = false)

      // store.dispatch("getInfoTechTest", state.testIndex)
      // .then(function ({isFinish}) {
      //   if(isFinish == true){
      //     state.dataList = infoTechTestData.value.data

      //     initTestData()
      //   }
      // });
    }

    const initTestData = function () {
      state.showData.testType = state.dataList[0].testType
      state.showData.examRound = state.dataList[0].examRound
      state.showData.subject = state.dataList[0].subject
      state.showData.titleQuestion = state.dataList[0].titleQuestion
      state.showData.subQuestion = state.dataList[0].subQuestion
      state.showData.image = state.dataList[0].image
      state.showData.choiceGroup = state.dataList[0].choiceGroup
      state.showData.correct = state.dataList[0].correct
      state.showData.comment_text = state.dataList[0].comment_text
      state.showData.comment_img = state.dataList[0].comment_img
      state.showData.hint_text = state.dataList[0].hint_text
      state.showData.hint_img = state.dataList[0].hint_img
      state.showData.isSet = true
    }

    return {
      state,
      infoTechTestData,
      showInfoTechTestData,
      nextTest,
      initTestData
    }
  }
}
</script>
