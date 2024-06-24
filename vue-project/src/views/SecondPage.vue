<template>
  <div style="display: flex; width: 100%">
    <div style="width: 100%">
      <div style="height: 100%">
        <div class="top">
          <TopComponent></TopComponent>
        </div>

        <div class="tab">
          <TabComponent></TabComponent>
        </div>

        <div class="mid">
          <!-- <ExamListComponent></ExamListComponent> -->
          <ExamMainComponent></ExamMainComponent>
        </div>
      </div>

      <div class="footer">
        <FooterComponent></FooterComponent>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script>
import TopComponent from '@/components/mycomp/frame/TopComponent.vue'
import TabComponent from '@/components/mycomp/frame/TabComponent.vue'
import FooterComponent from '@/components/mycomp/frame/FooterComponent.vue'

import ExamListComponent from '@/components/mycomp/mid/ExamListComponent.vue'
import ExamMainComponent from '@/components/mycomp/mid/ExamMainComponent.vue'

import { reactive, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  name: 'SecondPage',
  props: {},
  components: {
    TopComponent,
    TabComponent,
    FooterComponent,
    ExamListComponent,
    ExamMainComponent
  },
  setup() {
    const store = useStore()
    //const { proxy } = getCurrentInstance();
    const route = useRoute()

    // data
    let state = reactive({
      examId: route.query.examId
    })

    //onMounted
    onMounted(function () {
      // console.log('examId >> ', state.examId)

      store
    })

    return {
      state
    }
  }
}
</script>
