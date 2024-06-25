<template>
  <div class="mid">
    <div class="content_center">
      <ul class="serials">
        <li v-for="item in state.itemList" :key="item" @click="movePage()">
          {{ item }}
        </li>
      </ul>
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
import { reactive, onMounted } from 'vue'
// import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  name: 'ExamListComponrnt',
  props: {
    pMovePage: {
      type: Function,
      default: -1,
    },
  },
  components: {},
  setup() {
    // const store = useStore()
    //const { proxy } = getCurrentInstance();
    const route = useRoute()

    // data
    let state = reactive({
      examId: route.query.examId,
      itemList: []
    })

    //onMounted
    onMounted(function () {
      console.log('examId >> ', state.examId)

      for (var i = 0; i < 10; ++i) {
        state.itemList.push('랜덤')
      }
    })

    
    const movePage = function () {
      props.pMovePage(1);
    }

    return {
      state,
      movePage
    }
  }
}
</script>
