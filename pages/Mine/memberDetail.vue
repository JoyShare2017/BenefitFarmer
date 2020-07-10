<template>
	<view class="page">
		
		<view class="greenTop">
			<view class="uni-row">
				<view class="headImg" style="margin-left: 30rpx;">
					<image class="headImg" mode=""></image>
				</view>
				
				<view class="uni-column" style="margin-left: 20rpx;width: 60%;padding-top: 7rpx;">
					<view class="userInfo">
						昵称：门一马
					</view>
					<view class="userInfo" style="font-size: 24rpx;color: rgb(153,153,153);">
						会员号：12138
					</view>
				</view>
			</view>
			<!-- 三个按钮 -->
			<view class="threeBtnView">
				<view class="threeBtn_item" v-for="(item,index) in firstSection" :key="index" @click="clickThree(index)">
					
					<view class="threeBtn_item_func">
						{{item.title}}
					</view>
					<view  class="threeBtn_item_num">
						0.00
					</view>
				</view>
			</view>
			
			
		</view>
		
		<view style="height: 184rpx;background-color: #FFFFFF;margin-top: 20rpx;padding-top: 30rpx;">
			<view class="uni-row" v-for="(item,index) in secondSection" :key="index">
				<view class="other" >
					{{item.title}}
				</view>
				
				<view v-if="index==0" class="other" >
					32342424
				</view>
				<view v-if="index==1" class="other">
					2020-07-03 17:00:42
				</view>
			</view>
		</view>
		
		
		
	</view>	
</template>

<script>
	export default{
		data(){
			return{
				firstSection:[
					{
						index:0,
						title:'今日订单'
					},
					{
						index:1,
						title:'本月订单'
					},
					{
						index:2,
						title:'专属会员'
					}
				],
				
				secondSection:[
					{
						index:0,
						title:'邀请人',
					},
					{
						index:1,
						title:'注册时间',
					}
					
				],
				}
			}
		}	
</script>

<style>
	page{background-color: rgb(242,242,242);}
	.greenTop{
		background-color: #FFFFFF;
		padding-top: 32rpx;
		height: 330rpx;
		/* display: flex;
		flex-direction: row; */
	}
	.headImg{
		width: 114rpx;
		height: 114rpx;
		border-radius: 57rpx;
		background-color: #007AFF;
	}
	.userInfo{
		height: 50rpx;
		line-height: 50rpx;
		font-size: 32rpx;
		color: rgb(51,51,51);
	}
	
	.threeBtnView{
		margin-top: 40rpx;
		margin-left: 30rpx;
		width: calc(100% - 60rpx);
		height: 136rpx;
		border-radius: 10rpx;
		background-color: rgb(229,242,234);
		display: flex;
		flex-direction: row;
		/* margin-top: -100rpx;
		z-index: 100; */
	}
	.threeBtn_item{
		padding-top: 40rpx;
		display: flex;
		flex-direction: column;
		width: 33.33%;
		text-align: center;
	}
	
	.threeBtn_item_func{
	    
		height: 40rpx;
		line-height: 40rpx;
		font-size: 28rpx;
		color: rgb(51,51,51);
	}
	.threeBtn_item_num{
	
		height: 40rpx;
		line-height: 40rpx;
		font-size: 32rpx;
		color: rgb(0,139,60);
	}
	.other{
		height: 80rpx;
		line-height: 80rpx;
		font-size: 28rpx;
		color: rgb(51,51,51);
		width: 50%;padding-left: 30rpx
	}
</style>
