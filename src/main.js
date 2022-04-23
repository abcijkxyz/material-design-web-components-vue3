import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import DemoHeader from '@/components/DemoHeader.vue'
// import DemoHeader from './components'
// Vue.use(DemoHeader)
createApp(App).use(store).use(router).mount('#app')
