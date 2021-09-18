<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  data() {
    return {
      token: ''
    }
  },
  methods: {
    mySubscriber(msg, data) {
      console.log('lxq')
      console.log( msg, data );
    },

  },
  mounted() {
    this.token = PubSub.subscribe('MY TOPIC', this.mySubscriber);
  },
  beforeUnmount() {
    PubSub.unsubscribe(this.token);
  }
}
</script>

