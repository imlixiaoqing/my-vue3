export const myMixin = {
  created() {
    // console.log('mixin 对象的钩子被调用')
  },
  methods: {
    foo() {
      console.log('foo')
    },
    conflicting() {
      console.log('from mixin')
    }
  }
}