<template>
  <div class="mid">
    <div v-show="state.showData.isSet">
      <div>{{ state.showData.subject }}</div>
      <br />
      <br />
      <h3 class="lite">
        팁 <span>{{ state.testIndex + 1 }}</span>
      </h3>
      <br />
      <div v-html="showTitle"></div>
      <br />
      <div v-html="showContent"></div>
      <br />
      <div><img class="image" :src="`${state.showData.image}`" /></div>
      <br />
      <div v-html="showComment"></div>
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
  props: {},
  components: {},
  setup(props) {
    const store = useStore()
    //const { proxy } = getCurrentInstance();
    const route = useRoute()
    const infoTechTestData = computed(() => store.state.infoTechTestTipList)
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

    const showTitle = computed(() => state.showData.title.replace('\n', '<br />'))
    const showContent = computed(() => state.showData.content.replace('\n', '<br />'))
    const showComment = computed(() => state.showData.comment.replace('\n', '<br />'))

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
        subject: '',
        title: '',
        content: '',
        image: '',
        comment: ''
      },
      testIndex: 0
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

      store.dispatch('getInfoTechTipList', [testIdName, testTypeName]).then(function ({
        isFinish
      }) {
        if (isFinish == true) {
          var originData = infoTechTestData.value.data
          state.dataList = originData

          console.log('success data :', state.dataList.length)
          initTestData()
        }
      })
    })

    const nextTest = function () {
      if (state.testIndex < state.dataList.length - 1) {
        ++state.testIndex

        state.showData.subject = ''
        state.showData.title = ''
        state.showData.content = ''
        state.showData.image = ''
        state.showData.comment = ''

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
        state.showData.subject = state.dataList[state.testIndex].subject
        state.showData.title = state.dataList[state.testIndex].title
        state.showData.content = state.dataList[state.testIndex].content
        state.showData.image = state.dataList[state.testIndex].image
        state.showData.comment = state.dataList[state.testIndex].comment
        state.showData.isSet = true
      }
    }

    return {
      state,
      infoTechTestData,
      nextTest,
      initTestData,

      showTitle,
      showContent,
      showComment
    }
  }
}
</script>
