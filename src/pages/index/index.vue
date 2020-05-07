<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
		<view class="color">我是蓝色</view>
		<view class="scss">我是scss</view>
		<view>我是hahah</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello-uni-appp'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content {
		text-align: center;
		height: 100vh;
		.scss{
			background-color: antiquewhite;
			width: 50vw;
			height: 50vh;
		}
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 0upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}

</style>
