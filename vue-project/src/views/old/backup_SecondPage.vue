<template>
  <div style="display: flex; width: 100%">
    <div style="width: 100%">
      <div style="height: 100%">
        <div class="top">
          <div class="content_center">
            <a class="title">정보처리기사 실기</a>
          </div>
        </div>

        <div class="tab">
          <div class="content_center">
            <nav class="w-100" style="white-space: nowrap">
              <a class="nav-link">문제</a>
              <a class="nav-link">시험</a>
              <a class="nav-link">북마크</a>
              <a class="nav-link">포럼</a>
            </nav>
          </div>
        </div>

        <div class="mid">
          <!-- <h3>페이지 이동</h3> -->
          <div class="content_center">
            <ul class="serials">
              <li>랜덤</li>
              <li>랜덤</li>
              <li>랜덤</li>
              <li>랜덤</li>
              <li>랜덤</li>
              <li>랜덤</li>
              <li>랜덤</li>
              <li>랜덤</li>
              <li>랜덤</li>
              <li>랜덤</li>
              <li>랜덤</li>
              <li>랜덤</li>
              <li>랜덤</li>
              <li>랜덤</li>
              <li>랜덤</li>
              <li>랜덤</li>
              <li>랜덤</li>
              <li>랜덤</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="content_center">
          <div class="footer_1">
            <p style="margin-bottom: 18px">
              모든 문제들의 저작권은 원저작권자에게 있습니다. 본 사이트는 웹상에 공개되어 있는
              문제만 모아서 보여드립니다.
              <br />
              <a href=""><b>저작권 안내</b></a>
              &nbsp;&nbsp;&nbsp;
              <a href=""><b>데이터 보호 안내</b></a>
              &nbsp;&nbsp;&nbsp;
              <a href=""><b>제휴 문의</b></a>
            </p>
            <p>copyright2024 뉴비티::새로운 CBT 시스템 - newbt.kr</p>
          </div>
        </div>
      </div>
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

/* * {
  color: white;
} */

.tab {
  background-color: #428bca;

  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;

  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;

  color: white;
}

.w-100 {
  width: 100% !important;
}

.nav-link {
  padding: 0.8rem 1rem 0.8rem 0;
  color: white;
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

.footer {
  /* position: absolute;
  bottom: 0; */
  position: relative;
  transform: translateY(-100%);

  width: 100%;
}

.footer_1 {
  background-color: #f8f9fa;

  width: 100%;

  margin-top: 1rem !important;
  margin-bottom: 0.25rem !important;

  padding-top: 0.5rem;
  padding-bottom: 2rem;

  text-align: center;
}
</style>

<script>
import { reactive, onMounted } from 'vue'
// import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  name: 'SecondPage',
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
