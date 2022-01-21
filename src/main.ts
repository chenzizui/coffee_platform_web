import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/libs/rem.js"
import "@/assets/style/index.less"
createApp(App).use(store).use(router).mount('#app')
