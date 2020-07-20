<template>
	<view class="page" style="background-color: #FFFFFF;">
		<!-- logo -->
		<image class="bigLogo" mode=""></image>

		<view class="item_holder" style="margin-top: 80rpx;">
			
			<view class="iconfont icon-shoujihao" 
			style="color: rgb(3,142,62);font-size: 44rpx;margin-top: 18rpx;">
				
			</view>
			<input type="number" class="item_input" placeholder="请输入手机号" focus v-model="myPhone" />
		</view>

		<view class="item_holder">
			<view class="iconfont icon-mima" style="color: rgb(3,142,62);font-size: 44rpx;margin-top: 18rpx;">
				
			</view>
			<input type="text" class="item_input" password="true" value="" placeholder="请输入账号密码" v-model="myPwd" />
			<view class="forgetBtn" @click="forget()">忘记密码</view>
		</view>

		<button class="loginBtn" @click="clickLogin()">登录</button>
		<view class="uni-row no_account" style="width: 100%;">
			<text class="no_account" style="width: 55%;text-align: right;">还没晟农博账户？</text>
			<text class="no_account" @click="clickRegist()" style="color: rgb(3,142,62);width: 45%;text-align: left;">立即注册</text>
		</view>
		
		<!-- 其他方式 -->
		<view style="margin-top: 100rpx;margin-left: 30rpx;margin-right: 30rpx;height: 1rpx;background-color: #E5E5E5;">
			
		</view>
		<view class="other">
			其他方式登录
		</view>
		
		<view class="iconfont icon-weixin" style="font-size: 130rpx;color: rgb(3,142,62);text-align: center;"
		@click="wxLogin()">
			
		</view>
		
		
		
		
	</view>
</template>

<script>
	import md5 from '../../common/md5.js';
export default {
	
	data() {
		return {
			myPhone: '15130134935',
			myPwd: '123456'
		};
	},
	onLoad() {
		// var _this = this;
		// uni.getStorage({
		// 	key: 'lastaccount',
		// 	success: function(res) {
		// 		console.log('getStoragelastaccount' + res.data);
		// 		_this.myPhone = res.data;
		// 	}
		// });
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
			var md5Pwd = md5(this.myPwd).substr(8,16);
			console.log(md5Pwd);
			this.requestFromServer({
				url:'/index/common/login',
				data:{
					userName:this.myPhone,
					userPass:md5Pwd
				}
			}).then((res)=>{
				console.log(res);
						// 本地存入 同步
						if (res.status == 200) {
							try {
								uni.setStorageSync('userInfo', res.data);
							} catch (e) {
								console.log(e);
							}
							uni.navigateBack({});
						}
			})
			
			
		},
		
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
					// this.requestFromServer({
					// 	url:'/index/common/loginWechat',
					// 	data:{
					// 		code:res.authResult.code,
					// 		lv:'',
					// 		encryptedData:''
					// 	}
					// }).then((res=>{
						
					// })
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

.item_holder {
	margin-left: 60rpx;
	margin-right: 60rpx;
	width: calc(100% - 120rpx);
	height: 110rpx;
	border-bottom: 1rpx solid #efefef;

	display: flex;
	flex-direction: row;
}
.input_icon {
	width: 28rpx;
	height: 44rpx;
	margin-top: 28rpx;
}

.item_input {
	margin-top: 20rpx;
	height: 70rpx;
	line-height: 70rpx;
	padding-left: 30rpx;
	font-size: medium;
	color: #3c3e49;
	font-size: 24rpx;
	width: 60%;
}

.forgetBtn {
	width: 40%;
	margin-top: 25rpx;
	height: 60rpx;
	line-height: 60rpx;
	color: rgb(3, 142, 62);
	text-align: center;
	text-align: right;
	font-size: 30rpx;
}
.loginBtn {
	margin-top: 100rpx;
	background-color: rgb(0, 139, 60);
	color: #ffffff;
	margin-left: 60rpx;
	margin-right: 60rpx;
	height: 100rpx;
	line-height: 100rpx;
	font-size: 30rpx;
}
.no_account {
	font-size: 28rpx;
	height: 100rpx;
	line-height: 100rpx;
	color: rgb(153, 153, 153);
	text-align: center;
	/* width: 100%; */
}
.other{
	font-size: 28rpx;
	height: 100rpx;
	line-height: 100rpx;
	color: rgb(153, 153, 153);
	text-align: center;
	margin-top: -50rpx;
	z-index: 50;
	background-color: #FFFFFF;
	width: 200rpx;
	margin-left: calc(50% - 130rpx);
}
</style>
