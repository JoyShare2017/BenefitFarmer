<template>
	<view class="page">
		
		<!-- 消息列表 -->
		<view class="uni-list" >
			<view class="uni-list-cell" style="background-color: #F4F5F6;">
				<!-- 白色view -->
					<view    class="cell_holder" @click="detail()">
						<view class="uni-row" style="padding-top: 20rpx;padding-bottom: 20rpx;border-bottom: 1rpx solid #EBEEF1;">
							<view class="order_waitPay" style="width: calc(100% - 500rpx);">
								待付款
							</view>
							<view class="order_number">
								订单编号:2020062960003295
							</view>
							<button class="duplicateBtn" type="default" @click="dupOrderNum()">
								复制
							</button>
						</view>
						
						<view  style="display: flex;flex-direction: row;margin-top: 20rpx;">
						
							<image class="goodsImg" mode=""></image>
							
							<view class="uni-column">
								<view class="address" style="font-size: 28rpx;">
									316颗粒化肥
								</view>
								<view class="uni-row" style="width: 100%;">
									<view class="address" style=" color: rgb(153,153,153);width: 50%;font-size: 24rpx;">
										x1
									</view>
									<view class="address" style=" color: rgb(51,51,51);width: 50%;font-size: 24rpx;text-align: right;padding-right: 30rpx;">
										￥128.00
									</view>
								</view>

									<view class="address" style=" color: rgb(102,102,102);">
										下单时间：2020-06-29 10:26:03
									</view>
									<view class="address" style=" color: rgb(102,102,102);margin-bottom: 20rpx;">
										合计金额：￥128.00（共计1件商品）
									</view>

								
							</view>
						</view>
						
						<!-- 放按钮的view -->
						<view style="border-top: 1rpx solid #E5E5E5;padding-top: 30rpx;">
							<view class="uni-row" style="">
								<button class="grayBtn" type="default" style="margin-left: calc(100% - 440rpx);">
									取消订单
								</button>
								<button class="oragneBtn" type="default">
									在线支付
								</button>
							</view>
							<view class="address" style="font-size: 24rpx;color: rgb(153,153,153);text-align: right;padding-right: 20rpx;">
								订单将在 14: 59 后自动取消
							</view>
						</view>
						
						
						
					</view>
				
				
				
			</view>
			
		</view>
		<view class="loading-more">
		    <text class="loading-more-text" @click="loadMore()">{{loadingText}}</text>
		</view>
		
	</view>
</template>

<script>

	export default{
		
		data(){
			return{
				theMid:'',
				showNewsData: [
					{
						title:'最后4小时！最后4小时！最后4小时！最后4小时！',
						content:'重复关注会员：昵称为【开心就好】的朋友，在2020-06-15 10:36:03已经关注成为【惠农6:03已经关公',
						time:1593571037
					},
					{
						title:'会员通知',
						content:'618最后冲刺，看直播抽免单、赢万千618最后冲刺，看直播抽免单、赢万千',
						time:1593571037
					},
					{
						title:'订单通知',
						content:'618最后冲刺，看直播抽免单、赢万千618最后冲刺，看直播抽免单、赢万千',
						time:1593571037
					},
					{
						title:'我的评价',
						content:'618最后冲刺，看直播抽免单、赢万千618最后冲刺，看直播抽免单、赢万千',
						time:1593571037
					}
				],
				
				page:1,
				loadingText: '正在加载数据...',
			}
		},
		onReachBottom() {
		    this.page++;
		    this.loadingText='正在加载更多数据...';
		    this.getServicList();
		},
		onPullDownRefresh() {
			this.getServicList();
		},
		onLoad(eee) {
			
			var _this = this;
			uni.getStorage({
				key: 'mid',
				success: function(res) {
					console.log('getStoragegemid' + res.data);
					_this.theMid = res.data;
					// _this.getServicList();
				}
			});
			// this.getServicList();
		},
		methods:{
			
			
			async getServicList(){
				
				var serverUrl="Home/Message/getList";
				var data={
					mid:this.theMid,
					type:this.currentIndex,
					limit:10,
				    page:this.page
				}
				var res = await this.requestFromServer({
					url:serverUrl,
					data:data
				})
				if(this.page==1){
					this.showNewsData=[];
				}
				uni.stopPullDownRefresh();
				if(res.data){
					this.showNewsData=this.showNewsData.concat(res.data);
					if(res.data.length<10){
						this.loadingText='没有更多数据了';
					}else{
						this.loadingText='加载更多数据...';
					}
				}else{
					this.loadingText='没有更多数据了';
				}
				
			},
			detail(){
				uni.navigateTo({
					url:'./myOrderDetail'
				})
			},
			dupOrderNum(ddbh){
			    uni.setClipboardData({
			    	data: ddbh
			    });
				uni.showToast({
					icon:'none',
					title:'订单号已复制'
				})
			},
			
			dateFormat:function(time) {
				return this.getDateSecond(time);
			},
		}
	}
