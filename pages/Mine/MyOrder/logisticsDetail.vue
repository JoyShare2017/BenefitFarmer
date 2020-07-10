<template>
	<view style="width: 100%;">
		<!-- 收货信息 -->
		<view class="uni-row" style="width: 100%;height: 140rpx;background-color: #FFFFFF;padding-top: 40rpx;">
			<view class="uni-column" style="width: 100%;">
				<view class="address">
					张德荣   13311111111
				</view>
				<view class="uni-row" style="margin-top: 10rpx;">
					
					<view class="address" style="font-size: 28rpx;">
						河北省石家庄是裕华区乳娘惠东皇后i好
					</view>
					<button class="dupAddress" type="default" @click="dupAdd()">
						复制
					</button>
				</view>
				
			</view>
			
		</view>
		
		<view style="height: 20rpx;background-color: #E5E5E5;">
			
		</view>
		
		<view  style="display: flex;flex-direction: row;margin-top: 20rpx;">
		
			<image class="goodsImg" mode=""></image>
			
			<view class="uni-column">
				<view class="address" style="font-size: 30rpx;color: rgb(0,139,60);margin-top: 20rpx;">
					已签收
				</view>
				<view class="address" style="font-size: 26rpx;color: rgb(153,153,153);">
				    韵达快递：310466115465622
				</view>
				
				
			</view>
		</view>
		
		<!-- 物流时间轴 -->
		<!-- <time-line ref="timeline" 
		location="left" 
		title=""></time-line> -->
		<view class="uni-list" >
			<view class="uni-list-cell">
				<view class="cellHolder">
					<view  v-for="(item,index) in timelineList" :key="index">
						
						<view class="uni-row">
							<view class="dot_gray">
								
							</view>
							<view class="address place">
								{{item.arrival}}
							</view>
						</view>
						
						
						<view class="address time">
							{{item.time}}
						</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import timeLine from '@/components/xuan-timeLine/xuan-timeLine.vue';
	export default{
		components:{
		timeLine
		},
		data(){
			return{
				timelineList:[{
					time:'2018-12-27  11:10:30',
					arrival:'派送中，广州天河派件员，包子君正在派件派件员，包子君正在派件'
				},{
					time:'2018-12-27  09:47:42',
					arrival:'到广州天河区，天河总部'
				},{
					time:'2018-12-27  11:10:30',
					arrival:'派送中，广州天河派件员，包派件员，包子君正在派件子君正在派件'
				},{
					time:'2018-12-27  09:47:42',
					arrival:'到广州天河区，天河派件员，包子君正在派件总部'
				}]
			}
		}
	}
</script>

<style>
	.dupAddress{
		height: 36rpx;
		line-height: 36rpx;
		font-size: 22rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
		width: 80rpx;
		color: rgb(102,102,102);
		border-radius: 4rpx;
		margin-top: 10rpx;
	}
	.dupAddress::after{
		border-color: rgb(102,102,102);
	}
	
	.cellHolder{

		position: relative;
		margin: 0;
		margin-left: 40rpx;
		padding: 0rpx 30rpx;


		border-left: 2rpx solid rgb(221,221,221);
		/* background-color: #09BB07; */
	}
	.cellHolder::before{
		margin: 0;
		left: 30rpx;
		color: #007AFF;
		background-color: #09BB07;
	}
	
	.dot_gray{
		width: 32rpx;
		height: 32rpx;
		border-radius: 16rpx;
		background-color: rgb(221,221,221);
		margin-left: -46rpx;
		/* z-index: 32; */
		/* margin-top: 9rpx; */
	}
	
	.address{

		line-height: 50rpx;
		font-size: 30rpx;
		padding-left: 30rpx;
		color: rgb(51,51,51);
		margin-top: -9rpx;
		/* background-color: #007AFF; */
	}
	/* .address::before{
		content:"";
		background-color:yellow;
		color:red;
		font-weight:bold;
	} */
	.place{
		color: rgb(102,102,102);
		width: calc(100% - 32rpx);
		/* padding-left: 20rpx; */
	}
	.time{
		color: rgb(170,170,170);
		font-size: 24rpx;
		margin-bottom: 40rpx;
		margin-left: -15rpx;
	}
	.accepted{
		color: rgb(0,139,60);
	}
	.goodsImg{
		margin-left: 30rpx;
		width: 160rpx;
		height: 160rpx;
		background-color: #09BB07;
		margin-bottom: 30rpx;
	}
</style>
