<template>
  <div class="mid">
    <div>
      <div>{{ showInfoTechTestData.testType }}</div>
      <br />
      <div>{{ showInfoTechTestData.examRound }}</div>
      <br />
      <div>{{ showInfoTechTestData.subject }}</div>
      <br />
      <br />
      <h3 class="lite">문제</h3>
      <br />
      <span>{{ state.testIndex + 1 }} </span>
      <div v-html="showTitleQuestion"></div>
      <br />
      <div v-html="showSubQuestion"></div>
      <br />
      <div><img class="image" :src="`${showInfoTechTestData.image}`" /></div>
      <br />
    </div>
    <br />
    <div>
      <div v-html="showChoiceGroup"></div>
      <br />
      <h3 class="lite">답 입력</h3>
      <br />
      <!-- <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="">
          <label for="floatingInput">입력</label>
        </div> -->
      <p>입력 : <input type="text" /></p>
      <br />
      <button class="btn1" v-on:click="state.isShowCorrect = true">정답 보기</button>
      <br />
      <div v-show="state.isShowCorrect">
        <div>{{ showInfoTechTestData.correct }}</div>
      </div>
      <br />
      <button class="btn1" v-on:click="state.isShowComment = true">설명 보기</button>
      <br />
      <div v-show="state.isShowComment">
        <div>{{ showInfoTechTestData.comment_text }}</div>
        <br />
        <div><img class="image" :src="`${showInfoTechTestData.comment_img}`" /></div>
      </div>
      <br />
      <button class="btn1" v-on:click="state.isShowHint = true">힌트 보기</button>
      <br />
      <div v-show="state.isShowHint">
        <div>{{ showInfoTechTestData.hint_text }}</div>
        <br />
        <div><img class="image" :src="`${showInfoTechTestData.hint_img}`" /></div>
      </div>
      <br />
    </div>
    <br />
    <div class="group0">
      <h5 style="display: none">하단</h5>
      <button type="button" class="btn btn-dark" v-on:click="nextTest">다음</button>
      <router-link to="/">
        <button type="button" class="btn btn-outline-dark">홈으로</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');

* {
  font-family: 'Gowun Dodum', sans-serif;
}

.mid {
  /* background-color: rgb(247, 247, 247); */
  width: 500px;
  margin: 20px auto 20px auto;
  padding: 20px;

  box-shadow: 0px 0px 3px 0px gray;
}

.group0 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 20px;
}

.group0 > button {
  margin-right: 10px;
}

.lite {
  color: gray;
  font-size: 20px;
}

.btn1 {
  width: 250px;
  height: 50px;

  background-color: transparent;
  /* background-color: lightblue; */

  border: 1px solid black;
  border-radius: 50px;

  margin-top: 20px;
}

.btn1:hover {
  border: 2px solid black;
}

.image {
  /* background-color: green; */

  width: 450px;

  text-align: center;
}
</style>

<script>
import { reactive, ref, computed, watch, onMounted, defineComponent, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  name: 'InfoTechTestPage',
  props: {
    pShowData: Object,
    pIsShowCorrect: Boolean,
    pIsShowComment: Boolean,
    pIsShowHint: Boolean
  },
  components: {},
  setup(props) {
    const store = useStore()
    //const { proxy } = getCurrentInstance();
    const route = useRoute()
    const infoTechTestData = computed(() => store.state.infoTechTestDataList)
    // const initTestData = computed(() => {

    // })
    const showInfoTechTestData = computed(() => state.showData)
    // const showInfoTechTestData = computed(() => {
    //   if(state.dataList > 0){
    //     return state.dataList[state.testIndex]
    //   }
    //   else {
    //     return state.showData
    //   }
    // });

    const showTitleQuestion = computed(() => state.showData.titleQuestion.replace('\n', '<br />'))
    const showSubQuestion = computed(() => state.showData.subQuestion.replace('\n', '<br />'))
    const showChoiceGroup = computed(() => state.showData.choiceGroup.replace('\n', '<br />'))
    const showCorrect = computed(() => state.showData.correct.replace('\n', '<br />'))
    const showComment_text = computed(() => state.showData.comment_text.replace('\n', '<br />'))
    const showHint_text = computed(() => state.showData.hint_text.replace('\n', '<br />'))

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
        isSet: false,
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

      isShowCorrect: props.pIsShowCorrect,
      isShowComment: props.pIsShowComment,
      isShowHint: props.pIsShowHint
    })

    //onMounted
    onMounted(function () {
      console.log('')

      // if(props.pShowData != undefined){
      //   state.showData = props.pShowData
      // }

      state.testIndex = 0

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

      if (state.testType != 't') {
        store.dispatch('getInfoTechTestList', [testIdName, testTypeName]).then(function ({
          isFinish
        }) {
          if (isFinish == true) {
            var originData = infoTechTestData.value.data
            state.dataList = originData

            console.log('success data :', state.dataList.length)
            initTestData()
          }
        })
      }
    })

    const nextTest = function () {
      if (state.testIndex < state.dataList.length - 1) {
        ++state.testIndex
        ;(state.isShowCorrect = false), (state.isShowComment = false), (state.isShowHint = false)

        initTestData()
      }

      // store.dispatch("getInfoTechTest", state.testIndex)
      // .then(function ({isFinish}) {
      //   if(isFinish == true){
      //     state.dataList = infoTechTestData.value.data

      //     initTestData()
      //   }
      // });
    }

    const initTestData = function () {
      if (state.dataList.length > 0) {
        state.showData.testType = state.dataList[state.testIndex].testType
        state.showData.examRound = state.dataList[state.testIndex].examRound
        state.showData.subject = state.dataList[state.testIndex].subject
        state.showData.titleQuestion = state.dataList[state.testIndex].titleQuestion
        state.showData.subQuestion = state.dataList[state.testIndex].subQuestion
        state.showData.image = state.dataList[state.testIndex].image
        state.showData.choiceGroup = state.dataList[state.testIndex].choiceGroup
        state.showData.correct = state.dataList[state.testIndex].correct
        state.showData.comment_text = state.dataList[state.testIndex].comment_text
        state.showData.comment_img = state.dataList[state.testIndex].comment_img
        state.showData.hint_text = state.dataList[state.testIndex].hint_text
        state.showData.hint_img = state.dataList[state.testIndex].hint_img
        state.showData.isSet = true
      }
    }

    return {
      state,
      infoTechTestData,
      showInfoTechTestData,
      nextTest,
      initTestData,

      showTitleQuestion,
      showSubQuestion,
      showChoiceGroup,
      showCorrect,
      showComment_text,
      showHint_text
    }
  }
}
</script>
