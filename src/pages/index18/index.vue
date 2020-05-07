<template>
  <view>
    <view>登录</view>
    <button @click="fn">检查登录是否过期</button>
  </view>
</template>

<script>
export default {
  async mounted() {
    this.getinfo();
    console.log(getApp().globalData.text); //获取全局变量的text数据
    let res = await getApp().globalData.islogin(); //执行函数返回用户是否登录
    console.log(res);
    if (!res) {
      //如果没有获取到数据就跳转到登录页面
      let res = await uni.showModal({
        title: "提示",
        content: "请登录"
      });
      console.log(res);
      if (res[1].confirm || !res[1].confirm) {
        uni.navigateTo({
          url: "/pages/index18/login/index"
        });
      }
    }
  },
  methods: {
    async getinfo() {
      let res = await uni.login({});
      console.log(res);
    },
    async fn() {
      let res = await uni.checkSession(); //检查登录是否过期
      console.log(res);
    }
  }
};
</script>

<style>
</style>
