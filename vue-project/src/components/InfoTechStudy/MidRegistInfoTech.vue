<template>
  <div class="mid">
    <div class="content_center">
      <div v-if="state.testType == 't'">
        <!-- type 정하는 방법 만들기 / 일단 디폴트는 객관식 -->
        <h3 class="lite">과목 선택</h3>
        <!-- 데이터베이스 구축, 소프트웨어 개발, 소프트웨어 설계, 정보시스템 구축관리, 프로그래밍 언어 활용 -->
        <select v-model="state.infoTechTipData.subject">
          <option value="데이터베이스 구축">데이터베이스 구축</option>
          <option value="소프트웨어 개발">소프트웨어 개발</option>
          <option value="소프트웨어 설계">소프트웨어 설계</option>
          <option value="정보시스템 구축관리">정보시스템 구축관리</option>
          <option value="프로그래밍 언어 활용">프로그래밍 언어 활용</option>
        </select>

        <h3 class="lite">제목</h3>
        <textarea cols="40" rows="5" v-model="state.infoTechTipData.title"></textarea>
        <h3 class="lite">내용</h3>
        <textarea cols="40" rows="5" v-model="state.infoTechTipData.content"></textarea>
        <h3 class="lite">이미지(url 링크)</h3>
        <input type="text" v-model="state.infoTechTipData.image" placeholder="" />

        <h3 class="lite">해설 글</h3>
        <textarea cols="40" rows="5" v-model="state.infoTechTipData.comment"></textarea>
      </div>
      <div v-else>
        <!-- type 정하는 방법 만들기 / 일단 디폴트는 객관식 -->
        <h3 class="lite">문제 회차</h3>
        <input type="text" v-model="state.infoTechTestData.examRound" placeholder="" />
        <h3 class="lite">과목 선택</h3>
        <!-- 데이터베이스 구축, 소프트웨어 개발, 소프트웨어 설계, 정보시스템 구축관리, 프로그래밍 언어 활용 -->
        <select v-model="state.infoTechTestData.subject">
          <option value="데이터베이스 구축">데이터베이스 구축</option>
          <option value="소프트웨어 개발">소프트웨어 개발</option>
          <option value="소프트웨어 설계">소프트웨어 설계</option>
          <option value="정보시스템 구축관리">정보시스템 구축관리</option>
          <option value="프로그래밍 언어 활용">프로그래밍 언어 활용</option>
        </select>

        <h3 class="lite">문제(타이틀)</h3>
        <textarea cols="40" rows="5" v-model="state.infoTechTestData.titleQuestion"></textarea>
        <h3 class="lite">문제 부연글</h3>
        <textarea cols="40" rows="5" v-model="state.infoTechTestData.subQuestion"></textarea>
        <h3 class="lite">문제 이미지(url 링크)</h3>
        <input type="text" v-model="state.infoTechTestData.image" placeholder="" />

        <!-- <h3 class="lite">선택지 보기</h3>
          <textarea cols="40" rows="5" v-model="state.infoTechTestData.choiceGroup"></textarea> -->
        <h3 class="lite">정답</h3>
        <input type="text" v-model="state.infoTechTestData.correct" placeholder="" />

        <h3 class="lite">해설 글</h3>
        <textarea cols="40" rows="5" v-model="state.infoTechTestData.comment_text"></textarea>
        <h3 class="lite">해설 이미지</h3>
        <input type="text" v-model="state.infoTechTestData.comment_img" placeholder="" />

        <h3 class="lite">힌트</h3>
        <textarea cols="40" rows="5" v-model="state.infoTechTestData.hint_text"></textarea>
        <h3 class="lite">힌트 이미지</h3>
        <input type="text" v-model="state.infoTechTestData.hint_img" placeholder="" />
      </div>
      <br />
      <br />

      <button v-on:click="registBtn">등록하기</button>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');

* {
  font-family: 'Gowun Dodum', sans-serif;
}

.content_center {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  margin-right: auto;
  margin-left: auto;
  max-width: 60rem;

  /* font-size: 1rem;
  font-weight: 400;
  line-height: 1.5; */

  /* color: white; */
}

.mid {
  /* background-color: rgb(247, 247, 247); */
  color: black;
  padding: 15px;

  border-bottom: 0.05rem solid #eee;
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

textarea {
  width: 100%;
}
</style>

<script>
import { reactive, ref, computed, watch, onMounted, defineComponent, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'RegistInfoTechTest',
  props: {
    pRegistType: {
      type: String,
      default: ''
    }
  },
  components: {},
  setup(props) {
    const store = useStore()
    // const { proxy } = getCurrentInstance();
    const route = useRoute()
    // const router = useRouter();

    // const dialog = require('ui/dialogs')

    // data
    let state = reactive({
      testId: route.query.testId,
      testType: '',
      infoTechTestData: {
        testId: 't',
        testType: 'choice', // choice(객관식) / answer(주관식)
        examRound: '', //문제 회차
        subject: '', // 0~5 : 과목 - 데이터베이스 구축, 소프트웨어 개발, 소프트웨어 설계, 정보시스템 구축관리, 프로그래밍 언어 활용
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
      infoTechTipData: {
        testId: 't',
        subject: '', // 0~5 : 과목 - 데이터베이스 구축, 소프트웨어 개발, 소프트웨어 설계, 정보시스템 구축관리, 프로그래밍 언어 활용
        title: '',
        content: '',
        image: '',
        comment: ''
      }

      //   isRegTest: false,
      //   isRegTip: false
    })

    //onMounted
    onMounted(function () {
      console.log('')

      if (state.testType == 't') {
        switch (state.testId) {
          case '0':
            state.infoTechTipData.testId = 't' //technician
            break
          case '1':
            state.infoTechTipData.testId = 'i' //indu_engineer
            break
          case '2':
            state.infoTechTipData.testId = 'e' //engineer
            break
        }
      } else {
        switch (state.testId) {
          case '0':
            state.infoTechTestData.testId = 't' //technician
            break
          case '1':
            state.infoTechTestData.testId = 'i' //indu_engineer
            break
          case '2':
            state.infoTechTestData.testId = 'e' //engineer
            break
        }

        // store.dispatch("registInfoTechTest");
      }
    })

    watch(
      () => props.pRegistType,
      (cur, prev) => {
        console.log('watch :: props.pRegistType')
        state.testType = props.pRegistType

        switch (state.testType) {
          case 'c':
            state.infoTechTestData.testType = 'choice'
            break
          case 'a':
            state.infoTechTestData.testType = 'answer'
            break
        }
      }
    )

    const registBtn = function () {
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

      if (state.testType == 't') {
        store.dispatch('registInfoTechTip', state.infoTechTipData)

        alert('등록 되었습니다.')

        state.infoTechTipData.title = ''
        state.infoTechTipData.content = ''
        state.infoTechTipData.image = ''
        state.infoTechTipData.comment = ''
      } else {
        store.dispatch('registInfoTechTest', state.infoTechTestData)

        alert('등록 되었습니다.')

        state.infoTechTestData.titleQuestion = ''
        state.infoTechTestData.subQuestion = ''
        state.infoTechTestData.image = ''
        state.infoTechTestData.correct = ''
        state.infoTechTestData.comment_text = ''
        state.infoTechTestData.comment_img = ''
        state.infoTechTestData.hint_text = ''
        state.infoTechTestData.hint_img = ''
      }

      // router.go(0);
      // dialog.alert('Hello!')
      // .then(() => {
      //   console.log("Dialog closed")
      // })
    }

    return {
      state,
      registBtn
    }
  }
}
</script>
