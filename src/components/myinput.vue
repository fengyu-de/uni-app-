<template>
  <view>
    <input type="text" class="myinput" v-model="msg" :placeholder="title" />
    <button type="primary" @click="fn">提交</button>
  </view>
</template>

<script>
export default {
  // props 接收父组件的值(不能在子组件中修改父组件传递过来的值)
  props: {
    title: String
  },
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    fn() {
      this.$emit("fun", this.msg); //通过this.$emit触发一个函数fun 父组件通过@接收fun
    }
  }
};
</script>

<style>
.myinput {
  border: brown solid 2px;
}
</style>
