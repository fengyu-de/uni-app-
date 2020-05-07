<template>
  <view>
    <view id="box"></view>
  </view>
</template>

<script>
export default {
  mounted() {
    this.getdom(); //获取元素
    this.getinfo(); //获取设备的信息
  },
  methods: {
    async getdom() {
      let res = uni //获取页面上id为box的元素
        .createSelectorQuery()
        .select("#box")
        .fields(
          {
            size: true, //节点的大小
            id: true, //节点id
            rect: true, //节点的坐标
            scrollOffset: true //节点scrollLeft scrollTop
          },
          function(res) {
            console.log(res);
          }
        )
        .exec();
      console.log(res);
    },
    async getinfo() {
      let res = await uni.getSystemInfo();
      console.log(res);
    }
  }
};
</script>

<style>
#box {
  background: blue;
  width: 25%;
  height: 300rpx;
  margin: 0 auto;
}
</style>
