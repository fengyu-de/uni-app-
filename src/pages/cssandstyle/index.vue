<template>
  <view>
    <view :class="{red:isred}">{{msg}}</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      msg: "class和style",
      isred: true //控制是否为红色
    };
  },
  created() {
    setInterval(() => {
      this.isred = !this.isred;
    }, 1500);
  }
};
</script>

<style lang="scss">
.red {
  color: red;
}
</style>
