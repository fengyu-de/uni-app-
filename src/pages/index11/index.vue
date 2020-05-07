<template>
  <view>
    <input type="text" v-model="text" />
    <!-- password   密码 -->
    <input type="text" v-model="pw" password />
    <button @click="fn">登录</button>
    <button @click="fun">获取缓存</button>
    <button @click="func">清楚缓存</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      pw: ""
    };
  },
  methods: {
    async fn() {
      console.log(this.text, this.pw);
      let res = await uni.setStorage({
        //一般用于登录注册
        //存储(相当于window.sessionStorage)
        key: "name", //对象的方式存储
        data: this.text
      });
      console.log(res);
      let res2 = await uni.setStorage({
        //存储(相当于window.sessionStorage)
        key: "ps", //对象的方式存储
        data: this.pw
      });
      console.log(res2);
    },
    async fun() {
      let res = await uni.getStorage({
        //获取缓存中的数据
        key: "name" //通过缓存中的key获取
      });
      let res2 = await uni.getStorage({
        key: "ps"
      });
      console.log(res, res2);
    },
    async func() {
      let res = await uni.removeStorage({
        //移出缓存
        key: "name" //通过缓存中的key来移出
      });
      let res2 = await uni.removeStorage({
        key: "ps"
      });
      console.log(res, res2);
    }
  }
};
</script>

<style>
input {
  border: black 2px solid;
}
</style>
