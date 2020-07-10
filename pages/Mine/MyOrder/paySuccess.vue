<template>
	<view class="page" style="background-color: #FFFFFF;">
		<!-- logo -->
		<image class="bigLogo" mode=""></image>
		<view class="no_account" style="font-size: 32rpx;font-weight: bold;color: rgb(51,51,51);">
			支付成功！
		</view>

		<!-- 其他方式 -->
		<view style="margin-top: 100rpx;margin-left: 30rpx;margin-right: 30rpx;height: 1rpx;background-color: #E5E5E5;">
			
		</view>
		<view class="other">
			本次消费可获得
		</view>
		<view class="iconfont icon-jifen" style="width: 100%;text-align: center;font-size: 58rpx;color: rgb(249,183,33)">
			
		</view>
		
			
		<view class="gain" style="width: 100%;text-align: center;">
			10
		</view>
			
		
		<view class="address" style="font-size: 24rpx;color:rgb(153,153,153);text-align: center;">
			收货后到账，可提现
		</view>
		
		<view class="uni-row" style="margin-bottom: 40rpx;">
			<button class="loginBtn" @click="clickLogin()">分享一下</button>
			<button class="loginBtn gray" @click="clickLogin()">再来一单</button>
			<button class="loginBtn gray" @click="clickLogin()">查看订单</button>
		</view>
		<view style="height: 20rpx;background-color: rgb(243,243,243);">
			
		</view>
		<view class="uni-row" style="padding: 30rpx;"@click="gotoSee()">
			<view class="address" style="font-size: 28rpx;color:rgb(102,102,102);width: calc(100% - 120rpx);">
				购买指定商品可抵现积分
			</view>
			<view class="address" style="font-size: 28rpx;color:rgb(102,102,102);">
				去看看
			</view>
			<view class="iconfont icon-arrow-right" style="font-size: 28rpx;color:rgb(102,102,102);">
				
			</view>
			
		</view>
		
		<!-- 广告商品列表 -->
		<view class="adView">
			<view class="ad_item" v-for="(item,index) in '111'">
				<image class="ad_img" mode=""></image>
				
			</view>
		</view>


		
		
		
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			myPhone: '',
			myPwd: ''
		};
	},
	onLoad() {
		var _this = this;
		uni.getStorage({
			key: 'lastaccount',
			success: function(res) {
				console.log('getStoragelastaccount' + res.data);
				_this.myPhone = res.data;
			}
		});
	},

	methods: {
		clickLogin() {
			if (this.myPhone.length == 0) {
				uni.showToast({
					icon: null,
					title: '请输入手机号'
				});
				return;
			}

			if (this.myPwd.length == 0) {
				uni.showToast({
					icon: null,
					title: '请输入密码'
				});
				return;
			}
			uni.showNavigationBarLoading();
			uni.request({
				url: this.mainServer + 'Home/User/login',
				data: {
					user_name: this.myPhone,
					password: this.myPwd
				},
				method: 'POST',
				success: res => {
					uni.hideNavigationBarLoading();
					console.log(res);
					uni.showToast({
						icon: 'none',
						title: res.data.message
					});
					// 本地存入 同步
					if (res.data.code == 1) {
						try {
							uni.setStorageSync('mid', res.data.mid);
							uni.setStorageSync('id', res.data.id);
							uni.setStorageSync('role', res.data.role);
							uni.setStorageSync('lastaccount', this.myPhone);
						} catch (e) {
							//TODO handle the exception
						}
						uni.navigateBack({});
					}
				},
				fail: res => {
					uni.hideNavigationBarLoading();
				}
			});
		},
		// getMyPersonalInfo(info_key) {
		// 	console.log('进来了'+info_key);
		// 	uni.getStorage({
		// 		key: info_key,
		// 		success: function(res) {
		// 			console.log('getMyPersonalInfo-MinePage.vue' + res.data);
		// 			return res.data;
		// 		},
		// 		fail(eeee) {
		// 			console.log('eeeeInfo-MinePage.vue' + eeee);
		// 		}
		// 	});
		// },
		forget() {
			uni.navigateTo({
				url: './find'
			});
		},
		clickRegist() {
			uni.navigateTo({
				url: './regist'
			});
		},
		wxLogin(){
			uni.login({
				provider:'weixin',
				success: (res) => {
					console.log(res);
				}
			})
		}
	}
};
</script>

<style>
page {
	background-color: #ffffff;
}
.bigLogo {
	margin-top: 68rpx;
	width: 122rpx;
	height: 166rpx;
	margin-left: calc(50% - 61rpx);
	background-color: #007aff;
}


.gain{
	font-size: 30rpx;color:rgb(255,78,0);padding-left: 0rpx;
}
.gain::before{
	content: '奖励';
	color:rgb(51,51,51)
}
.gain::after{
	content: '积分';
	color:rgb(51,51,51)
}

.loginBtn {
	margin-top: 100rpx;
	background-color: rgb(0, 139, 60);
	color: #ffffff;
	margin-left: 10rpx;
	margin-right: 10rpx;
	height: 74rpx;
	line-height: 74rpx;
	font-size: 30rpx;
	width: 33.33%;
}
.loginBtn::after{
	border-color: rgb(102,102,102);
}
.gray{
	background-color: #ffffff;
	color: rgb(102,102,102);
}
.no_account {
	font-size: 28rpx;
	height: 100rpx;
	line-height: 100rpx;
	color: rgb(153, 153, 153);
	text-align: center;
	/* background-color: #007AFF; */
	/* width: 100%; */
}
.other{
	font-size: 26rpx;
	height: 100rpx;
	line-height: 100rpx;
	color: rgb(102,102,102);
	text-align: center;
	margin-top: -50rpx;
	z-index: 50;
	background-color: #FFFFFF;
	width: 200rpx;
	margin-left: calc(50% - 130rpx);
}
.adView{
		margin-top: 10rpx;
		padding: 10rpx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		/* width: 100%; */

		margin-bottom: 10rpx;

	}
	.ad_img{
		margin-top: 30rpx;
		/* margin-left: 0rpx; */
		width: calc(100% - 60rpx) ;
		height: 150rpx;
		background-color: #09BB07;
	}
	
	
	.ad_item{
		margin-left: 10rpx;
		margin-right: 10rpx;
		width: calc((100% - 60rpx)/3);
		height: 190rpx;
		text-align: center;
		background-color: rgb(243,243,243);
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		/* align-items: center; */
	}
</style>
