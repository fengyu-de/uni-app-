<template>
  <view>
    <button @click="fnn">拨打电话</button>
    <button @click="erwm">扫码</button>
    <view class="class">{{text}}</view>
    <input type="text" />
    <button @click="fun2">剪切板</button>
    <button @click="fun3(0)">跳转屏幕亮度++</button>
    <button @click="fun3(1)">跳转屏幕亮度--</button>
    <button @click="fun4">让手机郑东</button>
    <button @click="fun5">手机联系人</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      text: "我是小程序", //剪切文字
      value: 0.1 //控制屏幕亮度
    };
  },
  mounted() {
    this.fn();
    this.fun();
    this.func();
  },
  methods: {
    async fn() {
      let res = await uni.getSystemInfo(); //获取手机的数据
      console.log(res);
    },
    async fun() {
      let res = await uni.getNetworkType(); //获取网络情况
      console.log(res);
    },
    async func() {
      //监听网络变化
      console.log(111);
      uni.onNetworkStatusChange(res => {
        console.log(res.isConnected);
      });
    },
    async fnn() {
      let res = await uni.makePhoneCall({
        //拨打电话
        phoneNumber: "123"
      });
      console.log(res);
    },
    async erwm() {
      let res = await uni.scanCode(); //扫码功能
      console.log(res);
    },
    async fun2() {
      let res = await uni.setClipboardData({
        //赋值功能
        data: this.text
      });
      console.log(res);
    },
    async fun3(e) {
      if (e == 0) {
        //争强亮度
        let res = await uni.setScreenBrightness({
          value: (this.value += 0.1) //屏幕的亮度(0.5到1之间)
        });
        console.log(res);
      } else {
        //降低亮度
        let res = await uni.setScreenBrightness({
          value: (this.value -= 0.1) //屏幕的亮度(0.5到1之间)
        });
        console.log(res);
      }
    },
    fun4() {
      uni.vibrateLong(); //让手机郑东
    },
    async fun5() {
      let res = await uni.addPhoneContact({
        nickName: "fy",
        mobilePhoneNumber: "123"
      });
      console.log(res);
    }
  }
};
</script>

<style>
input {
  border: 1px solid #000;
}
</style>
