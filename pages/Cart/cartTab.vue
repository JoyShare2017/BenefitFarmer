<template>
	<view class="page">
		
		<view class="address" style="font-size: 26rpx;color: rgb(255,78,0);height: 80rpx;line-height: 80rpx;">
		    首单支付后,重复消费立减20%,相当于8折优惠
		</view>
		
		<view class="uni-list" style="margin-bottom: 100rpx;">
			<view class="uni-list-cell" style="background-color: #ebeef1;display: flex;flex-direction: column;">
				<view class="cellHolder" v-for="(item,index) in goodsList" :key="index">
					
					<view  style="display: flex;flex-direction: row;margin-top: 20rpx;">
					
					<view v-if="index==0"  class="iconfont icon-xuanzhongyuandian1"
					style="font-size: 50rpx;margin-top: 20rpx;margin-left: 20rpx;color: rgb(153,153,153);">
						
					</view>
					<view v-if="index>0"  class="iconfont icon-xuanzhong"
					style="font-size: 50rpx;margin-top: 20rpx;margin-left: 20rpx;color: rgb(0,139,60);">
						
					</view>
					    
						<image class="goodsImg" mode=""></image>
						
						<view class="uni-column" style="width: 100%;">
							<view class="uni-row"style="" >
								<view class="address" style="font-size: 28rpx;width: 80%;">
									316颗粒化肥
								</view>
								<view class="iconfont icon-lajitong" @click="dele()">
									
								</view>
							</view>
							
							<view class="sku">
								小包
							</view>
							<view class="uni-row" style="margin-top: 20rpx;">
								<view class="address" style=" color: #FC0107;width: calc(100% - 260rpx)">
									￥120.00
								</view>
								<wm-numberBox  model='1' min='1' value='1' @change="numberChange(2,1)" >
									
									
								</wm-numberBox>
							</view>
							
						</view>
					</view>
					
					<!-- 积分提示 -->
					<view class="uni-row" style="margin-top: 20rpx;height: 60rpx;margin-left: 30rpx;margin-right: 30rpx;background-color: rgb(233,213,203);border-radius: 10rpx;margin-bottom: 20rpx;">
						<image style="margin-left: 10rpx;margin-top: 10rpx;width: 40rpx;height: 40rpx;" src="../../static/yixuan-selectAddress/gou.png" mode=""></image>
						<view class="address" style="margin-top: 5rpx;  color: rgb(255,41,0);">
							购买1件可得10积分,积分可抵现
						</view>
						
						
					</view>
				</view>
			</view>
		</view>
		
		<!-- 底部工具栏 -->
		<view   class="bottom_tool">
			<view v-if="!isAllSelected" @click="allSel()" class="cartBtn uni-row" style="width: 20%;">
				<view  class="iconfont icon-xuanzhong" 
				style="color: rgb(0,139,60);font-size: 34rpx;margin-top: 20rpx;margin-left: 20rpx;">
					
				</view>
				<view class="allSel">
					取消
				</view>
			</view>
			<view v-if="isAllSelected" @click="allSel()" class="cartBtn uni-row" style="width: 20%;">
				<view  class="iconfont icon-xuanzhongyuandian1" 
				style="font-size: 34rpx;margin-top: 20rpx;margin-left: 20rpx;color: rgb(153,153,153);">
					
				</view>
				<view class="allSel">
					全选
				</view>
			</view>
			
			
			
			<view style="width: 40%;margin-top: 10rpx;">
				<view class="uni-row">
					<view class="sum" style="color: rgb(102,102,102);font-size: 28rpx;">
						合计:
					</view>
					<view class="sum" style="padding-left: 0rpx;color: rgb(254,70,70);font-size: 28rpx;">
						￥0.00
					</view>
				</view>
				<view class="sum" style="color: rgb(153,153,153);font-size: 20rpx;">
					不含运费
				</view>
			</view>
			<view class="bigBtn" style="color: #FFFFFF;background-color: #1AAD19;" @click="buyNow()">
				结算
			</view>
		
		</view>
		
		
		
	</view>
</template>

<script>
	import wmNumberBox from "@/common/wm-number-box.vue"
	export default{
		components: {wmNumberBox},
		data(){
			return{
				goodsList:[
					{},{},{},{},{}
				],
				isAllSelected:false
			}
		},
		methods:{
			dele(){
				uni.showModal({
					title: '温馨提示',
					content: '确认要删除该商品吗？',
					confirmText:'删除',
					confirmColor:'rgb(255,35,35)',
					success: function(res) {
						if (res.confirm) {
							console.log('点击确定');
							
									
						}
					}
				})
				
			},
			numberChange(value,id){
				console.log(value);
			},
			allSel(){
				this.isAllSelected=!this.isAllSelected;
			}
		}
	}
</script>

<style>
	page{background-color: #ebeef1;}
	.cellHolder{
		margin-top: 10rpx;
		margin-left: 20rpx;
		width: calc(100% - 40rpx);
		background-color: #FFFFFF;
		border-radius: 10rpx;
		margin-bottom: 10rpx;
	}
	.address{
		height: 50rpx;
		line-height: 50rpx;
		font-size: 32rpx;
		padding-left: 30rpx;
	}
	
	.allSel{
		height: 50rpx;
		line-height: 50rpx;
		font-size: 24rpx;
		padding-left: 10rpx;
		margin-top: 25rpx;
		color: rgb(102,102,102);
	}
	
	.sum{
		height: 40rpx;
		line-height: 40rpx;
		font-size: 32rpx;
		padding-left: 30rpx;
	}
	.goodsImg{
		margin-left: 30rpx;
		width: 160rpx;
		height: 160rpx;
		background-color: #09BB07;
	}
	.sku{
		margin-left: 30rpx;
		background-color: rgb(249,249,249);
		color: rgb(153,153,153);
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
		width: 100rpx;
	}
	
	.bottom_tool{
		width: 100%;
		height: 100rpx;
		background-color: #FFFFFF;
		display: flex; 
		flex-direction: row;
		position: fixed;
		border-top: 1rpx  solid #E5E5E5;
		bottom:calc(var(--window-bottom));
	}
	.editBtnImg{
		margin-top: 30rpx;
		width: 40rpx;
		height: 40rpx;
		line-height: 99rpx;
	}
	
	.cartBtn{
		
	}
	.bigBtn{
		width: 40%;
		height: 100rpx;
		line-height: 100rpx;
		font-size: 32rpx;
		text-align: center;
		border-left: 1rpx  solid #616262;
	}
</style>
