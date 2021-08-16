<template>
<h1>{{name}}</h1>
<h1>{{age}}</h1>
<button @click="sayHello('Hello')">sayHello</button>
<br>
<br>
<button @click="changeName">changeName</button>
</template>

<script lang='ts'>
import { ref } from 'vue'
export default {
  setup() {
    let name = ref('lxq')
    let age = 18

    function sayHello(other:String) {
      alert(other)
    }

    function changeName() {
      name.value = 'lqe'
      console.log(name)
    }

    return {
      name,
      age,
      sayHello,
      changeName
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
