<template>
  <view>
    文件上传和下载
    <button @click="fn">图片上传</button>
    <image title="点击下载" :src="src" @click="fun"></image>
  </view>
</template>

<script>
export default {
    data(){
        return{
            src:"https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg"
        }
    },
  methods: {
    async fn() {
      let res = await uni.chooseImage({
        //图片上传(本地上传)
        count: 1, //最多上传几张
        sizeType: ["compressed"] //开启压缩模式
      });
      console.log(res[1].tempFilePaths); //上传后的图片路径
      uni.showToast({
        //提示
        title: "上传中",
        icon: "loading"
      });
      let res2 = await uni.uploadFile({
        //上传到服务器
        url: "https://www.example.com/upload", //上传的服务器地址
        filePath: res[1].tempFilePaths[0], //本地的图片路径
        name: "file" //绑定key(后端指定)
      });
      uni.showToast({
        title: "上传成功",
        icon: "success"
      });
      console.log(res2);
    },
   async fun(){
       uni.showToast({
           title:"下载中",
           icon:"loading"
       })
       let res=await uni.downloadFile({   //返回本地图片路径
            url:this.src
        })
        uni.showToast({
           title:"下载完成",
           icon:"success"
       })
        console.log(res[1].tempFilePath)
        let res2=await uni.saveImageToPhotosAlbum({ //下载到电脑
            filePath:res[1].tempFilePath
        })
        console.log(res2)
    }
  }
};
</script>

<style>
</style>
