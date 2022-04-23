// 引入组件
import DemoHeader from '@/components/DemoHeader.vue'
//导出
export default {
  // install 是默认的方法
  // 该方法会Vue全局注册这个组件
  install(Vue) {
    Vue.component('demo-header', DemoHeader)
    //注意---这里可以同时引入注册多个组件
  },
}
