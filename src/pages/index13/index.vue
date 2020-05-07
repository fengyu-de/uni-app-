<template>
  <view>
    <button @click="fn">设置导航</button>
    <button @click="fun">获取位置</button>
    <button @click="func">打开位置</button>
    <view>
      <map :latitude="latitude" :longitude="longitude"></map>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      latitude: "", //维度
      longitude: "" //精度
    };
  },
  mounted() {
    uni.showNavigationBarLoading(); //显示加载效果
    setTimeout(() => {
      uni.hideNavigationBarLoading(); //3秒后隐藏
    }, 3000);
    // this.fun();
  },
  methods: {
    fn() {
      uni.setNavigationBarTitle({
        title: "我是通过js方式设置的导航"
      });
    },
    async fun() {
      let res = await uni.getLocation({
        type: "wgs84"
      }); //获取地理位置
      console.log(res);
      this.latitude = res[1].latitude; //赋值
      this.longitude = res[1].longitude;
    },
    async func() {
      let res = await uni.chooseLocation();
      console.log(res);
    }
  }
};
</script>

<style>
view map {
  width: 100vw;
  height: 50vh;
}
</style>
