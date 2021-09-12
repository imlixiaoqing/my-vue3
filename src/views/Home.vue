<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SvgIcon iconClass="icon-ditulei-ditumarker-juhedian"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { myMixin } from '@/mixin/mixin'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  mixins: [myMixin],
  components: {
    HelloWorld
  },
  created() {
    console.log('组件钩子被调用')
  }
}
</script>
