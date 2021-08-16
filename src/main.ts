import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
// import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'

import 'mapbox-gl/dist/mapbox-gl.css'
import '@/styles/index.scss'
import '@/styles/mapbox.scss'

import SvgIcon from '@/components/SvgIcon.vue'

const app = createApp(App)

app.component('SvgIcon', SvgIcon)

app.use(router).mount('#app')

// console.log(process)
