<script>
export default {
  globalData: {
    //全局数据
    text: "text",
    async islogin() {
      //是否登录
      let res = await uni.getStorage("id"); //获取缓存中的用户id
      let res2 = await uni.getStorage("srand"); //获取缓存中的用户登录的随机码
      console.log(res, res2);
      if (res.length == 1 && res2.length == 1) {
        //检查是否登录
        return false;
      }
      return [res, res2];
    }
  },

  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
</script>

<style>
/*每个页面公共css */
@import "@/style/quanju.css";
@import "@/style/icon.css";
</style>
