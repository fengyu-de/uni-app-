<template>
  <view>
    <!-- 音频组件
      src   路径
      loop  是否循环播放
      controls   是否显示控件
      poster      影评封面图片(和controls 以前用)
      name   影评名称(和controls 一起用)
      author 作者名称(和controls 一起用)
    -->
    <text>音频组件</text>
    <audio
      src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3"
      controls
      poster="https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg"
      name="uniapp"
      author="fy"
    ></audio>

    <!-- 图片组件
    lazy-load图片懒加载   但是只能是scroll-view下的图片有效
    mode 图片显示的模式  widthFix宽度不变 高度自适应
     -->
     <view class="img">
     <image src="@/static/jpg/shuijiao.jpg" mode=" widthFix" ></image>
     </view>
     <!-- 视频组件
     autoplay   是否自动播放
     muted      是否静音
      -->
     <video src="https://img.cdn.qiniu.dcloud.net.cn/wap2appvsnative.mp4"></video>

     <!-- 图片懒加载 -->
     <scroll-view scroll-y class="lazy">
<image src="@/static/jpg/shuijiao.jpg" mode=" widthFix" lazy-load ></image>
 <image src="@/static/jpg/shuijiao.jpg" mode=" widthFix" lazy-load></image>
<image src="@/static/jpg/shuijiao.jpg" mode=" widthFix" lazy-load></image>
<image src="@/static/jpg/shuijiao.jpg" mode=" widthFix" lazy-load></image>
<image src="@/static/jpg/shuijiao.jpg" mode=" widthFix" lazy-load></image>
<image src="@/static/jpg/shuijiao.jpg" mode=" widthFix" lazy-load></image>
<image src="@/static/jpg/shuijiao.jpg" mode=" widthFix" lazy-load></image>
<image src="@/static/jpg/shuijiao.jpg" mode=" widthFix" lazy-load></image>
<image src="@/static/jpg/shuijiao.jpg" mode=" widthFix" lazy-load></image>
<image src="@/static/jpg/shuijiao.jpg" mode=" widthFix" lazy-load></image>
<image src="@/static/jpg/shuijiao.jpg" mode=" widthFix" lazy-load></image>
<image src="@/static/jpg/shuijiao.jpg" mode=" widthFix" lazy-load></image>
     </scroll-view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss">
audio {
  display: inline-block;
  width: 100vw;
  /* 行内样式生效 */
  text-align: center;
}
.img{
    width: 600rpx;
    height:300rpx;
    border: 2px solid #000;
    box-sizing: border-box;
}
image{
    width: 100%;
}
.lazy{
    width: 100v;
    height:calc(100vh - 278px) ;
}
</style>
