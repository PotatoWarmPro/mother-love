import Vue from 'vue'
import App from './App.vue'
import 'vue2-animate/dist/vue2-animate.min.css'

try {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
} catch (error) {
  console.error('Vue 实例化失败或挂载失败:', error)
}