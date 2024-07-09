<template>
  <div class="mid">
    <div class="content_center">
      <div class="exam_main">
        <!-- 여기가 문제 옵션 -->
        <div style="margin-bottom: 1rem; border-bottom: 0.05rem solid #eee">
          <span style="font-size: 1rem; color: #555">{{ state.showData.examRound + ' ' }} </span>
          <span style="font-size: 0.7rem; color: #bbb">{{ state.showData.subject }}</span>

          <a
            style="
              cursor: pointer;
              float: right !important;
              padding: 0.25rem 0.5rem;
              font-size: 0.875rem;
              line-height: 1.5;
              border-radius: 0.2rem;

              color: #fff;
              background-color: #0a82ff;
              border-color: #17a2b8;

              display: inline-block;
              font-weight: 400;
              text-align: center;
              vertical-align: middle;
              user-select: none;
              border: 1px solid transparent;
            "
            alt="현재 회차 첫 문제"
            title="현재 회차 첫 문제"
            v-on:click="refreshData"
          >
            새로고침
          </a>
          <span style="font-size: 1rem; color: #a2a2a2; float: right !important"
            >문제 추가 후 안나온다면 -></span
          >
        </div>

        <div>
          <!-- 여기가 문제 구역 -->
          <h5
            style="
              padding-left: 15px;
              font-size: 1.25rem;
              color: #333;
              line-height: 140%;
              margin-bottom: 0.5rem;
            "
          >
            <span style="color: cornflowerblue; font-weight: bold; font-size: 1.5rem"
              >{{ state.testIndex + 1 }}.
            </span>
            <span v-html="showTitleQuestion"></span>
          </h5>

          <!-- 여기가 문제 이미지 -->
          <img
            :src="`${state.showData.image}`"
            alt=""
            style="padding: 10px 18px; max-width: 100%"
          />

          <!-- 여기가 문제의 보기 -->
          <pre
            style="
              margin: 1rem;
              padding: 5px;
              background-color: #fbfbfb;
              box-sizing: border-box;
              box-shadow: #aaa 1px 1px 2px;
              font-family: 'Nanum Gothic';
              white-space: pre-wrap;

              display: block;
              font-size: 87.5%;
              color: #212529;
              overflow: auto;
            "
          >
          <div v-html="showSubQuestion"></div>
          </pre>

          <!-- 여기가 자기 답 적기 -->
          <div style="padding: 1rem">
            <textarea
              style="
                height: auto;
                display: block;
                width: 100%;
                padding: 0.375rem 0.75rem;
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                color: #495057;
                background-clip: padding-box;
                border: 1px solid #ced4da;
                border-radius: 0.25rem;
                transition:
                  border-color 0.15s,
                  ease-in-out,
                  box-shadow 0.15s ease-in-out;

                overflow: auto;
                resize: vertical;
              "
              name=""
              id=""
              placeholder="먼저, 스스로 답안을 작성해보세요. 정답은 아래에 있습니다."
              v-model="state.selfCorrectText"
            ></textarea>
          </div>

          <hr
            style="
              margin-top: 1rem;
              margin-bottom: 1rem;
              border: 0;
              border-top: 1px solid rgba(0, 0, 0, 1);
            "
          />
        </div>

        <!-- 여기가 문제 답 -->
        <div
          style="
            margin: 1rem;
            background-color: #fbfbfb;
            box-sizing: border-box;
            box-shadow: #aaa 1px 1px 2px;
            position: relative;

            padding: 0.25rem !important;
          "
        >
          <div
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 999;
              background-color: #428bca;
              cursor: pointer;
              text-align: center;
              color: #fff;
            "
            v-show="!state.isShowCorrect"
            v-on:click="state.isShowCorrect = true"
          >
            클릭하면 정답이 보입니다.
          </div>
          <div style="padding: 0.25rem !important" v-html="showCorrect"></div>
        </div>
      </div>

      <!-- 여기가 해설 -->
      <div
        style="
          position: relative;
          box-sizing: border-box;
          padding-right: 1.5rem !important;
          padding: 0.5rem !important;

          color: #0c5460;
          background-color: #d1ecf1;
          border-color: #bee5eb;

          margin-bottom: 1rem;
          border: 1px solid transparent;
          border-radius: 0.25rem;
        "
      >
        <button
          style="
            margin-right: 0.5rem !important;
            color: #fff;
            background-color: #6c757d;

            display: inline-block;
            padding: 0.25em 0.4em;
            font-size: 75%;
            font-weight: 700;
            line-height: 1;
            text-align: center;
            white-space: nowrap;
            vertical-align: baseline;
            border-radius: 0.25rem;
            transition:
              color 0.15s ease-in-out,
              background-color 0.15s ease-in-out,
              border-color 0.15s ease-in-out,
              box-shadow 0.15s ease-in-out;
          "
          v-on:click="state.isShowComment = true"
        >
          해설 보기
        </button>
        <div v-show="state.isShowComment">
          <span
            style="
              color: #6c757d !important;
              font-size: 1rem;
              font-weight: 400;
              line-height: 1.5;
              text-align: left;
            "
            v-html="showComment_text"
          ></span>

          <img
            :src="`${state.showData.comment_img}`"
            alt=""
            style="padding: 10px 18px; max-width: 100%"
          />
        </div>
      </div>

      <!-- 여기가 힌트 -->
      <div
        style="
          position: relative;
          box-sizing: border-box;
          padding-right: 1.5rem !important;
          padding: 0.5rem !important;

          color: #0c5460;
          background-color: #ced4da;
          border-color: #bee5eb;

          margin-bottom: 1rem;
          border: 1px solid transparent;
          border-radius: 0.25rem;
        "
      >
        <button
          style="
            margin-right: 0.5rem !important;
            color: #000;
            background-color: #e2e2e2;

            display: inline-block;
            padding: 0.25em 0.4em;
            font-size: 75%;
            font-weight: 700;
            line-height: 1;
            text-align: center;
            white-space: nowrap;
            vertical-align: baseline;
            border-radius: 0.25rem;
            transition:
              color 0.15s ease-in-out,
              background-color 0.15s ease-in-out,
              border-color 0.15s ease-in-out,
              box-shadow 0.15s ease-in-out;
          "
          v-on:click="state.isShowHint = true"
        >
          힌트 보기
        </button>
        <div v-show="state.isShowHint">
          <span
            style="
              color: #6c757d !important;
              font-size: 1rem;
              font-weight: 400;
              line-height: 1.5;
              text-align: left;
            "
            v-html="showHint_text"
          ></span>
          <img
            :src="`${state.showData.hint_img}`"
            alt=""
            style="padding: 10px 18px; max-width: 100%"
          />
        </div>
      </div>

      <!-- 여기가 버튼 -->
      <div style="margin-bottom: 1.5rem !important">
        <a
          style="
            cursor: pointer;
            padding: 0.25rem 0.5rem;
            font-size: 0.875rem;
            line-height: 1.5;
            border-radius: 0.2rem;

            color: #fff;
            background-color: #17a2b8;
            border-color: #17a2b8;

            display: inline-block;
            font-weight: 400;
            text-align: center;
            vertical-align: middle;
            user-select: none;
            border: 1px solid transparent;
          "
          alt="현재 회차 첫 문제"
          title="현재 회차 첫 문제"
          v-on:click="prevTest"
        >
          이전 문제
        </a>

        <!-- <a
          style="
            cursor: pointer;
            padding: 0.25rem 0.5rem;
            font-size: 0.875rem;
            line-height: 1.5;
            border-radius: 0.2rem;

            color: #fff;
            background-color: #6c757d;
            border-color: #6c757d;

            display: inline-block;
            font-weight: 400;
            text-align: center;
            vertical-align: middle;
            user-select: none;
            border: 1px solid transparent;
          "
          alt="현재 회차 첫 문제"
          title="현재 회차 첫 문제"
          onclick=""
        >
          정답보기
        </a> -->

        <!-- <a
          style="
            cursor: pointer;
            padding: 0.25rem 0.5rem;
            font-size: 0.875rem;
            line-height: 1.5;
            border-radius: 0.2rem;

            color: #fff;
            background-color: #007bff;
            border-color: #007bff;

            display: inline-block;
            font-weight: 400;
            text-align: center;
            vertical-align: middle;
            user-select: none;
            border: 1px solid transparent;
          "
          alt="현재 회차 첫 문제"
          title="현재 회차 첫 문제"
          onclick=""
        >
          질문하기
        </a> -->

        <a
          style="
            cursor: pointer;
            float: right !important;
            padding: 0.25rem 0.5rem;
            font-size: 0.875rem;
            line-height: 1.5;
            border-radius: 0.2rem;

            color: #fff;
            background-color: #17a2b8;
            border-color: #17a2b8;

            display: inline-block;
            font-weight: 400;
            text-align: center;
            vertical-align: middle;
            user-select: none;
            border: 1px solid transparent;
          "
          alt="현재 회차 첫 문제"
          title="현재 회차 첫 문제"
          v-on:click="nextTest"
        >
          다음 문제
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  color: black;
  padding: 15px;

  border-bottom: 0.05rem solid #eee;
}

