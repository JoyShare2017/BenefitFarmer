<template>
	<view class="page">
		<!-- 顶部立即绑定 -->
		<view v-if="" class="bind">
			
			
			<view class="iconfont icon-guanbi close" 
			@click="closeMe()" >
				
			</view>
			<image class="logo" src="" mode=""></image>
			<view class="uni-column">
				<view style="margin-top: 10rpx;height: 40rpx;line-height: 40rpx;font-size: 32rpx;color: #FFFFFF;">
					晟农博316
				</view>
				<view style="margin-top: 0rpx;height: 40rpx;line-height: 40rpx;font-size: 28rpx;color: #FFFFFF;">
					补充植物全营养
				</view>
				
				
			</view>
			<button class="bindbtn" @click="gotoLogin()"> 立即绑定</button>
		</view>
		<!-- 轮播 -->
		<swiper class="bannerHolder" :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(ban,index) in bannerData" :key="index">
				<navigator url="../Detail/newsDetail">
					<image class="bannerImage" :src="getImgUrl(ban.image)" mode="aspectFill"></image>
				</navigator>
			</swiper-item>
		</swiper>
		
		<view style="width: 100%;height:190rpx;">
			<image class="slogan" :src="getImgUrl('upload/uploads/images/xuanchuan.png')"  mode=""></image>
		</view>
		<!-- 商品列表 -->
		<view class="uni-list page"  style="margin-top: 20rpx;">
			<view class="uni-list-cell" style="margin-bottom: 20rpx;flex-direction: column;background-color: rgb(240,240,240);">
				<view class="cellHolder" v-for="(item,index) in goodsList" :key="index">
					<image style="width: 100%;background-color: #09BB07;height: 490rpx;border-radius:10rpx 10rpx 0rpx 0rpx;"
					 mode="" :src="getImgUrl(item.thumb)"  @click="seeDetail(item.id)"></image>
					
					<view  class="uni-row">
						<view class="sku" style="width: 50%;">
							{{item.name}}
						</view>
						<view class="detail" style="width: 50%;text-align: right;padding-right: 30rpx;">
							{{item.evaluate_num}}人评论
						</view>
					</view>
					
					<view class="detail">
						商品描述:{{item.describe}}
					</view>
					
					<view style="display: flex;flex-direction: row;padding-right: 30rpx;">
						<view class="price">
							￥ {{item.price}}
						</view>
						<button class="rebuy">
						复购立省{{item.price*item.discount}}
						</button>
						<view class="iconfont icon-gouwuche" style="font-size: 40rpx;" 
						@click="addCart()">
							
						</view>
					</view>
					
					
				</view>
			</view>
		</view>
		
		<!-- 加购弹出的透明view -->
		<view  v-if="isShowAlphaView" class="wrapper"
		
		@touchmove.stop.prevent="moveHandle"
		 @click="seeQR()">
			<button type="default" @click="cancelAlpha()">取消</button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				isShowBind:false,
				isShowAlphaView:false,
				bannerData:[],
				page:1,
				goodsList:[]
			}
		},
		onLoad() {
			
			this.getBanner();
			this.getGoods();
		},
		methods:{
			getBanner(){
				this.requestFromServer({
					url:'/index/index/homeBannerList',
					data:{
					}
				}).then((res)=>{
					console.log(res);
					this.bannerData=res.data;
							
				})
			},
			getGoods(){
				this.requestFromServer({
					url:'/index/index/productList',
					data:{
						page:this.page
					}
				}).then((res)=>{
					console.log(res);
					if(this.page==1){
						this.goodsList=[];
					}
					this.goodsList=this.goodsList.concat(res.data);
							
				})
			},
			closeMe(){
				this.isShowBind=false;
			},
			getImgUrl(icon) {
				return this.mainServer + icon;
			},
			
			seeDetail(theId){
				uni.navigateTo({
					url:'./goodsDetail?query='+theId
				})
				
			},
			
			addCart(){
				this.isShowAlphaView=true;
			   // uni.setTabBarBadge({
			   //   index: 1,
			   //   text: '2'
			   // })	
			},
			gotoLogin(){
				uni.navigateTo({
					url:'../Login/login'
				})
			},
			moveHandle(){
				//蒙版出现 禁止滑动
			},
			cancelAlpha(){
				this.isShowAlphaView=false;
			}
		}
	}
</script>

<style>
	.bind{
		background-color: rgb(50,50,50);
		height: 100rpx;
		display: flex;
		flex-direction: row;
	}
	.close{
		margin-left: 30rpx;
		margin-top: 25rpx;
		width: 30rpx;
		height: 30rpx;
		color: #FFFFFF;
	}
	.logo{
		margin-left: 20rpx;
		margin-top: 20rpx;
		width: 60rpx;
		height: 60rpx;
		background-color: #1AAD19;
	}
	
	.bindbtn{
		background-color: rgb(0,195,70);
		color: #FFFFFF;
		margin-top: 20rpx;
		height: 60rpx;
		line-height: 60rpx;
		width: 150rpx;
		margin-right: 20rpx;
		font-size: 26rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
	}
	.bannerHolder {
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		width: 100%;
		height: 400rpx;
	}
	
	.bannerImage {
		width: calc(100% - 60rpx);
		margin-left: 30rpx;
		margin-right: 30rpx;
		border-radius: 20rpx;
		height: 380rpx;
	}
	.slogan {
		width: calc(100% - 60rpx);
		margin-left: 30rpx;
		margin-right: 30rpx;
		border-radius: 40rpx;
		height: 170rpx;
		background-color: #2C405A;
	}
	.cellHolder{
		/* margin-left: 30rpx; */
		/* margin-right: 30rpx; */
		margin: 10rpx 30rpx 10rpx 30rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		/* display: flex; */
		
		/* flex-direction: column; */
		width: calc(100% - 60rpx);
	}
	.sku{
		padding-left: 30rpx;
		color: rgb(0,0,0);
		font-size: 32rpx;
	}
	.detail{
		padding-left: 30rpx;
		color: rgb(135,135,135);
		font-size: 28rpx;
	}
	.price{
		padding-left: 30rpx;
		color: rgb(0,0,0);
		font-size: 44rpx;
		
	}
	
	.rebuy {
		/* width: 240rpx; */
		height: 40rpx;
		color: #333333;
		font-size: 24rpx;
		background-color: transparent;
		margin-top: 10rpx;
		line-height: 40rpx;
		color: #FC0107;
		margin-left: 20rpx;
		margin-top: 20rpx;
	}
	
	.rebuy::after{
		border-color: #FC0107;
		border-radius: 10rpx;
	}
	.addCart{
		width: 80rpx;
		height: 40rpx;
		
	}
	.wrapper{
		/* z-index: 60; */
		position: absolute;
		top: 0rpx;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: rgba(22,22,22,0.5);
	}	
	
</style>
