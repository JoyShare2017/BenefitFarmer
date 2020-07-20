<template>
	<view class="page">
		
		<view class="greenTop">
			<view  style="margin-left: 30rpx;">
				<image v-if="userInfo" class="headImg" mode="" style="font-size: 114rpx;"
			      :src="getImgUrl(userInfo.user_img)"></image>
				<view v-if="!userInfo" class="iconfont icon-touxiang"  
				style="font-size: 114rpx;color: #BBBBBB;margin-top: -30rpx;"></view>
			</view>
			
			<view class="uni-column" style="margin-left: 20rpx;width: 60%;padding-top: 7rpx;">
				<view class="userInfo">
					昵称：{{userInfo?userInfo.user_nickname:'未设置昵称'}}
				</view>
				<view class="userInfo" style="font-size: 22rpx;">
					会员号：{{userInfo?userInfo.user_name:'暂无会员号'}}
				</view>
			</view>
			
			<view class="userInfo" @click="manage()" style="font-size: 22rpx;padding-top: 32rpx;">
				账号管理>
			</view>
		</view>
		
		<!-- 三个按钮 -->
		<view class="threeBtnView">
			<view class="threeBtn_item" v-for="(item,index) in firstSection" :key="index" @click="clickThree(index)">
				<!-- <image class="threeBtn_item_icon"  style="width: 48rpx;" mode=""></image> -->
				<view v-if="index==0" class="iconfont icon-order" 
				style="font-size: 44rpx;color: rgb(170,170,170);text-align: center;">
					
				</view>
				<view v-if="index==1" class="iconfont icon-ziyuanCircle"
				style="font-size: 44rpx;color: rgb(170,170,170);text-align: center;">
					
				</view>
				<view v-if="index==2" class="iconfont icon-feiyong"
				style="font-size: 44rpx;color: rgb(170,170,170);text-align: center;">
					
				</view>
				<view class="threeBtn_item_func">
					{{item.title}}
				</view>
				<view v-if="index!=1" class="threeBtn_item_func">
					0.00
				</view>
			</view>
		</view>
		
		<!-- 二维码分享 -->
		<view class="twoBtnView">
			<view class="twoBtn_item" v-for="(item,index) in secondSection" :key="index">
				
				<view v-if="index==0" class="uni-row" @click="myQR()">
					<view  class="iconfont icon-erweima share" style="font-size: 34rpx;color: rgb(5,144,66);">
						
					</view>
					<view class="share"  style="font-size: 28rpx;color: rgb(51,51,51);margin-left: 10rpx;">
						{{item.title}}
					</view>
				</view>
				
				<view v-if="index==1" class="uni-row" @click="clickShare()">
					<view  class="iconfont icon-fenxiang1 share" style="font-size: 34rpx;color: rgb(5,144,66);">
						
					</view>
					<view class="share"  style="font-size: 28rpx;color: rgb(51,51,51);margin-left: 10rpx;">
						{{item.title}}
					</view>
				</view>
				
				<!-- <image style="margin-top: 34rpx;width: 32rpx;height: 32rpx;" 
				src="../../static/yixuan-selectAddress/gou.png" mode="">
					{{item.title}}
				</image> -->
				
			</view>
		</view>
		
		<!-- 多功能列表 -->
		<view class="uni-list" style="margin-top: 10rpx;">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" 
			style="display: flex;flex-direction: column;"
			v-for="(fun,funcIndex) in thirdSection" :key="funcIndex" @click="jump(fun)">
				<view v-if="fun.index==5" style="width: 100%;height: 20rpx;background-color: #f4f4f4;">
					
				</view>
				<view class="uni-list-cell-navigate uni-navigate-right" style="width: 100%;">
					<view style="display: flex;flex-direction: row;width: 100%;">
						<view style="margin-left: 20rpx;width: 40%;">{{fun.title}}</view>
						<view v-if="fun.index==2" style="text-align: right;width: 60%;padding-right: 30rpx;">半年内未曾复购</view>
						<view v-if="fun.index==4" style="text-align: right;width: 60%;padding-right: 30rpx;color: rgb(224,18,18);">你还没有积分哦</view>
					</view>
				</view>
				
			</view>
		</view>
		
		<!-- <view @click="choose()">
			多选
		</view>
		<view @click="address()">
			地址
		</view> -->
	</view>
