<template>
  <view>{{list}}</view>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      user: { name: "vue", sex: "男", age: 100 }
    };
  },
  mounted() {
    this.getlist(); //字符串形式的数据
    this.json(); //json数据的格式
    this.getpost(); //post 请求
  },
  methods: {
    async getlist() {
      let res = await uni.request({
        url: "https://demo.hcoder.net", //请求路径
        method: "GET" //请求方式  参数要大写
      });
      console.log(res);
      this.list = res[1].data;
    },
    async json() {
      let res = await uni.request({
        url: "https://demo.hcoder.net/index.php",
        data: { m: "getJson" } //请求的参数
      });
      console.log(res);
    },
    async getpost() {
      let res = await uni.request({
        url: "https://demo.hcoder.net/index.php",
        header: { "content-type": "application/x-www-form-urlencoded" }, //指定提交的数据格式
        method: "POST",
        data: this.user
      });
      console.log(res);
    }
  }
};
</script>

<style>
</style>
