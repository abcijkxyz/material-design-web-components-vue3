import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'

import '@/assets/fonts/Roboto.css'
import '@/assets/fonts/Material-Icons.css'

// createApp(App).use(Antd).use(router).mount('#app')
const app = createApp(App)
app.use(router)
app.use(Antd).mount('#app')