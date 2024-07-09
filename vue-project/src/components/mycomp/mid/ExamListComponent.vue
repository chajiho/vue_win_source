<template>
  <div class="mid">
    <div class="content_center">
      <ul class="serials">
        <li v-for="(item, index) in state.itemList" :key="index">
          <div v-on:click="onClickItem(index)">{{ item }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<!-- @click="movePage()" -->

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
      examId: route.query.examId,
      itemList: []
    })

    //onMounted
    onMounted(function () {
      console.log('examId >> ', state.examId)

      // for (var i = 0; i < 10; ++i) {
      //   state.itemList.push('랜덤')
      // }

      state.itemList.push('탭에서 버튼을 선택해 주세요.')

      state.itemList.push('[클릭하면 이동] 노션 요약1 (데이터베이스 설계)')
      state.itemList.push('[클릭하면 이동] 노션 요약2 (응용 SW 기초 기술 활용)')
      state.itemList.push('[클릭하면 이동] 노션 요약3 (SQL 문법)')
    })

    const movePage = function () {
      props.pMovePage(1)
    }

    const onClickItem = function (itemIdx) {
      if (itemIdx == 1) {
        window.location.href =
          'https://piquant-knife-bd1.notion.site/78116328e0714fe79bc933440e67f88b?pvs=4'
      } else if (itemIdx == 2) {
        window.location.href =
          'https://piquant-knife-bd1.notion.site/SW-7f51cf2855c0441c9d1e440c4a76bb95?pvs=4'
      } else if (itemIdx == 3) {
        window.location.href =
          'https://piquant-knife-bd1.notion.site/SQL-c44786ac916a4880883a00104b349087?pvs=4'
      }
    }

    return {
      state,
      movePage,
      onClickItem
    }
  }
}
</script>