</template>

<script>
	export default{
		data(){
			return{
				userInfo:{},
				firstSection:[
					{
						index:0,
						title:'提成订单'
					},
					{
						index:1,
						title:'个人成就'
					},
					{
						index:2,
						title:'推广费'
					}
				],
				
				secondSection:[
					{
						index:0,
						title:'我的二维码',
					},
					{
						index:1,
						title:'分享给好友',
					}
					
				],
				thirdSection:[
					{
						index:0,
						title:'统计数据',
					},
					{
						index:1,
						title:'我的会员',
					},
					{
						index:2,
						title:'待复购会员',
					},
					{
						index:3,
						title:'我的订单',
					},
					{
						index:4,
						title:'我的积分',
					},
					{
						index:5,
						title:'客服',
					},
					{
						index:6,
						title:'新农人故事',
					},
					{
						index:7,
						title:'案例分享',
					},
					{
						index:8,
						title:'地推物料',
					},
					{
						index:9,
						title:'发票管理',
					}
					
				],
				
			}
		},
		onLoad() {
			this.getUserInfoWithKey('userInfo').then((info)=>{
				console.log(info);
				this.userInfo=info;
			})
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
						url:'./statisticData'
					})
				}else if(fun.index ==1){
					uni.navigateTo({
						url:'./myMember'
					})
				}else if(fun.index ==2){
					uni.navigateTo({
						url:'./myRebuyMember'
					})
				}else if(fun.index ==3){
					uni.navigateTo({
						url:'./MyOrder/myOrderList'
					})
				}else if(fun.index ==4){
					uni.navigateTo({
						url:'./myJiFen'
					})
				}else if(fun.index ==5){
					uni.navigateTo({
						url:'./customerService'
					})
				}else if(fun.index ==6){
					uni.navigateTo({
						url:'./farmerStory'
					})
				}
				else if(fun.index ==7){
					uni.navigateTo({
						url:'./caseShare/caseShareHome'
					})
				}
				else if(fun.index ==8){
					uni.navigateTo({
						url:'./promoteGoods'
					})
				}else if(fun.index ==9){
					uni.navigateTo({
						url:'./receiptManage/receiptMan'
					})
				}
			},
			address(){
				uni.navigateTo({
					url:'./userManage'
				})
				// uni.navigateTo({
				// 	url:'./addAddress'
				// })
			},
			myQR(){
				uni.navigateTo({
					url:'./myQRCode/myQRCode'
				})
			},
			clickShare(){
				
			},
			getImgUrl(icon) {
				return this.mainServer + icon;
			},
		}
	}
</script>

<style>
	.greenTop{
		background-color: #1AAD19;
		height: 300rpx;
		display: flex;
		padding-top: 30rpx;
		flex-direction: row;
	}
	.headImg{
		width: 114rpx;
		height: 114rpx;
		border-radius: 57rpx;
		background-color: #007AFF;
		/* font-size: 114rpx; */
	}
	.userInfo{
		height: 50rpx;
		line-height: 50rpx;
		font-size: 34rpx;
		color: #FFFFFF;
	}
	
	.threeBtnView{
		margin-left: 30rpx;
		width: calc(100% - 60rpx);
		height: 184rpx;
		border-radius: 20rpx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		margin-top: -100rpx;
		z-index: 100;
	}
	.threeBtn_item{
		display: flex;
		flex-direction: column;
		width: 33.33%;
		text-align: center;
	}
	.threeBtn_item_icon{

		width: 48rpx;
		height: 48rpx;
		margin-top: 40rpx;
		align-self: center;
		background-color: #0A98D5;
	}
	.threeBtn_item_func{
	
		height: 40rpx;
		line-height: 40rpx;
		font-size: 28rpx;
	}
	.twoBtnView{
		margin-top: 10rpx;
		height: 100rpx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;

	}
	.twoBtn_item{
		width: 50%;
		height: 100rpx;
		/* text-align: center; */
		/* align-items: center; */
	}
	
	.share{
		height: 100rpx;
		line-height: 100rpx;
		/* width: 50%; */
		text-align: center;
		margin-left: 20%;
	}
	
</style>
