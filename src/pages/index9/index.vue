<template>
  <view>
    <button @click="fn">图片</button>

    <!-- <image v-for="i in list" :key="i" :src="i" mode="widthFix"></image> -->
    <image @click="fun" src="@/static/jpg/dd.png"></image>
     <image  @click="fun" src="@/static/jpg/ddr.png"></image>
     <image  @click="fun" src="@/static/jpg/shuijiao.jpg"></image>

     <!-- 地图组件 -->
     <map longitude="104.17 " latitude="31.13" enable-3D  show-location enable-traffic show-compass :markers="maplist"></map>
  </view>
</template>

<script>
export default {
    data(){
        return {
          list:["http://img.netbian.com/file/2020/0427/small9fbe22cb2a89f2835007bb3a324376571587998472.jpg","http://img.netbian.com/file/2020/0413/smallccb961b600fceffd457d557fcac09cad1586789035.jpg","http://img.netbian.com/file/2020/0430/smallab7bf526872253c82627f6c4dc6376611588257798.jpg"],
          maplist:[
            {
              id:0,
              longitude:104.17,
            latitude:31.43,
          iconpath:"../../static/jpg/ddr.png"}
          ]
        }
    },
  methods: {
    async fn() {
      let res = await uni.chooseImage({
        //上传图片
        count: 3, //最大选几张
        sizeType: "compressed" //original 原图  compressed压缩图
      });
      console.log(res); //返回一个结果
      uni.previewImage({
        //图片预览
        urls: res[1].tempFilePaths //要预览的图片路径 数组
      });
    },
    fun(){
        console.log(11)
        uni.previewImage({
            urls:this.list
        })
    }
  }
};
</script>

<style>
map{
  width: 100vw;
  height: 50vh;
}
</style>
