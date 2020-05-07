<template>
  <view>
    <!-- open-type="share" 才能出发分享onShareAppMessage-->
    <button open-type="share">分享</button>
    <button @click="fn">分享</button>
  </view>
</template>

<script>
export default {
  mounted() {
    // this.onShareAppMessage();
  },
  methods: {
    fn() {
      uni.share({
        provider: "weixin",
        scene: "WXSceneSession",
        type: 1,
        summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
        success: function(res) {
          console.log("success:" + JSON.stringify(res));
        },
        fail: function(err) {
          console.log("fail:" + JSON.stringify(err));
        }
      });
    }
  },
  onShareAppMessage() {
    return {
      title: "冯宇的分享",
      path: "/pages/index18/index",
      imageUrl:
        "http://pic.netbian.com/uploads/allimg/200405/171302-1586077982d6cd.jpg",
      desc: "测试用的"
    };
  }
};
</script>

<style>
</style>
