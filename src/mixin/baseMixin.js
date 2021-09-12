export const baseMixin = {
  data() {
    return {
      title: '这个是公用标题'
    }
  },
  methods: {
    onClick() {
      console.log('我被点击了')
    }
  }
}
