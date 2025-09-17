import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
import App from './App.vue'
import router from './router'
import i18n from './locales/index.js'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(i18n)
app.mount('#app')
