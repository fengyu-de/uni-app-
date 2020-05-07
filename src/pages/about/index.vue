<template>
  <view class="box">
    <view class="scss">关于页</view>
  </view>
</template>

<script>
export default {
  onLoad() {
    //用于传递参数(上个页面传递参数)
    console.log("onload");
  },
  onShow() {
    //页面显示触发
    console.log("onShow");
  },
  onHide() {
    //页面隐藏触发
    console.log("onHide");
  },
  onPullDownRefresh() {
    //下拉触发
    console.log("onPullDownRefresh");
  },
  onReachBottom() {
    console.log("页面下拉触底触发");
  },
  onShareAppMessage() {
    //用户点击右上角分享触发
    console.log("onShareAppMessage");
  },
  onPageScroll() {
    //监听页面滚动触发
    console.log("onPageScroll");
  }
};
</script>

<style lang="scss">
.box {
  text-align: center;
  background-color: chocolate;
  width: 100vw;
  height: 150vh;
  margin: 0 auto;
  .scss {
    color: aquamarine;
  }
}
</style>
