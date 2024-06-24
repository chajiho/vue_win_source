<template>
  <div class="top">
    <div class="content_center">
      <a class="title">{{ state.titleText }}</a>
    </div>
  </div>
</template>

<style scoped>
.top {
  background-color: #6495ed;

  padding-top: 0.5rem !important;
  padding-bottom: 1rem !important;
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

.title {
  text-decoration: none;
  font-size: 1.3rem;
  white-space: nowrap;
  font-weight: 400;
  line-height: 1.5;
  color: white;
}
</style>

<script>
import { reactive, onMounted } from 'vue'
// import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  name: 'TopComponent',
  props: {},
  components: {},
  setup() {
    // const store = useStore()
    //const { proxy } = getCurrentInstance();
    const route = useRoute()

    // data
    let state = reactive({
      examId: route.query.examId,
      titleText: '타이틀'
    })

    //onMounted
    onMounted(function () {
      console.log('examId >> ', state.examId)

      switch (state.examId) {
        case '1':
          state.titleText = '정보처리기능사 필기'
          break
        case '2':
          state.titleText = '정보처리기능사 실기'
          break
        case '3':
          state.titleText = '정보처리산업기사 필기'
          break
        case '4':
          state.titleText = '정보처리산업기사 실기'
          break
        case '5':
          state.titleText = '정보처리기사 필기'
          break
        case '6':
          state.titleText = '정보처리기사 실기'
          break

        default:
          break
      }
    })

    return {
      state
    }
  }
}
</script>
