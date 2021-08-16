<template>
<h1>{{name}}</h1>
<h1>{{age}}</h1>
<h1>{{obj.a}}</h1>
<h1>{{obj2.c}}</h1>
<button @click="sayHello('Hello')">sayHello</button>
<br>
<br>
<button @click="changeValue">changeValue</button>
</template>

<script lang='ts'>
import { ref, reactive } from 'vue'
export default {
  setup() {
    let name = ref('lxq')
    let age = 18
    let obj = ref({
      a: 'a',
      b: 'b'
    })
    const obj2 = reactive({
      c: 'c',
      d: 'd'
    })

    function sayHello(other:String) {
      alert(other)
    }

    function changeValue() {
      name.value = 'lqe'

      obj.value.a = 'aa'

      obj2.c = 'cc'
    }

    return {
      name,
      age,
      obj,
      obj2,
      sayHello,
      changeValue
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
