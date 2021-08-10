import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/styles/index.scss'
import '@/styles/mapbox.scss'

createApp(App).use(router).mount('#app')

// console.log(process)
