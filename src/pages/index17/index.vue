<template>
  <view>
    <view v-for="(i,index) in list" :key="index" class="view">
      <button size="mini" @click="fn(index)">删除</button>

      <text>姓名：{{i.name}}</text>
      <text>年龄：{{i.age}}</text>
      <text>性别：{{i.sex}}</text>
    </view>
    <button @click="fun">点我触发底部菜单</button>
    <view>你选中的菜单数据是:{{res}}</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: "vue", age: 20, sex: "男" },
        { name: "uniapp", age: 30, sex: "女" },
        { name: "css", age: 40, sex: "男" },
        { name: "html", age: 50, sex: "女" },
        { name: "node", age: 60, sex: "男" }
      ],
      arr: ["abc", "cba", "nba"],
      res: "无"
    };
  },
  created() {
    // uni.showToast({   //会自动关闭
    //   title: "加载完成",
    //   mask: true, //这个api调用的时候不能操作其他界面
    //   icon: "loading" //图标
    // }),
    uni.showLoading({
      //不会自动关闭
      title: "加载中..."
    }),
      setTimeout(() => {
        uni.hideLoading(); //通过这个aoi关闭  uni.showLoading
      }, 3000);
  },
  methods: {
    async fn(e) {
      let res = this.list[e].name;
      let res2 = await uni.showModal({
        title: "提示",
        content: `确定要删除${res}吗？`
      });
      console.log(res2[1].confirm);
      if (res2[1].confirm) {
        this.list.splice(e, 1);
        return uni.showToast({
          title: "删除成功"
        });
      }
      uni.showToast({
        title: "你放弃了删除",
        icon: "none" //不要图标
      });
    },
    async fun() {
      let res = await uni.showActionSheet({
        //底部菜单(返回数组的索引)
        itemList: this.arr, //菜单数据
        itemColor: "#EEC900" //菜单数据的样式
      });
      if (res.length == 1) {
        uni.showToast({
          title: "你取消了选择",
          icon: "none"
        });
        return;
      }
      console.log(res);
      let index = res[1].tapIndex;
      this.res = this.arr[index];
    }
  }
};
</script>

<style>
button {
  display: inline-block;
}
.view {
  border: 1px solid #000;
  line-height: 2;
}
</style>
