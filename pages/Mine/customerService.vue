<template>
	<view class="page" style="background-color: #FFFFFF;">
		<view v-if="isVisitor" class="uni-row">
			<view class="halfItem">

				<view class="iconfont icon-kefucopy ser_img">
					
				</view>
				<view class="commonText">
					平台客服
				</view>
				<view class="commonText time">
					服务时间 9:00-18:30
				</view>
			</view>
			<view class="halfItem">
				<view class="iconfont icon-lianxiren ser_img">
					
				</view>
				<view class="commonText">
					县级负责人
				</view>
				<view class="commonText time">
					服务时间 9:00-18:30
				</view>
			</view>
		</view>
		<view v-if="!isVisitor" class="uni-row">
			<view class="halfItem" style="margin-left: 25%;">
				<image class="ser_img" src="" mode=""></image>
				<view class="commonText">
					平台客服
				</view>
				<view class="commonText time">
					服务时间 9:00-18:30
				</view>
			</view>
			
		</view>
		<view style="height: 20rpx;background-color: #E5E5E5;">
			
		</view>
		
		<view class="commonText big" style="padding-left: 30rpx;padding-right: 30rpx;margin-top: 30rpx;">
			客服售后说明
		</view>
		<view class="commonText det" style="padding-left: 30rpx;padding-right: 30rpx;margin-top: 20rpx;">
			1.如果产品严重破损，请拒收；
		</view>
		<view class="commonText det" style="padding-left: 30rpx;padding-right: 30rpx;">
			2.产品没有拆开，不想赢二次销售的情况下，拍下货物15天内可以无条件退货；
		</view>
		<view class="commonText det" style="padding-left: 30rpx;padding-right: 30rpx;">
			3.非质量问题退货，需承担发货和退货产生的快递费用；
		</view>
		<view class="commonText det" style="padding-left: 30rpx;padding-right: 30rpx;">
			4.系统确认收货后，费质量原因概不办理退款退货；
		</view>
		<view class="commonText det" style="padding-left: 30rpx;padding-right: 30rpx;">
			5.如因质量问题需退货，请拍照联系客服
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				isVisitor:true
			}
		}
	}
</script>

<style>
	.halfItem{
		width: 50%;
		padding-top: 40rpx;
	}
	
	.ser_img{
		border-radius: 63rpx;
		text-align: center;
		font-size: 126rpx;
		color: rgb(153,153,153);
	}
	
	
	.commonText{
		font-size: 28rpx;
		color: rgb(53,53,53);
		text-align: center;
		/* height: 50rpx; */
		line-height: 50rpx;
	}
	.time{
		font-size: 24rpx;
		color: rgb(102,102,102);
		margin-bottom: 30rpx;
	}
	.big{
		font-size: 30rpx;
		color: rgb(51,51,51);
		text-align: left;
	}
	.det{
		font-size: 28rpx;
		color: rgb(102,102,102);
		text-align: left;
	}
</style>
