<template>
  <div class="tab">
    <div class="content_center">
      <nav class="w-100">
        <RouterLink to="/">
          <a class="nav-link">홈</a>
        </RouterLink>

        <a class="nav-link" @click="testBtn()">문제</a>
        <a class="nav-link" @click="tipBtn()">팁</a>
        <a class="nav-link" @click="regTestBtn()">문제 등록</a>
        <a class="nav-link" @click="regTipBtn()">팁 등록</a>
      </nav>
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
  white-space: nowrap;
}

.nav-link {
  padding: 0.8rem 1rem 0.8rem 0;
  color: white;

  /* text-align: center; */
  /* display: flex; */
  /* align-items: center; */
}
</style>

<script>
import { reactive, onMounted } from 'vue'
// import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  name: 'TabComponent',
  props: {
    pTestBtn: {
      type: Function,
      default: -1
    },
    pTipBtn: {
      type: Function,
      default: -1
    },
    pRegTestBtn: {
      type: Function,
      default: -1
    },
    pRegTipBtn: {
      type: Function,
      default: -1
    }
  },
  components: {},
  setup(props) {
    // const store = useStore()
    //const { proxy } = getCurrentInstance();
    const route = useRoute()

    // data
    let state = reactive({
      testId: route.query.testId,
      testType: route.query.testType,
      titleText: '타이틀'
    })

    //onMounted
    onMounted(function () {
      console.log('testId >> ', state.testId)
    })

    const testBtn = function () {
      props.pTestBtn()
    }

    const tipBtn = function () {
      props.pTipBtn()
    }

    const regTestBtn = function () {
      props.pRegTestBtn()
    }

    const regTipBtn = function () {
      props.pRegTipBtn()
    }

    // const testBtn = function () {
    //   props.pMovePage(1)
    // }

    return {
      state,
      testBtn,
      tipBtn,
      regTestBtn,
      regTipBtn
    }
  }
}
</script>
