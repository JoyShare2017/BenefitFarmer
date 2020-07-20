<template>
	<view class="page">
		<view class="greenTop">
			<view class="userInfo paddingRight30" @click="manage()" style="font-size: 26rpx;text-align: right;">积分说明</view>
			<view class="userInfo" style="font-size: 78rpx;color: rgb(255,255,255);">1256</view>
			<view class="userInfo" style="font-size: 24rpx;color: rgb(250,242,19);">可抵现金125.60</view>
		</view>

		<!-- 两个按钮 -->
		<view class="threeBtnView">
			<view class="threeBtn_item" v-for="(item, index) in firstSection" :key="index">
				<view class="threeBtn_item_func">{{ item.title }}</view>
				<view class="threeBtn_item_func" style="font-size: 38rpx;color: rgb(51,51,51);">
					0.00
				</view>
			</view>
		</view>
		<view class="threeBtn_item_func paddingLeft30" style="font-size: 32rpx;color: rgb(51,51,51);margin-top: 40rpx;">获取更多积分</view>
		<view class="threeBtn_item_func paddingLeft30" style="font-size: 24rpx;color: rgb(102,102,102);">购买指定商品可获积分</view>

		<!-- 广告商品列表 -->
		<view class="adView">
			<view class="ad_item" v-for="(item, index) in '1111111'" @click="goodsDetail(item)">
				<image class="ad_img" mode=""></image>
				<view class="uni-row">
					<view class="left" style="">10</view>
				</view>
				<view class="goBuyBtn">去购买</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			firstSection: [
				{
					index: 0,
					title: '累计节省(元)'
				},
				{
					index: 1,
					title: '待确认积分'
				}
			]
		};
	},
	methods: {
		
		manage() {
			uni.navigateTo({
				url: './jifenDes'
			});
		},

		
		goodsDetail(item) {
			uni.navigateTo({
				url: '../Home/goodsDetail'
			});
		}
	}
};
</script>

<style>
.greenTop {
	background-color: #1aad19;
	height: 300rpx;
	display: flex;
	padding-top: 30rpx;
	flex-direction: column;
}
.headImg {
	width: 114rpx;
	height: 114rpx;
	border-radius: 57rpx;
	background-color: #007aff;
}
.userInfo {
	height: 50rpx;
	line-height: 50rpx;
	font-size: 34rpx;
	text-align: center;
	color: #ffffff;
}

.threeBtnView {
	margin-left: 30rpx;
	width: calc(100% - 60rpx);
	height: 184rpx;
	border-radius: 20rpx;
	background-color: #ffffff;
	display: flex;
	flex-direction: row;
	margin-top: -100rpx;
	z-index: 100;
}
.threeBtn_item {
	display: flex;
	flex-direction: column;
	width: 50%;
	text-align: center;
	padding-top: 50rpx;
}

.threeBtn_item_func {
	height: 40rpx;
	line-height: 40rpx;
	font-size: 28rpx;
	color: rgb(102, 102, 102);
}
.adView {
	margin-top: 10rpx;
	padding: 10rpx;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	/* width: 100%; */

	margin-bottom: 10rpx;
}
.ad_img {
	margin-top: 30rpx;
	/* margin-left: 0rpx; */
	width: calc(100% - 60rpx);
	height: 150rpx;
	background-color: #09bb07;
}

.ad_item {
	margin-left: 10rpx;
	margin-right: 10rpx;
	width: calc((100% - 60rpx) / 3);
	height: 340rpx;
	text-align: center;
	background-color: #ffffff;
	margin-top: 10rpx;
	margin-bottom: 10rpx;
	/* align-items: center; */
}

.left {
	height: 50rpx;
	line-height: 50rpx;
	color: rgb(255, 78, 0);
	width: 100%;
	font-size: 32rpx;
	text-align: center;
}
.left::after {
	height: 50rpx;
	line-height: 50rpx;
	content: '积分';
	color: rgb(51, 51, 51);
	font-size: 24rpx;
}
.goBuyBtn {
	width: 130rpx;
	margin-left: calc(50% - 65rpx);
	height: 56rpx;
	line-height: 56rpx;
	text-align: center;
	background-color: rgb(0, 119, 51);
	color: #ffffff;
	border-radius: 28rpx;
}
</style>