</script>

<style>
	page{background-color: #ebeef1;}

	
	.timeView{
		background-color: rgb(218,218,218);
		margin-top: 20rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border-radius: 40rpx;
		margin-left: 30%;
		width: 40%;
		color: #FFFFFF;
	}
	
	.cell_holder{
		/* margin-top: 20rpx; */
		margin-top: 10rpx;
		margin-left: 20rpx;
		width: calc(100% - 40rpx);
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		border-radius: 10rpx;

	}
	
	.order_waitPay{
		padding-left: 20rpx;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 28rpx;
		color: rgb(255,78,0);
		
	}
	.order_number{
		height: 80rpx;
		line-height: 80rpx;
		font-size: 26rpx;
		color: rgb(153,153,153);
	}
	
	.cell_title{
		padding-left: 20rpx;
		width: 60%;
		height: 80rpx;
		line-height: 80rpx;
		overflow: hidden;
		font-size: 40rpx;

	}
	.cell_seeDetail{
		padding-right: 20rpx;
		width: 40%;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 32rpx;
		text-align: right;
	}
	.cell_content{
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;


		line-height: 50rpx;
		overflow: hidden;
		font-size: 32rpx;
		color: #808080;
	}
	.duplicateBtn{
		margin-left: 20rpx;
		margin-top: 20rpx;
		height: 36rpx;
		line-height: 36rpx;
		font-size: 24rpx;
		width: 90rpx;
		border-radius: 4rpx;
		color: rgb(51,51,51);
		text-align: center;
		padding-left: 10rpx;
		padding-right: 10rpx;
	}
	.duplicateBtn::after{
		border-color: rgb(51,51,51);
	}
	.address{
		height: 50rpx;
		line-height: 50rpx;
		font-size: 28rpx;
		padding-left: 30rpx;
	}
	.goodsImg{
		margin-left: 30rpx;
		width: 160rpx;
		height: 160rpx;
		background-color: #09BB07;
	}
	
	.grayBtn{
		/* margin-left: 20rpx; */
		/* margin-top: 20rpx; */
		height: 56rpx;
		line-height: 56rpx;
		font-size: 28rpx;
		width: 180rpx;
		border-radius: 4rpx;
		color: rgb(51,51,51);
		text-align: center;
	}
	.grayBtn::after{
		border-color: rgb(51,51,51);
	}
	.oragneBtn{
		margin-left: 40rpx;
		/* margin-top: 20rpx; */
		height: 56rpx;
		line-height: 56rpx;
		font-size: 28rpx;
		width: 180rpx;
		border-radius: 4rpx;
		color: rgb(255,78,0);
		text-align: center;
	}
	.oragneBtn::after{
		color: rgb(255,78,0);
		border-color: rgb(255,78,0);
	}
	
	.loading-more {
		align-items: center;
		justify-content: center;
		padding-top: 14px;
		padding-bottom: 14px;
		text-align: center;
		background-color: transparent;
		
	}
	
	.loading-more-text {
		font-size: 28upx;
		color: #999;
	}
	
</style>
