<template>
	<view  style="background-color: #FFFFFF;">
		<!-- logo -->
		<image class="bigLogo" mode=""></image>

		<view class="item_holder" style="margin-top: 80rpx;">
			<view class="iconfont icon-shoujihao"
			style="color: rgb(3,142,62);font-size: 44rpx;margin-top: 18rpx;">
				
			</view>
			<input type="number" class="item_input" placeholder="请输入手机号" focus v-model="myPhone" />
		</view>
		<view class="item_holder" >
			<view class="iconfont icon-mima"
			style="color: rgb(3,142,62);font-size: 44rpx;margin-top: 18rpx;">
				
			</view>
			<input  class="item_input" placeholder="请输入账号密码" focus v-model="myNewPwd" />
		</view>
		

		<view class="item_holder">
			<view class="iconfont icon-yanzhengma"
			style="color: rgb(3,142,62);font-size: 44rpx;margin-top: 18rpx;">
				
			</view>
			<input type="text" class="item_input" password="true" value="" placeholder="短信验证码" v-model="myYzm" />
			<view class="forgetBtn" @click="sendYzm()">{{yzmBtnTitle}}</view>
		</view>
		<view class="item_holder">
			<view class="tjr">
				推荐人
			</view>
			<input  class="item_input"  placeholder="请输入推荐人会员号" v-model="myRecommand" />
			
		</view>

		<button class="loginBtn" @click="clickOK()">确认</button>
		
		
		
		
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			myPhone: '',
			myNewPwd: '',
			myYzm: '',
			yzmBtnTitle:'获取验证码',
			timestatus:false,
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
		sendYzm(){
			if(this.myPhone.length==0){
				uni.showToast({
					icon:'none',
					title:"请输入手机号"
				});
				return;
			}
			
			uni.request({
				url:this.mainServer+'Home/Index/sms_send',
				data:{
					phone:this.myPhone,
					type:3
				},
				method:"POST",
				success: (res) => {
					console.log(res);
					uni.showToast({
						icon:"none",
						title:res.data.message
					});
					this.yzmBtnTitle=60;
					 this.timestatus = false
					       var interval = setInterval(() => {
					          --this.yzmBtnTitle
					       }, 1000)
					       setTimeout(() => {
					          clearInterval(interval)
					          this.timestatus = true;
							  this.yzmBtnTitle='重新获取';
					       }, 60000)
					
				}
			})
			
			
			
		},
		clickOK() {
			if (this.myPhone.length == 0) {
				uni.showToast({
					icon: 'none',
					title: '请输入手机号'
				});
				return;
			}

			if (this.myNewPwd.length == 0) {
				uni.showToast({
					icon: 'none',
					title: '请输入账号密码'
				});
				return;
			}
			
			if (this.myYzm.length == 0) {
				uni.showToast({
					icon: 'none',
					title: '请输入验证码'
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
		sendYzm(){
			if(this.myPhone.length==0){
				uni.showToast({
					icon:'none',
					title:"请输入手机号"
				});
				return;
			}
			
			uni.request({
				url:this.mainServer+'Home/Index/sms_send',
				data:{
					phone:this.myPhone,
					type:3
				},
				method:"POST",
				success: (res) => {
					console.log(res);
					uni.showToast({
						icon:"none",
						title:res.data.message
					});
					this.yzmBtnTitle=60;
					 this.timestatus = false
					       var interval = setInterval(() => {
					          --this.yzmBtnTitle
					       }, 1000)
					       setTimeout(() => {
					          clearInterval(interval)
					          this.timestatus = true;
							  this.yzmBtnTitle='重新获取';
					       }, 60000)
					
				}
			})
			
			
			
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
		
		
	}
};
</script>

<style>
page {
	background-color: #FFFFFF;
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
	margin-top: 23rpx;
	height: 64rpx;
	line-height: 64rpx;
	background-color: rgb(3, 142, 62);
	color: #FFFFFF;
	text-align: center;
	font-size: 30rpx;
	border-radius: 10rpx;
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
.tjr{
		margin-top: 20rpx;
		height: 70rpx;
		line-height: 70rpx;
		font-size: 30rpx;
		color: rgb(51,51,51);
		
	}
.no_account {
	font-size: 28rpx;
	height: 100rpx;
	line-height: 100rpx;
	color: rgb(153, 153, 153);
	text-align: center;
	/* width: 100%; */
}
</style>
