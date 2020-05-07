<template>
  <view>
    <input type="text" v-model="name" />
    <input type="text" password v-model="ps" />
    <button @click="fn">登录</button>
    <button open-type="getUserInfo" @getuserinfo="fun" type="primary">使用微信登录</button>
    <view v-for="(i,key) in user" :key="i">
        {{key=='avatarUrl'?'':i}}
        <image :src="i" v-if="key=='avatarUrl'"></image>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      ps: "",
      user: []
    };
  },
  methods: {
    fn() {
      //将用户名密码存储中缓存中
      if (this.name && this.ps) {
        uni.setStorage({
          key: "id",
          data: this.name
        });
        uni.setStorage({
          key: "srand",
          data: this.ps
        });
        return;
      }
      uni.showToast({
        title: "密码和用户名不能为空"
      });
    },
   async fun(e) {
      //第三方登录(获取用户信息)
      if (!e.detail.iv) {
        uni.showToast({
          title: "你取消了用户授权"
        });
        return;
      }
      uni.showToast({
        title: "用户授权成功"
      });
      if(e.detail.userInfo.gender){
          e.detail.userInfo.gender="男"
      }else{
          e.detail.userInfo.gender="女"
      }
       //将数据中的0 1转换为男女
      console.log(e.detail.userInfo.gender)
      this.user = e.detail.userInfo;
      console.log(e);
    let res=await uni.login({
          provider:"weixin",   //获取code(要利用code和微信通讯)
      })
      console.log("code",res)
   let res2=await   uni.request({  //登录微信内部
          url:`https://hoa.hcoder.net/xcxencode/?c=sk&appid=wxbb7f9f1f2c6f4f33&secret=7339b970b832f0df158f54c494a08e440&code${res[1].code}`
      })
      console.log(res2)
    }
  }
};
</script>

<style>
input {
  border: 2px solid #000;
  padding: 15rpx;
}
image{
    width: 25%;
    height: 20vh;
}
</style>
