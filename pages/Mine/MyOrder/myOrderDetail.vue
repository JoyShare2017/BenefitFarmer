<template>
	<view class="page">
		<!-- 顶部信息 -->
		<view class="topBlack">
			<view class="uni-row">
				<view class="iconfont icon-daifukuan" style=";font-size: 40rpx;color: #FFFFFF;">
					
				</view>
				<view class="address" style="font-size: 38rpx;color: #FFFFFF;font-weight: bold;margin-top: 10rpx;">
					待付款
				</view>
			</view>
			<view class="address" style="font-size: 24rpx;color: #FFFFFF;margin-left: 0rpx;padding-left: 0rpx;">
				请在15:00内完成支付
			</view>
		</view>
		
		<!-- 获得多少积分 -->
		<view style="padding: 30rpx;background-color: #FFFFFF;margin-bottom: 20rpx;">
			<view class="address" style="font-size: 30rpx;color:rgb(51,51,51);">
				订单确认收货后可获得
			</view>
			<view class="gain">
				10
			</view>
		</view>
		
		
		<!-- 收货信息 -->
		<view class="uni-row" style="width: 100%;height: 140rpx;background-color: #FFFFFF;padding-top: 40rpx;">
			<view class="uni-column" style="width: 100%;">
				<view class="address">
					张德荣   13311111111
				</view>
				<view class="uni-row">
					<view class="address" style="font-size: 28rpx;">
						河北省石家庄是裕华区乳娘惠东皇后i好
					</view>
					<button class="dupAddress" type="default" @click="dupAdd()">
						复制
					</button>
				</view>
				
			</view>
			
		</view>
		
		<!-- 订单商品 -->
		<view style="margin-top: 20rpx;background-color: #FFFFFF;width: 100%;">
			<view class="address" style="font-size: 36rpx;padding-top: 20rpx;font-weight: bold;">
				商品清单
			</view>
			<!--  -->
			
			<view  style="display: flex;flex-direction: row;margin-top: 20rpx;">

				<image class="goodsImg" mode=""></image>
				
				<view class="uni-column">
					<view class="address" style="font-size: 28rpx;">
						316颗粒化肥
					</view>
					<view class="address" style="font-size: 24rpx;color: #3C3E49;">
					    x1
					</view>
					<view class="address" style=" color: rgb(51,51,51);font-size: 24rpx;">
							￥120.00
					</view>
					
				</view>
			</view>
			
			
			
		</view>
		
		
		
		
		<!-- 费用合计 -->
		<view style="width: 100%;background-color: #FFFFFF;margin-top: 20rpx;padding-top: 40rpx;">
			<view class="address" style="margin-top: 0rpx;font-size: 32rpx;color: rgb(51,51,51);font-weight: bold;">
				费用明细
			</view>
			<view class="uni-row" style="height: 50rpx;padding-top: 0rpx;">
				<view class="address" style="width: 50%;">
					商品金额
				</view>
				<view class="address" style="width: 50%;text-align: right;padding-right: 30rpx;">
					￥120.00
				</view>
			</view>
			<view class="uni-row" style="height: 50rpx;margin-top: 0rpx;">
				<view class="address" style="width: 50%;">
					复购折扣
				</view>
				<view class="address" style="width: 50%;text-align: right;padding-right: 30rpx;">
					-￥0.00
				</view>
			</view>
			<view class="uni-row" style="height: 50rpx;margin-top: 0rpx;">
				<view class="address" style="width: 50%;">
					运费
				</view>
				<view class="address" style="width: 50%;text-align: right;padding-right: 30rpx;">
					+￥0.00
				</view>
			</view>
			<view class="uni-row" style="height: 50rpx;margin-top: 0rpx;padding-bottom: 30rpx;">
				<view class="address" style="width: 50%;">
					积分
				</view>
				<view class="address" style="width: 50%;text-align: right;padding-right: 30rpx;">
					-￥0.00
				</view>
			</view>
		</view>
		
		<!-- 订单信息 -->
		<view style="width: 100%;background-color: #FFFFFF;margin-top: 20rpx;margin-bottom: 120rpx;padding-top: 40rpx;">
			<view class="address" style="margin-top: 0rpx;font-size: 32rpx;color: rgb(51,51,51);font-weight: bold;">
				订单信息
			</view>
			<view class="uni-row" style="height: 50rpx;padding-top: 0rpx;">
				<view class="address" style="width: calc(100% - 240rpx)" @click="dupOrderNum()">
					订单编号
				</view>
				<button class="dupAddress" type="default">
					复制
				</button>
				<view class="address" style="text-align: right;padding-right: 30rpx;">
					202002545544444
				</view>
			</view>
			<view class="uni-row" style="height: 50rpx;margin-top: 0rpx;">
				<view class="address" style="width: 50%;">
					下单时间
				</view>
				<view class="address" style="width: 50%;text-align: right;padding-right: 30rpx;">
					200-06-30 10:50:45
				</view>
			</view>
			<view class="uni-row" style="height: 50rpx;margin-top: 0rpx;">
				<view class="address" style="width: 50%;">
					订单状态
				</view>
				<view class="address" style="color: rgb(255,78,0);width: 50%;text-align: right;padding-right: 30rpx;">
					待付款
				</view>
			</view>
			<view class="uni-row" style="height: 50rpx;margin-top: 0rpx;padding-bottom: 0rpx;">
				<view class="address" style="width: 50%;">
					支付方式
				</view>
				<view class="address" style="width: 50%;text-align: right;padding-right: 30rpx;">
					微信APP支付
				</view>
			</view>
			<view class="uni-row" style="height: 50rpx;margin-top: 0rpx;padding-bottom: 30rpx;">
				<view class="address" style="width: 50%;">
					花费积分
				</view>
				<view class="address" style="width: 50%;text-align: right;padding-right: 30rpx;">
					0
				</view>
			</view>
		</view>
		
		<!-- 底部工具条 待付款-->
		<view   class="bottom_tool">
			<view class="uni-row" style="width: calc(100% - 440rpx);">
				<view   style="font-size: 32rpx;height: 100rpx;line-height: 100rpx;padding-left: 30rpx;">
					实付款：
				</view>
				<view style="font-size: 32rpx;text-align: right;color: #FC0107;height: 100rpx;line-height: 100rpx;">
					￥120.00
				</view>
			</view>
			<button class="bigBtn grayBtn"
			@click="cancelOrder()">
				取消订单
			</button>
			<button class="bigBtn" 
			@click="payImme()">
				立即付款
			</button>
		
		</view>
		<!-- 底部工具条 款已退 -->
		<view   class="bottom_tool">
			<view class="uni-row" style="width: calc(100% - 220rpx);text-align: right;">
				<view style="font-size: 32rpx;height: 100rpx;line-height: 100rpx;padding-left: 30rpx;">
					实付款：
				</view>
				<view style="font-size: 32rpx;text-align: right;color: #FC0107;height: 100rpx;line-height: 100rpx;">
					￥120.00
				</view>
			</view>
			<button class="bigBtn grayBtn"
			@click="delOrder()">
				申请退款
			</button>
			
			
		
		</view>
		<!-- 底部工具条 配送中 -->
		<view   class="bottom_tool">
			<view class="uni-row" style="width: calc(100% - 440rpx);text-align: right;">
				<view  style="font-size: 32rpx;height: 100rpx;line-height: 100rpx;padding-left: 30rpx;">
					实付款：
				</view>
				<view style="font-size: 32rpx;text-align: right;color: #FC0107;height: 100rpx;line-height: 100rpx;">
					￥120.00
				</view>
			</view>
			<button class="bigBtn grayBtn"
			@click="applyReturn()">
				申请退款
			</button>
			<button class="bigBtn" 
			@click="confirmReceiverGoods()">
				确认收货
			</button>
		
		</view>
		
		<!-- 底部工具条 已完成 -->
		<view   class="bottom_tool">
			<view class="uni-row" style="width: calc(100% - 440rpx);text-align: right;">
				<view  style="font-size: 32rpx;height: 100rpx;line-height: 100rpx;padding-left: 30rpx;">
					实付款：
				</view>
				<view style="font-size: 32rpx;text-align: right;color: #FC0107;height: 100rpx;line-height: 100rpx;">
					￥120.00
				</view>
			</view>
			<button class="bigBtn grayBtn"
			@click="applyFapiao()">
				申请发票
			</button>
			<button class="bigBtn" 
			@click="gotoComment()">
				评价
			</button>
		
		</view>
	</view>
