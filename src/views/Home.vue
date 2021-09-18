<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SvgIcon iconClass="icon-ditulei-ditumarker-juhedian"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="myPublish">发布消息</button>
    <About/>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
// @ is an alias to /src
import { myMixin } from '@/mixin/mixin'
import HelloWorld from '@/components/HelloWorld.vue'
import About from './About'

export default {
  name: 'Home',
  mixins: [myMixin],
  components: {
    HelloWorld,
    About
  },
  methods: {
    myPublish() {
      PubSub.publish('MY TOPIC', 'hello world!');
    }
  },
  created() {
    // console.log('组件钩子被调用')
  },
}
</script>
