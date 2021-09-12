import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { baseMixin } from '@/mixin/baseMixin'

import SvgIcon from '@/components/SvgIcon.vue'

const app = createApp(App)

app.component('SvgIcon', SvgIcon)
app.use(router)
// app.mixin(baseMixin)
app.mount('#app')

// console.log(process)