ul.serials li {
  display: list-item;
  text-align: -webkit-match-parent;
  unicode-bidi: isolate;
  padding: 10px 15px;
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 1px 1px 1px #f5f5f5;
  margin-bottom: 10px;
  color: initial;
}

ul.serials {
  padding-left: 0px;
  list-style: none;
  width: 100%;
  padding-bottom: 30px;
}
</style>

<script>
import { reactive, computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  name: 'ExamTestComponent',
  props: {
    pDataList: [],
    pMovePage: {
      type: Function,
      default: -1
    },
    pRefreshData: {
      type: Function,
      default: -1
    }
  },
  components: {},
  setup(props) {
    const store = useStore()
    //const { proxy } = getCurrentInstance();
    const route = useRoute()

    const showTitleQuestion = computed(() => state.showData.titleQuestion.replace('\n', '<br />'))
    const showSubQuestion = computed(() => state.showData.subQuestion.replace('\n', '<br />'))
    const showChoiceGroup = computed(() => state.showData.choiceGroup.replace('\n', '<br />'))
    const showCorrect = computed(() => state.showData.correct.replace('\n', '<br />'))
    const showComment_text = computed(() => state.showData.comment_text.replace('\n', '<br />'))
    const showHint_text = computed(() => state.showData.hint_text.replace('\n', '<br />'))

    // data
    let state = reactive({
      testId: route.query.testId,
      testType: route.query.testType,
      itemList: [],
      isShowAnswerCover: true,
      testIndex: 0,

      dataList: [],
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

      isShowCorrect: false,
      isShowComment: false,
      isShowHint: false,

      selfCorrectText: ''
    })

    //onMounted
    onMounted(function () {
      // console.log('examId >> ', state.examId)
      // for (var i = 0; i < 10; ++i) {
      //   state.itemList.push('랜덤')
      // }
    })

    watch(
      () => props.pDataList,
      (cur, prev) => {
        state.dataList = props.pDataList
        initTestData()
      }
    )

    const hideAnswerCover = function () {
      state.isShowAnswerCover = false
    }

    const initTestData = function () {
      if (props.pDataList.length > 0) {
        state.showData.testType = props.pDataList[state.testIndex].testType
        state.showData.examRound = props.pDataList[state.testIndex].examRound
        state.showData.subject = props.pDataList[state.testIndex].subject
        state.showData.titleQuestion = props.pDataList[state.testIndex].titleQuestion
        state.showData.subQuestion = props.pDataList[state.testIndex].subQuestion
        state.showData.image = props.pDataList[state.testIndex].image
        state.showData.choiceGroup = props.pDataList[state.testIndex].choiceGroup
        state.showData.correct = props.pDataList[state.testIndex].correct
        state.showData.comment_text = props.pDataList[state.testIndex].comment_text
        state.showData.comment_img = props.pDataList[state.testIndex].comment_img
        state.showData.hint_text = props.pDataList[state.testIndex].hint_text
        state.showData.hint_img = props.pDataList[state.testIndex].hint_img
        state.showData.isSet = true
      }
    }

    const nextTest = function () {
      if (state.testIndex < props.pDataList.length - 1) {
        ++state.testIndex
        ;(state.isShowCorrect = false), (state.isShowComment = false), (state.isShowHint = false)
        state.selfCorrectText = ''

        initTestData()
      } else {
        alert('끝이예요~')
      }
    }

    const prevTest = function () {
      if (state.testIndex > 0) {
        --state.testIndex
        ;(state.isShowCorrect = false), (state.isShowComment = false), (state.isShowHint = false)
        state.selfCorrectText = ''

        initTestData()
      } else {
        alert('처음이예요~')
      }
    }

    const refreshData = function () {
      props.pRefreshData(state.testType)
      alert('새로고침~')
    }

    return {
      state,
      hideAnswerCover,
      prevTest,
      nextTest,
      refreshData,

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
