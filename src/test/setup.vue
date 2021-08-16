<template>
<h1>{{name}}{{age}}</h1>
<button @click="say('nihao')">say</button>
</template>

<script lang='ts'>
import { h } from 'vue'
export default {
  setup() {
    // let name = 'lxq'
    // let age = 18

    // function say(other:String) {
    //   alert(other)
    // }

    // return {
    //   name,
    //   age,
    //   say
    // }

    return () => h('h1', 'hhh')
    
  }
}
</script>

<style lang='scss' scoped>

</style>
