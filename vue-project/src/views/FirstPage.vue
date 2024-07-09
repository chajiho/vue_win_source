<template>
  <div style="width: 100%; display: flex; align-items: center">
    <div class="title">
      <p class="text-info">이곳은 다같이 국가기술자격시험을 통과하고자 만든 웹페이지 입니다~</p>
      <h3>
        <b class="title_text">
          자격증(시험)을 선택하면
          <br />
          시작됩니다!
        </b>
      </h3>
      <br />
      <img src="https://newbt.kr/img/scroll_down.gif" style="width: 40px; margin-top: -70px" />
      <br />
      <br />
      <br />
      <div class="mid_box">
        <h4 class="sub_title">자격증 선택</h4>
        <div class="btn">
          <RouterLink to="/main?testId=0&testType=c" style="color: blue"
            >정보처리기능사 필기</RouterLink
          >
          <br />
          <RouterLink to="/main?testId=0&testType=a" style="color: blue"
            >정보처리기능사 실기</RouterLink
          >
          <br />
          <br />
          <!-- RouterLink to="/main?testId=1&testType=c" -->
          <RouterLink to="/" style="color: black">정보처리산업기사 필기</RouterLink>
          <br />
          <!-- RouterLink to="/main?testId=1&testType=a" -->
          <RouterLink to="/" style="color: black">정보처리산업기사 실기</RouterLink>
          <br />
          <br />
          <RouterLink to="/main?testId=2&testType=c" style="color: blue"
            >정보처리기사 필기</RouterLink
          >
          <br />
          <RouterLink to="/main?testId=2&testType=a" style="color: blue"
            >정보처리기사 실기</RouterLink
          >
          <br />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-info {
  color: #17a2b8 !important;
  margin-bottom: 1rem;
}

.title {
  text-align: center;
  padding: 30px;
  margin: 0px auto;
  margin-bottom: 15rem;

  border: 1px solid #2c2c2c;
}

.title_text {
  font-weight: bolder;
  font-size: 1.75rem;
}

.sub_title {
  font-size: 1.5rem;
  font-weight: bolder;
  margin: 24px 0px 16px;
}

.mid_box {
  text-align: left;
}

* {
  font-family: 'Noto Sans KR', sans-serif;
  box-sizing: border-box;
}

.btn {
  position: relative;
  width: 100%;
}
</style>

<script>
import { reactive, onMounted } from 'vue'
// import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  name: 'FirstPage',
  props: {},
  components: {},
  setup() {
    // const store = useStore()
    //const { proxy } = getCurrentInstance();
    // const route = useRoute()

    // data
    let state = reactive({})

    //onMounted
    onMounted(function () {})

    return {
      state
    }
  }
}
</script>
