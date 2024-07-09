<template>
  <div class="mid">
    <div class="content_center">
      <div class="exam_main">
        <!-- 여기가 문제 옵션 -->
        <div style="margin-bottom: 1rem; border-bottom: 0.05rem solid #eee">
          <span style="font-size: 1rem; color: #555">{{ state.showData.subject }} </span>
          <span style="font-size: 0.7rem; color: #bbb">팁</span>

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
            >팁 추가 후 안나온다면 -></span
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
            <span v-html="showTitle"></span>
          </h5>

          <!-- 여기가 문제 이미지 -->
          <!-- src="data:image/png;base64,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" -->
          <img
            class="image"
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
          <div v-html="showContent"></div>
          </pre>

          <!-- 여기가 자기 답 적기 -->
          <div style="padding: 1rem" v-html="showComment"></div>

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
        <!-- <div
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
            v-show="state.isShowAnswerCover"
            v-on:click="hideAnswerCover"
          >
            클릭하면 정답이 보입니다.
          </div>
          <div style="padding: 0.25rem !important">정답</div>
        </div>
      </div> -->

        <!-- 여기가 해설 -->
        <!-- <div
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
        <span
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
          >위키 해설</span
        >
        <span
          style="
            color: #6c757d !important;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            text-align: left;
          "
          >위키해설을 등록해주세요!</span
        > -->
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
          이전
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
          다음
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
import { reactive, computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  name: 'ExamTipComponent',
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

    const showTitle = computed(() => state.showData.title.replace('\n', '<br />'))
    const showContent = computed(() => state.showData.content.replace('\n', '<br />'))
    const showComment = computed(() => state.showData.comment.replace('\n', '<br />'))

    // data
    let state = reactive({
      testId: route.query.testId,
      testType: route.query.testType,
      itemList: [],
      isShowAnswerCover: true,
      dataList: [],
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
      console.log('examId >> ', state.examId)

      // for (var i = 0; i < 10; ++i) {
      //   state.itemList.push('랜덤')
      // }

      // showData
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
        state.showData.subject = props.pDataList[state.testIndex].subject
        state.showData.title = props.pDataList[state.testIndex].title
        state.showData.content = props.pDataList[state.testIndex].content
        state.showData.image = props.pDataList[state.testIndex].image
        state.showData.comment = props.pDataList[state.testIndex].comment
        state.showData.isSet = true
      }
    }

    const nextTest = function () {
      if (state.testIndex < props.pDataList.length - 1) {
        ++state.testIndex
        ;(state.isShowCorrect = false), (state.isShowComment = false), (state.isShowHint = false)

        initTestData()
      }
    }

    const prevTest = function () {
      if (state.testIndex > 0) {
        --state.testIndex
        ;(state.isShowCorrect = false), (state.isShowComment = false), (state.isShowHint = false)

        initTestData()
      } else {
        alert('처음이예요~')
      }
    }

    const refreshData = function () {
      props.pRefreshData(state.testType)
    }

    return {
      state,
      hideAnswerCover,
      initTestData,
      prevTest,
      nextTest,
      refreshData,

      showTitle,
      showContent,
      showComment
    }
  }
}
</script>
