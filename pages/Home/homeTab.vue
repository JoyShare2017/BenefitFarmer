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
					<image class="bannerImage" :src="getImgUrl(ban.focus_img)" mode="aspectFill"></image>
				</navigator>
			</swiper-item>
		</swiper>
		
		<view style="width: 100%;height:190rpx;">
			<image class="slogan" src=""  mode=""></image>
		</view>
		<!-- 商品列表 -->
		<view class="uni-list page"  style="margin-top: 20rpx;">
			<view class="uni-list-cell uni-column" style="margin-bottom: 20rpx;">
				<view class="cellHolder" >
					<image style="width: 100%;background-color: #09BB07;height: 490rpx;"
					 mode="" @click="seeDetail()"></image>
					
					<view  class="uni-row">
						<view class="sku" style="width: 50%;">
							316颗粒底肥(2袋)
						</view>
						<view class="detail" style="width: 50%;text-align: right;">
							2333人评论
						</view>
					</view>
					
					<view class="detail">
						改善土壤 提高肥效吸收
					</view>
					
					<view style="display: flex;flex-direction: row;padding-right: 30rpx;">
						<view class="price">
							￥ 120
						</view>
						<button class="rebuy">
						复购立省20.00
						</button>
						<view class="iconfont icon-gouwuche" style="font-size: 40rpx;" @click="addCart()">
							
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
				bannerData:[{
					focus_img:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1593565729&di=bf0297a1bb18781b89c9725ff687cd53&src=http://img007.hc360.cn/m1/M07/9D/91/wKhQcFRRt5yEXtZLAAAAAMD3N9g207.jpg'
				},
				{
					focus_img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593575815914&di=243ef1045c91ecb424f64816720fdb6b&imgtype=0&src=http%3A%2F%2Fsup.user.img38.51sole.com%2Fimages3%2F20150409%2F1556126_2015491112220.jpg'
				}],
				dataList:[]
			}
		},
		methods:{
			closeMe(){
				this.isShowBind=false;
			},
			getImgUrl(icon) {
				// return this.mainServer + icon;
				return icon;
			},
			
			seeDetail(){
				uni.navigateTo({
					url:'./goodsDetail'
				})
				
			},
			
			addCart(){
				this.isShowAlphaView=true;
			   uni.setTabBarBadge({
			     index: 1,
			     text: '2'
			   })	
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
		margin-left: 30rpx;
		margin-right: 30rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		/* display: flex; */
		
		/* flex-direction: column; */
		/* background-color: #007AFF; */
		width: 100%;
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
