import Vue from 'vue'
import App from './App'
Vue.prototype.list = [{
  name: "vue"
}, {
  sex: "男"
}] //在原型上面挂载全局对象(其他组件通过this来访问原型上的数据)
Vue.prototype.func = function () {
  console.log("我是vue原型上的方法")
}
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
