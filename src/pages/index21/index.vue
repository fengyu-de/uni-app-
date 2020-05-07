<template>
  <view>
    {{msg}}
    <button @click="fn">改变</button>
    <button @click="fun">延迟改变</button>
  </view>
</template>

<script>
import common from "@/common/common.js"; //引入全局变量
export default {
  data() {
    //响一声数据
    return {
      msg: "没变"
    };
  },
  mounted() {
    console.log(common.hiFun()); //common.js中的数据
    this.func(); //vue实例中的数据
    console.log(this.list); //vue实例中的方法
  },
  methods: {
    fn() {
      this.msg = "变了";
    },
    fun() {
      setTimeout(() => {
        this.msg = "又变了";
      }, 2000);
    }
  }
};
// 定义全局变量的方式
// 1.定义一个common文件里面的js文件就是全局变量
// 2.在main.js上面用vue的原型挂载变量
</script>

<style>
</style>
