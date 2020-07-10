<template>
	<view class="page">
		
		<!-- 轮播 -->
		<swiper class="bannerHolder" :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(ban,index) in bannerData" :key="index">
				<navigator url="./farmerStoryDetail">
					<image class="bannerImage" :src="getImgUrl(ban.focus_img)" mode="aspectFill"></image>
				</navigator>
			</swiper-item>
		</swiper>
		
		
		<!-- 商品列表 -->
		<view class="uni-list"  style="margin-top: 20rpx;">
			<view class="uni-list-cell" style="margin-bottom: 20rpx;">
				<view class="cellHolder" @click="seeDetail()">
					
					<view class="price">
						新农人故事1新农人故事1新农人故事1新农人故事1新农人故事1新农人故事1新农人故事1新农人故事1
					</view>
					
					
					<image class="img" mode=""></image>
					
					
					
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
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
			
			getImgUrl(icon) {
				// return this.mainServer + icon;
				return icon;
			},
			
			seeDetail(){
				uni.navigateTo({
					url:'./farmerStoryDetail'
				})
				
			},
			
			
		}
	}
</script>

<style>
	
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
		border-radius: 10rpx;
		height: 380rpx;
	}
	
	.cellHolder{
		margin-left: 30rpx;
		margin-right: 30rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		display: flex;
		padding-top: 20rpx;
		flex-direction: row;
		/* background-color: #007AFF; */
		width: 100%;
		height: 200rpx;
	}
	
	.price{
		padding-left: 20rpx;
		color: rgb(51,51,51);
		font-size: 36rpx;
		font-weight: bold;
		width: calc(100% - 240rpx);
		vertical-align: middle;
		line-height: 53rpx;
		height: 160rpx;
		overflow: hidden;
	}
	.img{
		width: 200rpx;
		height: 160rpx;
		background-color: #09BB07;
	}
	
	
</style>
