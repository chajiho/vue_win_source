<template>
  <div class="wrap">
    <h3>테스트 페이지!</h3>
  </div>
</template>

<style scoped>
.wrap {
  background-color: aqua;
  width: 1000px;
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
