import { i18n } from './i18n/index'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './style.css'
import "flowbite"

const app = createApp(App)
i18n.global.locale = localStorage.getItem('site_lang') || 'ru'

app.use(i18n)
app.use(router)
app.mount('#app')