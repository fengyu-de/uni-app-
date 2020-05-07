<template>
  <view>
    <!-- 想要用元素中的自定义属性就要用data-xxx的方式 -->
    <view class="box" @click="fn" @longtap="fun" :data-msg="msg"></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      msg: "事件"
    };
  },
  methods: {
    fn(e) {
      console.log("我被出发了", e.currentTarget.dataset.msg); //获取元素的自定义属性
    },
    fun() {
      console.log("我被长按了");
    }
  }
};
</script>

<style lang="scss">
.box {
  background-color: royalblue;
  width: 50vw;
  height: 50vh;
  margin: 0 auto;
}
</style>
