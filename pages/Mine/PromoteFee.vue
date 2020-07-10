<template>
	<view class="page">
		
		<view class="uni-list" style="margin-top: 20rpx;">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" 
			
			v-for="(fun,funcIndex) in secondSection" :key="funcIndex" @tap="jump()">
				
				<view class="uni-list-cell-navigate uni-navigate-right" style="width: 100%;">
					<view style="display: flex;flex-direction: row;width: 100%;">
						<view style="margin-left: 20rpx;width: 60%;color: rgb(102,102,102);">{{fun.title}}</view>
						<view style="padding-right: 30rpx;text-align: right;width: 40%;">提现记录</view>

					</view>
				</view>
				
			</view>
		</view>
		<view class="whiteTop">
			<view class="whiteHalf">
				<view class="wenzi">推广费总额</view>
				<view class="money">￥0.00</view>
			</view>
			<view class="whiteHalf">
				<view class="wenzi">可提取金额</view>
				<view class="money">￥10.00</view>
			</view>
		</view>
		<!-- 退出登录 -->
		<button class="logOutBtn" @click="clickOK()" type="default">
			立即提现
		</button>
		<view class="wenzi" style="height: 50rpx;line-height: 50rpx;">您本月剩余可提取2次</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				secondSection:[
					{
						index:0,
						title:'累计提取金额：205.00元',
					}

				],
			}
		},
		methods:{
			
			jump(){
				uni.navigateTo({
					url:'./cashUpRecord'
				})
					
			},
			clickOK(){
				uni.navigateTo({
					url:'./cashUp'
				})
			}
			
		}
	}
</script>

<style>
    page{background-color: rgb(240,240,240);}
	.whiteTop{
		background-color: #FFFFFF;
		height: 216rpx;
		width: 100%;
		display: flex;
		flex-direction: row;
	}
	.whiteHalf{
		background-color: #FFFFFF;
		height: 216rpx;
		width: 500%;
		display: flex;
		flex-direction: column;
	}
	.wenzi{
		font-size: 28rpx;
		color: rgb(102,102,102);
		text-align: center;
		height: 80rpx;
		line-height: 80rpx;
		margin-top: 28rpx;
	}
	.money{
		font-size: 48rpx;
		color: rgb(51,51,51);
		text-align: center;
		height: 80rpx;
		line-height: 80rpx;
		font-weight: bold;
	}
	
	
	.logOutBtn{
		margin-top: 40rpx;
		height: 100rpx;
		line-height: 100rpx;
		margin-left: 13%;
		width: 74%;
		font-size:28rpx ;
		color: rgb(255,255,255);
		background-color: rgb(0,139,60)

	}
</style>