</template>

<script>
	import wmNumberBox from "@/common/wm-number-box.vue"
	export default{
		components: {wmNumberBox},
		data(){
			return{
				
			}
		},
		methods:{
			dupOrderNum(){
				
			},
			dupAdd(){
				
			},
			cancelOrder(){
				
			},
			payImme(){
				uni.navigateTo({
					url:'./paySuccess'
				})
			},
			applyReturn(){
				uni.navigateTo({
					url:'./applyReturn'
				})
			},
			confirmReceiverGoods(){
				
			},
			delOrder(){
				
			},
			applyFapiao(){
				uni.navigateTo({
					url:'../receiptManage/receiptApply'
				})
			},
			gotoComment(){
				
			}
		}
	}
</script>

<style>
	.topBlack{
		width: 100%;
		background-color: rgb(36,36,36);
		height: 140rpx;
		padding: 20rpx;
	}
	.gain{
		font-size: 30rpx;color:rgb(255,78,0);padding-left: 30rpx;
	}
	.gain::before{
		content: '奖励';
		color:rgb(51,51,51)
	}
	.gain::after{
		content: '积分';
		color:rgb(51,51,51)
	}
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
	.address{
		height: 50rpx;
		line-height: 50rpx;
		font-size: 26rpx;
		padding-left: 30rpx;
		color: rgb(102,102,102);
	}
	.goodsImg{
		margin-left: 30rpx;
		width: 160rpx;
		height: 160rpx;
		background-color: #09BB07;
		margin-bottom: 30rpx;
	}
	.bottom_tool{
		width: 100%;
		height: 100rpx;
		background-color: rgb(255,255,255);
		display: flex; 
		flex-direction: row;
		/* position: fixed; */
		border-top: 1rpx  solid #616262;
		/* bottom:calc(var(--window-bottom)); */
	}
	.bigBtn{
		width: 200rpx;
		margin-top: 13rpx;
		height: 74rpx;
		line-height: 74rpx;
		font-size: 32rpx;
		text-align: center;
		background-color: rgb(0,139,60);
		color: #FFFFFF;
		border-radius: 10rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;

	}
	.grayBtn{
		background-color: transparent;
		color: rgb(102,102,102)
	}
	.bigBtn::after{
		border-color: rgb(102,102,102);
		border-width: 1rpx;
	}
</style>
