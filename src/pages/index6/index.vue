<template>
  <view>
    <!-- 导航跳转
      url   指定跳转的路径不能.vue结尾
    -->
    <navigator url="../index5/index">
      <text>跳转到表单组件(标签)</text>
    </navigator>
    <view @click="fn">js方式跳转</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      name: "导航",
      sex: "男"
    };
  },
  methods: {
    fn() {
      // uni.navigateBack({  //返回多少页
      //     delta: 2
      // })
      uni.navigateTo({
        url: `/pages/index5/index?name=${this.name}&sex=${this.sex}`
      });
    }
  }
};
</script>

<style>
</style>
