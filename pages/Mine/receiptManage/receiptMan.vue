<template>
	<view class="page">
		
		<view class="greenTop">
			<view class="userInfo">
					0.00
				</view>
				<view class="kkfpje">
					可开票金额(￥)
				</view>
		</view>
		
		
		
		
		<!-- 多功能列表 -->
		<view class="uni-list" style="margin-top: 10rpx;">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" 
			style="display: flex;flex-direction: column;"
			v-for="(fun,funcIndex) in thirdSection" :key="funcIndex" @click="jump(fun)">
				
				<view class="uni-list-cell-navigate uni-navigate-right" style="width: 100%;">
					<view style="display: flex;flex-direction: row;width: 100%;">
						<view style="margin-left: 20rpx;width: 40%;">{{fun.title}}</view>
						<view v-if="fun.index==0" style="text-align: right;width: 60%;padding-right: 30rpx;color: rgb(153,153,153);">暂无可用开票金额</view>
						<view v-if="fun.index==1" style="text-align: right;width: 60%;padding-right: 30rpx;color: rgb(153,153,153);">您还未开过发票</view>
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
				
				thirdSection:[
					{
						index:0,
						title:'申请开票',
					},
					{
						index:1,
						title:'开票历史',
					},
					{
						index:2,
						title:'发票须知',
					},
					{
						index:3,
						title:'开票流程',
					}
				]
				
			}
		},
		methods:{
			async choose(){
				var pics = await this.chooseImgAndUpload({
					count:3
				});
				
				console.log(pics);
			},
			manage(){
				uni.navigateTo({
					url:'./userManage'
				})
				// uni.navigateTo({
				// 	url:'../Login/login'
				// })
			},
			clickThree(index){
				if(index==0){
					uni.navigateTo({
						url:'./commissionOrder'
					})
				}else if(index==1){
					uni.navigateTo({
						url:'./myAchieve'
					})
				}else if(index==2){
					uni.navigateTo({
						url:'./PromoteFee'
					})
				}
			},
			jump(fun){
				console.log(fun);

				if(fun.index ==0){
					uni.navigateTo({
						url:'./receiptApply'
					})
				}else if(fun.index ==1){
					uni.navigateTo({
						url:'./receiptHistory'
					})
				}else if(fun.index ==2){
					uni.navigateTo({
						url:'./receiptKnow'
					})
				}else if(fun.index ==3){
					uni.navigateTo({
						url:'./receiptPath'
					})
				}
			},
			
		}
	}
</script>

<style>
	page{background-color: rgb(240,240,240)}
	.greenTop{
		background-color: #FFFFFF;
		height: 290rpx;
		padding-top: 90rpx;
	}
	
	.userInfo{
		height: 80rpx;
		line-height: 80rpx;
		font-size: 58rpx;
		color: rgb(255,78,0);
		text-align: center;
	}
	.kkfpje{
		height: 50rpx;
		line-height: 50rpx;
		font-size: 28rpx;
		color: rgb(51,51,51);
		text-align: center;
	}
	
</style>
