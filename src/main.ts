import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import SvgIcon from '@/components/SvgIcon.vue'

const app = createApp(App)

app.component('SvgIcon', SvgIcon)

app.use(router).mount('#app')

// console.log(process)
