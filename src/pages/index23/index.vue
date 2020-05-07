<template>
  <view>
    <!-- 将自己的值传给子组件 -->
    <input11 :title="title" @fun="fn"></input11>
    <input11 :title="title2" @fun="fn"></input11>
    <br />
    <br />
    <br />
    <br />
    父组件：{{msg}}
  </view>
</template>

<script>
import input11 from "@/components/myinput";
export default {
  data() {
    return {
      title: "请输入密码",
      title2: "请输入用户名",
      msg: ""
    };
  },
  components: {
    input11
  },
  methods: {
    fn(e) {
      //子组件触发父组件的函数传参,父组件接收数据
      this.msg = e;
    }
  }
};
</script>

<style>
</style>
