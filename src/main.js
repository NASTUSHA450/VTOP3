import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vClickOutside from "click-outside-vue3"

const app = createApp(App)
app.use(vClickOutside)
app.mount('#app')
