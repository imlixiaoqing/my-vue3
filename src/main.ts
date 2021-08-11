import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'mapbox-gl/dist/mapbox-gl.css'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import '@/styles/index.scss'
import '@/styles/mapbox.scss'

createApp(App).use(router).mount('#app')

// console.log(process)
