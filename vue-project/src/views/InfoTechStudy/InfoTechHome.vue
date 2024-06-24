<template>
  <div div style="display: flex; width: 100%">
    <div style="width: 100%">
      <div class="top">
        <h1 style="margin-bottom: 0px">정보처리기사 문제 풀기</h1>
        <h5 style="margin-top: 5px">실기</h5>
      </div>

      <div class="mid">
        <!-- <router-link to="/정보처리기사문제/test_choice"> -->
        <router-link to="/정보처리/page?testId=0&testType=c">
          <button class="btn_main">정보처리기능사 필기 문제 풀기</button>
        </router-link>
        <br />
        <!-- <router-link to="/정보처리기사문제/test_answer"> -->
        <router-link to="/정보처리/page?testId=0&testType=a">
          <button class="btn_main">정보처리기능사 실기 문제 풀기</button>
        </router-link>
        <br /><br />

        <!-- <router-link to="/정보처리기사팁/tip"> -->
        <router-link to="/정보처리/page?testId=0&testType=t">
          <button class="btn_main">정보처리기능사 팁 보기</button>
        </router-link>
        <br />

        <br /><br /><br />
        <!-- <router-link to="/정보처리기사문제/test_choice"> -->
        <router-link to="/정보처리/page?testId=2&testType=c">
          <button class="btn_main">정보처리기사 객관식 문제 풀기</button>
        </router-link>
        <br />
        <!-- <router-link to="/정보처리기사문제/test_answer"> -->
        <router-link to="/정보처리/page?testId=2&testType=a">
          <button class="btn_main">정보처리기사 주관식 문제 풀기</button>
        </router-link>
        <br /><br />

        <!-- <router-link to="/정보처리기사팁/tip"> -->
        <router-link to="/정보처리/page?testId=2&testType=t">
          <button class="btn_main">정보처리기사 팁 보기</button>
        </router-link>
        <br />

        <br /><br /><br /><br /><br /><br />

        <!-- <router-link to="/정보처리기사문제/manage/choice"> -->
        <router-link to="/정보처리문제등록/manage?testId=0&testType=c">
          <button class="btn_main">정보처리기능사 객관식 문제 등록</button>
        </router-link>
        <br />
        <!-- <router-link to="/정보처리기사문제/manage/answer"> -->
        <router-link to="/정보처리문제등록/manage?testId=0&testType=a">
          <button class="btn_main">정보처리기능사 주관식 문제 등록</button>
        </router-link>
        <br /><br />

        <!-- <router-link to="/정보처리기사문제/manage/choice"> -->
        <router-link to="/정보처리문제등록/manage?testId=1&testType=c">
          <button class="btn_main">정보처리기사 객관식 문제 등록</button>
        </router-link>
        <br />
        <!-- <router-link to="/정보처리기사문제/manage/answer"> -->
        <router-link to="/정보처리문제등록/manage?testId=1&testType=a">
          <button class="btn_main">정보처리기사 주관식 문제 등록</button>
        </router-link>
        <br /><br />
        <!-- <router-link to="/정보처리기사팁/manage/tip"> -->
        <router-link to="/정보처리문제등록/manage?testId=0&testType=t">
          <button class="btn_main">정보처리기능사 팁 등록</button>
        </router-link>
        <!-- <router-link to="/정보처리기사팁/manage/tip"> -->
        <router-link to="/정보처리문제등록/manage?testId=1&testType=t">
          <button class="btn_main">정보처리기사 팁 등록</button>
        </router-link>
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
</style>

<script>
import { reactive, ref, computed, watch, onMounted, defineComponent, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  name: 'InfoTechHome',
  props: {},
  components: {},
  setup() {
    const store = useStore()
    //const { proxy } = getCurrentInstance();
    const route = useRoute()

    // data
    let state = reactive({})

    //onMounted
    onMounted(function () {
      console.log('')
    })

    return {
      state
    }
  }
}
</script>
