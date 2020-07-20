<template>
	<view class="page">
		
		<view class="uni-list" style="margin-top: 20rpx;">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" 
			
			v-for="(fun,funcIndex) in secondSection" :key="funcIndex" @tap="jump()">
				
				<view class="uni-list-cell-navigate uni-navigate-right" style="width: 100%;">
					<view style="display: flex;flex-direction: row;width: 100%;">
						<view style="margin-left: 20rpx;width: 60%;color: rgb(102,102,102);">{{fun.title}}</view>
						<view style="padding-right: 30rpx;text-align: right;width: 40%;">提现说明</view>

					</view>
				</view>
				
			</view>
		</view>
		<view class="whiteTop">
			<view class="wenzi">￥</view>
			<input type="number" class="item_input"  value="0.00" placeholder="" 
			v-model="money" />
			
		</view>
		<view style="margin-left: 30rpx;width: calc(100% - 60rpx);height: 1rpx;background-color: #E5E5E5;">
		</view>
		<view class="uni-row" style="background-color: #FFFFFF;width: 100%;">
			<view class="wenzi can" style="">可提现金额￥10.00</view>
			<view class="wenzi all" style="">全部提现</view>
		</view>	
		<!-- 退出登录 -->
		<button class="logOutBtn" @click="clickOK()" type="default">
			确定提现
		</button>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				money:'',
				secondSection:[
					{
						index:0,
						title:'提现金额',
					}

				],
			}
		},
		methods:{
			
			jump(){
				uni.navigateTo({
					url:'./cashUpDescription'
				})
					
			},
			clickOK(){
				
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
		padding-left: 30rpx;
	}
	.whiteHalf{
		background-color: #FFFFFF;
		height: 216rpx;
		width: 500%;
		display: flex;
		flex-direction: column;
	}
	.wenzi{
		font-size: 38rpx;
		color: rgb(51,51,51);
		text-align: center;
		height: 80rpx;
		line-height: 80rpx;
		margin-top: 30rpx;
	}
	.money{
		font-size: 48rpx;
		color: rgb(51,51,51);
		text-align: center;
		height: 80rpx;
		line-height: 80rpx;
		font-weight: bold;
	}
	.item_input {
		margin-top: 20rpx;
		height: 70rpx;
		line-height: 70rpx;
		padding-left: 30rpx;
		font-size: 68rpx;
		color: rgb(51,51,51);
		width: 60%;
	}
	.can{
		font-size: 28rpx;width: 50%;text-align: left;padding-left: 30rpx;
		margin-bottom: 30rpx;
	}
	.all{
		font-size: 28rpx;width: 50%;text-align: right;color: rgb(0,139,60);padding-right: 30rpx;
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
