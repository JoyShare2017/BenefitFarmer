<template>
	<view class="page">
		<view class="uni-row" style="background-color: rgb(253,251,238);">
			<view
				class="address"
				style="font-size: 26rpx;color: rgb(255,75,75);
			height: 80rpx;line-height: 80rpx;width: calc(100% - 210rpx);"
			>
				温馨提示：订单确认收货后可在此开票
			</view>
			<button class="receiptKnow" type="default" @click="needknow()">发票须知</button>
		</view>

		<view class="uni-list" style="margin-bottom: 100rpx;">
			<view class="uni-list-cell" style="background-color: #ebeef1;display: flex;flex-direction: column;">
				<view class="cellHolder" v-for="(item, index) in goodsList" :key="index" @click="choose(item)">
					<view style="display: flex;flex-direction: row;margin-top: 20rpx;">
						<label style="margin-left: 20rpx;margin-top: 20rpx;">
							<checkbox value="" :checked="item.isSelected" />
							<text></text>
						</label>

						<view class="uni-column" style="width: 100%;">
							<view class="uni-row"><view class="address" style="font-size: 30rpx;">
							订单编号：2014905445100
							</view>
							</view>

							<view class="address" style="font-size: 24rpx;color: rgb(153,153,153);margin-bottom: 20rpx;">
								收货时间：2020-06-30
							</view>
						</view>

						<view class="address" style="font-size: 24rpx;color: rgb(0,0,0);padding-right: 30rpx;margin-top: 20rpx;font-weight: bold;">
							￥100.00
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 底部工具栏 -->
		<view class="bottom_tool">
			<view class="cartBtn" style="width: 20%;">购物车</view>
			<view style="width: 40%;">
				<view class="uni-row">
					<view class="address" style="color: rgb(102,102,102);font-size: 28rpx;">合计:</view>
					<view class="address" style="padding-left: 0rpx;color: rgb(254,70,70);font-size: 28rpx;">￥0.00</view>
				</view>
				<view class="address" style="color: rgb(153,153,153);font-size: 20rpx;">已选择0项</view>
			</view>
			<view class="bigBtn" style="color: #FFFFFF;background-color: #1AAD19;" @click="next()">
				下一步
			</view>
		</view>
	</view>
</template>

<script>

export default {

	data() {
		return {
			goodsList: [{}, {}, {}, {}, {}]
		};
	},
	methods: {
		needknow() {
			uni.navigateTo({
				url: './receiptKnow'
			});
		},
		choose(item){
			if(item.isSelected == true){
				item.isSelected == false;
			}else{
				item.isSelected == true;
			}
		},
		next(){
			uni.navigateTo({
				url:'./receiptEdit'
			})
			
		},
		numberChange(value, id) {
			console.log(value);
		}
	}
};
</script>

<style>
page {
	background-color: #ebeef1;
}

.receiptKnow {
	height: 46rpx;
	color: rgb(255, 86, 81);
	line-height: 46rpx;
	width: 140rpx;
	font-size: 28rpx;
	padding-left: 10rpx;
	padding-right: 10rpx;
	margin-top: 17rpx;
	background-color: transparent;
}
.receiptKnow::after {
	border-color: rgb(255, 86, 81);
}

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

.bottom_tool {
	width: 100%;
	height: 100rpx;
	background-color: #f6f6f6;
	display: flex;
	flex-direction: row;
	position: fixed;
	border-top: 1rpx solid #616262;
	bottom: calc(var(--window-bottom));
}
.editBtnImg {
	margin-top: 30rpx;
	width: 40rpx;
	height: 40rpx;
	line-height: 99rpx;
}

.bigBtn {
	width: 40%;
	height: 100rpx;
	line-height: 100rpx;
	font-size: 32rpx;
	text-align: center;
	border-left: 1rpx solid #616262;
}
</style>
