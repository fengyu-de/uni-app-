<template>
  <view>
    {{msg}}
    <view>年龄：{{age}}</view>
    <view v-for="(i,index) in arr" :key="index">{{i,}}{{index}}</view>
    <!-- 点击按钮换颜色 -->
    <view class="btn">
      <button
        :class="{color:iscolor==index}"
        v-for="(i,index) in btns"
        :key="index"
        @click="fn(index)"
      >按钮{{i}}</button>
    </view>
    <view :class="{hidden:iscolor!==index}" v-for="(i,index) in views" :key="index">{{i}}</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      msg: "模板语法及数据绑定",
      age: 18,
      arr: [1, 2, 3, 4],
      btns: [1, 2, 3, 4],
      views: ["第1个", "第2个", "第3个", "第4个"],
      iscolor: 0 //默认第一个按钮换颜色
    };
  },
  onLoad() {
    //页面加载就触发(vue的created生命周期函数)
    this.fun();
  },
  methods: {
    fun() {
      setInterval(() => {
        this.age += 2;
      }, 2000);
    },
    fn(i) {
      //点击时改变索引
      this.iscolor = i;
    }
  }
};
</script>

<style lang="scss">
.btn {
  display: flex;
}
button {
  width: 25%;
}
.color {
  background-color: pink;
}
.hidden {
  display: none;
}
</style>
