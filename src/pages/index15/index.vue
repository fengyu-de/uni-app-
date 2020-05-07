<template>
  <view class="box">
    <view class="view" v-for="i in list" :key="i">{{i}}</view>
    <view class="flag" v-if="flag">我是有底线的</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      page: 1, //页码
      list: [], //存储新闻的数据
      flag: false //控制元素的显示隐藏
    };
  },
  mounted() {
    this.getlist();
  },
  methods: {
    async getlist() {
      uni.showNavigationBarLoading(); //标题更新效果
      uni.showLoading({
        title: "加载中..."
      });
      let res = await uni.request({
        url: `https://demo.hcoder.net/index.php?user=hcoder&pwd=hcoder&m=list1&page=${this.page}`
      });
      uni.showToast({
        title: "加载完成"
      });
      console.log(res[1].data);
      uni.hideNavigationBarLoading();
      if (res[1].data == null) {
        this.flag = true; //显示有底线
        uni.showToast({
          title: "没有数据了"
        });
        return;
      }
      let res2 = res[1].data.split("--hcSplitor--");
      this.list = [...this.list, ...res2];
    }
  },
  onReachBottom() {
    //监听滚动到底部的函数
    this.page += 1;
    console.log("滚动到底部了");
    this.getlist();
  }
};
</script>

<style>
.box {
  height: 200vh;
}
.box .view {
  margin-bottom: 50rpx;
  border: black solid 1.5px;
  padding: 60rpx;
}
.flag {
  text-align: center;
  padding: 30rpx;
  color: #000;
  font-size: 50rpx;
}
</style>
