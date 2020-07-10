<template>
	<view class="page">
		<!-- 开票须知 -->
		<view class="uni-list-cell-navigate" style="background-color: rgb(253,251,238);">
			<view style="display: flex;flex-direction: row;width: 100%;" @click="seeKnow">
				<view style="color: rgb(255,75,75);width: calc(100% - 30rpx);">
					开票须知
				</view>
				<view class="iconfont icon-youjiantou" style="color: rgb(255,75,75);font-size: 24rpx;">
					
				</view>
			</view>
		</view>

		<!-- 数据列表 -->
		<view class="uni-list" style="margin-bottom: 100rpx;">
			<view class="uni-list-cell" style="background-color: #ebeef1;display: flex;flex-direction: column;">
				<view class="cellHolder" v-for="(item, index) in 'goodsList'" :key="index" @click="choose(item)">
					<view class="uni-row" style="padding-top: 20rpx;" @click="seeProgress()">
						<view class="address" style="font-size: 30rpx;color: rgb(51,51,51);width: 50%;">开票金额：￥99.00</view>
						<view class="address" style="font-size: 24rpx;color: rgb(51,51,51);width: 50%;text-align: right;padding-right: 30rpx;">开票进度:1/3</view>
					</view>

					<view style="display: flex;flex-direction: row;margin-top: 20rpx;">
						<view class="uni-column" style="width: calc(100% - 220rpx);">
							<view class="address" style="font-size: 24rpx;color: rgb(153,153,153)">申请时间：2020-06-30 15:00:03</view>

							<view class="address" style="font-size: 24rpx;color: rgb(153,153,153);margin-bottom: 20rpx;">收货时间：2020-06-30</view>
						</view>

						<button class="sendEmail" type="default" @click="sendEmail()">发送电子邮箱</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		seeKnow() {
			uni.navigateTo({
				url: './receiptKnow'
			});
		},
		sendEmail() {
			uni.navigateTo({
				url: './receiptSendEmail'
			});
		},
		seeProgress() {
			uni.navigateTo({
				url: './receiptProgresss'
			});
		}
	}
};
</script>

<style>
.cellHolder {
	margin-top: 10rpx;
	width: calc(100% - 40rpx);
	background-color: #ffffff;
	border-radius: 10rpx;
	margin-bottom: 10rpx;
}

.address {
	height: 50rpx;
	line-height: 50rpx;
	font-size: 32rpx;
	padding-left: 30rpx;
}

.sendEmail {
	height: 52rpx;
	line-height: 52rpx;
	border-radius: 4rpx;
	color: rgb(51, 51, 51);
	width: 190rpx;
	font-size: 24rpx;
	padding-left: 10rpx;
	padding-right: 10rpx;
	margin-top: 24rpx;
}
.sendEmail::after {
	border-color: rgb(51, 51, 51);
}
</style>
