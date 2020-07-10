<template>
	<view class="page">
		<view class="uni-list">
			<view class="uni-list-cell" 
			v-for="(fun,index) in firstSection" :key="index">

				<view :class='fun.index==0?"uni-list-cell-navigate uni-navigate-right":"uni-list-cell-navigate"'    style="width: 100%;background-color: ;">
					<view style="display: flex;flex-direction: row;width: 100%;" @click="clickMe(index)">
						<view style="margin-left: 20rpx;width: 50%;">{{fun.title}}</view>
						<view v-if="fun.index==0" style="padding-right: 30rpx;width: 50%;text-align: right;">13310001000</view>
						<view v-else style="margin-left: 30%;">
							<switch checked="true" @change="" />
						</view>

						
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>

	export default{
		
		data(){
			return{
				
				myPhone:'',
				isOpenPhoneToRec:false,
				isOpenPhoneToMem:false,
				isOpenLogToRec:false,
				firstSection:[
					{
						index:0,
						title:'修改绑定手机号'
					},
					{
						index:1,
						title:'公开手机号给推荐人'
					},
					{
						index:2,
						title:'公开手机号给会员'
					},
					{
						index:3,
						title:'公开物流详情给推荐人'
					}
				],
			}
		},
		methods:{
			clickMe(index){
				if(index==0){
					uni.navigateTo({
						url:'../Login/changePhone'
					})
				}
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
