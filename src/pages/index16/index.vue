<template>
  <view>
    <!-- #ifdef H5 -->
    <view>我在app中显示</view>
    <!-- #endif -->
    <!-- #ifdef  MP-WEIXIN -->
    <view>我在小程序端显示</view>
    <!-- #endif -->
  </view>
</template>

<script>
export default {
  mounted() {
    // #ifdef  MP-WEIXIN
    uni.showToast({
      title: "我在微信小程序端显示"
    });
    // #endif
    // #ifdef MP-ALIPAY
    console.log("我在支付宝小程序打印");
    // #endif
  }
};
</script>

<style>
</style>
