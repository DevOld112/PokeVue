import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/index.css'
import App from './App.vue'

// Vue Router





const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

app.mount('#app')
