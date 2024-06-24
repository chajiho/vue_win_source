<template>
  <div class="wrap">
    <div class="first-title">
      <h1>첫 페이지</h1>
      <h5>Hellow World</h5>
    </div>
    <br />
    <div>
      <h3>페이지 이동</h3>
      <!-- <router-link to="/정보처리기사문제/test">
          <button class="btn_main">정보처리기사 문제 풀러 가기</button>
        </router-link> -->
      <router-link to="/정보처리기사문제">
        <button class="btn_main">정보처리기사 문제 풀러 가기</button>
      </router-link>
      <br />
      <router-link to="/국가자격증시험">
        <button class="btn_main">신규 페이지 가기 NEW!</button>
      </router-link>
      <br />

      <!-- <router-link to="/home">
        <button class="btn0">Vue 홈</button>
      </router-link>
      <br />
      <router-link to="/test">
        <button class="btn0">Vue 테스트 페이지</button>
      </router-link>
      <br />
      <br />
      <router-link to="/sample">
        <button class="btn0">샘플 페이지</button>
      </router-link> -->
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbit&display=swap');
* {
  font-family: 'Orbit', sans-serif;
}

.wrap {
  width: 300px;
  margin: 20px auto 0px auto;
}

.first-title {
  background-color: green;

  width: 300px;
  height: 200px;

  border-radius: 10px;
  color: white;

  text-align: center;

  padding: 50px 0px 0px 0px;

  /* background-image: url('@/assets/matrix-356024_1280.jpg'); */
  background-position: center;
  background-size: cover;
}

.btn0 {
  font-size: 12px;
  color: white;
  background-color: green;
}
</style>

<script>
import { reactive, ref, computed, watch, onMounted, defineComponent, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  name: 'ZeroPage',
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
      console.log('ZeroPage')
    })

    return {
      state
    }
  }
}
</script>
