import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
// import echarts from 'echarts'

// import 'lib'
const app =createApp(App)
// app.use(echarts)
app.use(createPinia())
app.use(router)
app.mount('#app')
