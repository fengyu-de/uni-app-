<template>
  <view>
    <!-- 进度条 
    percent  进度数
    show-info 右侧显示百分百
    border-radius  进度条圆形
    -->
    <progress percent="100" show-info border-radius="50" active duration="10" stroke-width="20"></progress>

    <progress percent="80" show-info font-size="20" active duration="10" activeColor="#000"></progress>
    <progress percent="50" show-info active duration="10"></progress>

    <view class="head">我搜导航</view>
    <scroll-view class="box" scroll-y @scrolltoupper="fn" @scrolltolower="fun" @scroll="func">
      <view>1</view>
      <view>2</view>
      <view>3</view>
      <view>4</view>
      <view>5</view>
      <view>6</view>
      <view>7</view>
    </scroll-view>
    <view class="box3">
      <view>1</view>
      <view>2</view>
      <view>3</view>
      <view>4</view>
    </view>
    <!-- 轮播图
    indicator-dots  小点
    indicator-color 小点颜色
    indicator-active-color  当前小点颜色
    autoplay        是否自动轮播
    duration        滑动时长
    interval        自动切换间隔
    -->
    <swiper
      autoplay
      indicator-dots
      indicator-color="#fff"
      indicator-active-color="#000"
      duration="1000"
      interval="2000"
    >
      <swiper-item v-for="(i,index) in list " :key="i" :class="{color:index%2==0}">{{i}}</swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6]
    };
  },
  methods: {
    fn() {
      console.log("我滚动到顶部了");
    },
    fun() {
      console.log("我滚动到底部部了");
    },
    func() {
      console.log("我滚动了");
    }
  }
};
</script>

<style lang="scss">
.head {
  width: 100vh;
  text-align: center;
  line-height: 100rpx;
  height: 20vh;
  background-color: yellowgreen;
}
.box {
  width: 100vw;
  height: 80vh;
  background-color: sandybrown;
  margin: 0 auto;
  view {
    width: 50%;
    height: 200rpx;
    background-color: skyblue;
  }
}
.box3 {
  width: 100%;
  height: 200rpx;
  background-color: yellow;
  display: flex;
}
.color {
  background-color: violet;
}
progress {
  margin-top: 10rpx;
}
</style>
