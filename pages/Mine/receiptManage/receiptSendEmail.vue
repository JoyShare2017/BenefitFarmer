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

		<!-- 多功能列表1 -->
		<view class="uni-list" style="margin-top: 20rpx;">
			<view class="uni-list-cell-navigate" style="width: 100%;">
					<view style="display: flex;flex-direction: row;width: 100%;">
						
						<view style="width: 30%;">电子邮箱</view>
						
						<input class="theInput" v-model="email" type="text" placeholder="用来接收电子发票的邮箱"/>
						
					</view>
				</view>
		</view>
		
		<view class="address">
			请输入您想要用来接收电子发票的邮箱，并点击提交，系统会给您发送电子发票
		</view>
		
		<button class="loginBtn" @click="sendEmail()">确认提交</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			email:''
		};
	},
	methods: {
		seeKnow() {
			uni.navigateTo({
				url: './receiptKnow'
			});
		},
		sendEmail() {
			if(this.email.length==0){
				uni.showToast({
					icon:'none',
					title:'请输入电子邮箱'
				})
				return;
			}
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
	/* height: 50rpx; */
	line-height: 40rpx;
	font-size: 26rpx;
	padding: 30rpx;
	color: rgb(153,153,153);
}

.sendEmail {
	height: 52rpx;
	line-height: 52rpx;
	border-radius: 4rpx;
	color: rgb(51, 51, 51);
	width: 220rpx;
	font-size: 24rpx;
	padding-left: 10rpx;
	padding-right: 10rpx;
	margin-top: 24rpx;
}
.sendEmail::after {
	border-color: rgb(51, 51, 51);
}
.theInput{
		width: 70%;
		font-size: 30rpx;
}
.loginBtn {
		margin-top: 40rpx;
		background-color: rgb(0, 139, 60);
		color: #ffffff;
		margin-left: 60rpx;
		margin-right: 60rpx;
		height: 100rpx;
		line-height: 100rpx;
		font-size: 30rpx;
	}
</style>
