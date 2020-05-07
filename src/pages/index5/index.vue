<template>
  <view>
    <!-- 按钮 
    size  大小
    type  样式
    disabled  是否禁用
    loading  加载效果
    -->
    <button>按钮</button>
    <button disabled>按钮</button>
    <button loading>按钮</button>
    <button size="mini" type="warn">按钮</button>
    <!-- 选择器 
    range  绑定数据源
    @change  监听选中的数据(索引)
    mode    选择类型(普通，多列，时间，地区)
    -->
    <!-- 多列选择器 -->
    <picker :range="list" @change="fn" mode="multiSelector">
      <view>请选择日期</view>
    </picker>
    <!-- 时间选择器 -->
    <picker @change="fun" mode="time">
      <view>请选择时间</view>
    </picker>
    <!-- 省市区选择器 -->
    <picker @change="fun2" mode="region">
      <view>请选择地区</view>
    </picker>
    <!-- 日期选择器 -->
    <picker @change="fun3" mode="date">
      <view>请选择日期</view>
    </picker>
    <!-- 滑块 
    value   值
    @change  监听
    disabled 是否禁用
    block-color  滑块的颜色
    show-value 是否显示value值
    activeColor  左侧选中的颜色
    -->
    <slider value="60" @change="sliderChange" step="5" show-value activeColor="#ccc" />
    <slider value="100" @change="sliderChange" step="5" block-color="#000" disabled />
    <!-- 开关选择器 -->
    <switch :checked="ischecked" @change="switch1Change" color="#000" />
    <!-- 多行文本 
    maxlength  输入的最大长度
    -->
    <textarea
      :value="text"
      placeholder="请输入评论:"
      placeholder-class="color"
      :maxlength="maxlength"
      @input="func"
    ></textarea>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        ["年份", 1999, 2000, 2001],
        ["月份", 1, 2, 3, 4, 5, 6],
        ["几号", 1, 2, 3, 4, 5, 6]
      ],
      ischecked: false, //开关选择器是否被选中
      text: "", //内容
      maxlength: 10
    };
  },
  methods: {
    fn(e) {
      console.log(e.detail.value); //下标
    },
    fun(e) {
      console.log(e.detail.value);
    },
    fun2(e) {
      console.log(e.detail.value);
    },
    fun3(e) {
      console.log(e.detail.value);
    },
    sliderChange(e) {
      console.log(e);
    },
    switch1Change(e) {
      console.log(e.detail.value);
      this.ischecked = e.detail.value;
    },
    func(e) {
      if (e.detail.value.length == this.maxlength) {
        uni.showToast({
          title: "输入的内容不能超过10个字符"
        });
        return;
      }
      console.log(e.detail.value, e);
    }
  },
  onLoad(e) {
    //通过这个生命周期函数获取上个页面传过来的数据
    console.log(e);
  }
};
</script>

<style>
picker {
  height: 30px;
}
textarea {
  border: 1px solid #000;
}
.color {
  color: yellow;
}
</style>
