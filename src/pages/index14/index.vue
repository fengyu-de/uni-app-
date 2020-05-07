<template>
  <view>
    <!-- 需要在pages.json中设置 -->
    <view v-for="(i,index) in list" :key="index">{{i}}</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      page: 1
    };
  },
  mounted() {
    this.getlist();
  },
  methods: {
    async getlist() {
      let res = await uni.request({
        url: `https://demo.hcoder.net/index.php?user=hcoder&pwd=hcoder&m=list1&page=${this.page}`
      });
      console.log(res[1].data);
      if (res[1].data == null) {
        uni.showToast({
          title: "没有数据"
        });
        return;
      }
      let res2 = res[1].data.split("--hcSplitor--");
      console.log(res2);
      this.list = [...res2, ...this.list];
    },
    onPullDownRefresh() {
      //监听下拉刷新的函数
      uni.showNavigationBarLoading(); //显示页面加载效果
      console.log("下拉刷新了");
      this.page += 1;
      console.log(this.page);
      this.getlist();
      uni.stopPullDownRefresh(); //数据请求到接收下拉加载效果
      uni.hideNavigationBarLoading(); //隐藏页面加载效果
    }
  }
};
</script>

<style>
</style>
