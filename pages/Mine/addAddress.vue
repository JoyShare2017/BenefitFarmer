<template>
	<view class="page">
		<view class="uni-list">
			<view class="uni-list-cell" 
			v-for="(fun,index) in firstSection" :key="index">

				<view :class='fun.index==2?"uni-list-cell-navigate uni-navigate-right":"uni-list-cell-navigate"'    style="width: 100%;background-color: ;">
					<view style="display: flex;flex-direction: row;width: 100%;">
						<view style="margin-left: 20rpx;width: 30%;">{{fun.title}}</view>
						<view v-if="fun.index==0">
							<input type="text" class="item_input"  value="" placeholder="请输入收货人姓名" v-model="myName" />
						</view>
						<view v-if="fun.index==1">
							<input type="number" class="item_input"  value="" placeholder="请输入手机号" v-model="myPhone" />
						</view>
						<view v-if="fun.index==2" style="width: 70%;padding-right: 30rpx;">
							<view style="text-align: right;width: 100%;color: #3c3e49;"  @click="show()">
								{{mySection}}
							</view>
							<selectAddress ref='selectAddress' @selectAddress="successSelectAddress"></selectAddress>
						</view>
					</view>
				</view>
			</view>
			<view  style="display: flex;flex-direction: column;width: 100%;">
				<view style="margin-left: 20rpx;padding-left: 30rpx;height: 100rpx;line-height: 100rpx;">详细地址</view>
				<textarea class="item_input_long" placeholder="请输入详细地址" focus v-model="detailAddress" />
			</view>
				
			
		</view>
		
		<view style="margin-top: 20rpx;background-color: #FFFFFF;">
			<label >
				<checkbox :value="1" /><text>设为默认</text>
			</label>
			<button class="loginBtn" @click="save()">确认保存</button>
			
		</view>
		
		<!-- <view @click="show()">
			kkkk
		</view> -->
		<selectAddress ref='selectAddress' @selectAddress="successSelectAddress"></selectAddress>
	</view>
</template>

<script>
	import selectAddress from '@/components/yixuan-selectAddress/yixuan-selectAddress.vue'
	export default{
		components:{selectAddress},
		data(){
			return{
				cityword:'',
				myName:'',
				myPhone:'',
				mySection:'请选择区域',
				detailAddress:'',
				isDefault:false,
				firstSection:[
					{
						index:0,
						title:'收货人'
					},
					{
						index:1,
						title:'手机号'
					},
					{
						index:2,
						title:'所在区域'
					}
				],
			}
		},
		methods:{
			show(){
				this.$refs.selectAddress.show()
			},
			successSelectAddress(address){ //选择成功回调
			     console.log(address);
				 this.mySection=address;
			}
		}
	}
</script>

<style>
	.item_input {
		margin-top: 0rpx;
		height: 50rpx;
		line-height: 50rpx;
		font-size: medium;
		color: #3c3e49;
		font-size: 24rpx;
		/* width: 70%; */
	}
	.item_input_long {
		height: 200rpx;
		/* margin-top: 10rpx; */
		margin-left: 30rpx;
		padding-left: 20rpx;
		font-size: medium;
		color: #3c3e49;
		font-size: 28rpx;
		width: 95%;
		line-break: auto;
		/* background-color: #09BB07; */
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
</style>
