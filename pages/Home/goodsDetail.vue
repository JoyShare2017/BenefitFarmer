<template>
	<view class="page" >
		
		<!-- 轮播 -->
		<swiper v-if="theNewsDetail.more_image" class="bannerHolder" :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(ban,index) in theNewsDetail.more_image.split(',')" :key="index">
				<!-- <navigator url="../Detail/newsDetail"> -->
					<image class="bannerImage" :src="getImgUrl(ban)" mode="aspectFill"></image>
				<!-- </navigator> -->
			</swiper-item>
		</swiper>
		
		
		<!-- 商品简介 -->
		<view style="background-color: #FFFFFF;padding-top: 20rpx;">
			<view class="uni-row">
				<view class="price">
					￥{{theNewsDetail.price}}
				</view>
				<button class="saveBtn" type="default">
					复购立省{{theNewsDetail.price}}*{{theNewsDetail.discount}}
				</button>
			</view>
			<view class="goodsname">
				{{theNewsDetail.name}}
			</view>
			<view class="goodsdetail">
				{{theNewsDetail.remarks}}
			</view>
		</view>
		
		<!-- 多功能列表1 -->
		<view class="uni-list" style="margin-top: 20rpx;">
			<view class="uni-list-cell "  
			style="display: flex;flex-direction: column;"
			v-for="(fun,funcIndex) in firstSection" :key="funcIndex">
				
				<view  :class='fun.index==2?"uni-list-cell-navigate uni-navigate-right":"uni-list-cell-navigate"' style="">
					<view style="display: flex;flex-direction: row;width: 100%;">
						<view class="other_gray_light" style="margin-left: 20rpx;width: 20%;">{{fun.title}}</view>
						
						<view v-if="fun.index==0" class="uni-row">
							
							<view class="other_gray">购买可得</view>
							<view class="other_pink">
								{{theNewsDetail.bonus_points}}
							</view>
							<view class="other_gray">积分，积分可抵现</view>
							</view>
						<view v-if="fun.index==1" class="other_gray" style="width: 80%;">
							{{theNewsDetail.welfare}}
						</view>
						<view v-if="fun.index==2" class="other_gray">
							{{selTheSku?selTheSku.name:'请选择规格数量'}}
						</view>
					</view>
				</view>
				
			</view>
		</view>
		
		<!-- 商品评价 -->
		<view class="uni-list" style="margin-top: 20rpx;">
			<view class="uni-list-cell "  
			style="display: flex;flex-direction: column;">
				
				<view  class="uni-list-cell-navigate uni-navigate-right" style="" @click="seeComment()">
					<view style="display: flex;flex-direction: row;width: 100%;">
						<view class="other_gray" style="margin-left: 20rpx;width: 50%;font-size: 28rpx;">
						商品评价（{{theNewsDetail.reserve_num}}）
						</view>
						
						<view class="other_gray_light" style="width: 50%;text-align: right;padding-right: 30rpx;">
							查看全部
						</view>
						
						
					</view>
				</view>
				
			</view>
		</view>
		
		<view class="other_gray" style="margin-top: 40rpx;text-align: center;">
			商品视频
		</view>
		<image class="video_img" src="" mode=""></image>
		
		
		
		<view   class="bottom_tool">
			<view class="" style="width: 20%;">
				<view class="redNum">
					{{gouwucheNum}}
				</view>
				<view class="iconfont icon-gouwuche" style="font-size: 40rpx;width: 100%;text-align: center;">
					
				</view>
				<view class="cartBtn">
					购物车
				</view>
			</view>
			
			<view class="bigBtn" style="color: rgb(51,51,51);" @click="addToCart()">
				加入购物车
			</view>
			<view class="bigBtn" style="color: #FFFFFF;background-color: rgb(0,119,51);" 
			@click="buyNow()">
				立即购买
			</view>
		
		</view>
		
		
		<!-- 加购弹出的透明view -->
		<view  v-if="isShowAlphaView" class="wrapper"
		@touchmove.stop.prevent="moveHandle">
			<view class="alphaWhiteV">
				<view class="uni-row" >
					<image class="alp_img" :src="getImgUrl(theNewsDetail.thumb)"></image>
					<view style="width: 100%;">
						<view style="width: 100%;text-align: right;" 
						@click="cancelAlpha()">
							<view class="iconfont icon-guanbi">
								
							</view>
						</view>
						<text class="alp_price" style="font-size: 24rpx;">
							￥
						</text>
						<text class="alp_price" style="padding-left: 0rpx;">
							{{theNewsDetail.price}}
						</text>
						<view class="alp_name">
							{{theNewsDetail.name}}
						</view>
						<view class="alp_skuname" style="">
							请选择规格数量
						</view>
						
					</view>
					
				</view>
				<view class="apl_sku_type">
					规格
				</view>
				
				<view class="uni-row">
					<button v-for="(item,index) in skuList" :key="index"
					@click="clickSKU(item)"
					:class="selTheSku===item?'sku_btn':'sku_btn_unsel'">
						{{item.name}}
					</button>
					
				</view>
				
				<view class="uni-row" style="padding-top: 30rpx;">
					<view class="apl_sku_type" style="width: calc(100% - 240rpx);">
						数量
					</view>
					
					
					
					<wm-numberBox  model='1' min='1' value='1'
					@change="change($event,1)" >
					</wm-numberBox>
					
					
				</view>
				
			</view>
		</view>


	</view>


</template>

<script>

	import wmNumberBox from "@/common/wm-number-box.vue"
	import uniBadge from "@/components/uni-badge/uni-badge.vue"
	export default {
		components: {wmNumberBox,uniBadge},
		data() {
			return {
				theUserId:'',
				theNewsid: '',
				theNewsDetail: {},
				bannerData:[],
				skuList:[],
				selTheSku:{},
				selNum:1,
				gouwucheNum:1,
				isShowAlphaView:false,
				firstSection:[
					{
						index:0,
						title:'积分'
					},
					{
						index:1,
						title:'福利'
					},
					{
						index:2,
						title:'已选'
					}
				],
			}
		},


		onLoad(event) {
			this.theNewsid = event.query;
			console.log(this.theNewsid);
			
			this.getNewsDetail();
			
			this.getUserInfoWithKey('userInfo').then((res)=>{
				console.log(res);
				this.theUserId=res.id;
			})

		},

		methods: {
			async getNewsDetail() {
				 var result = await this.requestFromServer({
					 url:  '/index/index/productShow',
					 data: {
					 	productId: this.theNewsid,
					 },
				 })
				 console.log(result);
				 this.theNewsDetail = result.data;
				
			},
			addToCart(){
				if(this.isShowAlphaView==true){
					this.requestFromServer({
						url:'index/index/addShoppingCart',
						data:{
							userId:this.theUserId,
							productId:this.theNewsid,
							specificationsId:this.selTheSku.id,
							specificationsCn:this.selTheSku.name
						}
					}).then((res)=>{
						if(res){
							this.isShowAlphaView=false;
							
							//购物车角标不管用
							uni.setTabBarBadge({
							  index: 1,
							  text: res.total_number.toString()
							})
						}
					})
				}else{
					this.requestFromServer({
						url:'/index/index/getSpecificationsList',
						data:{
							specificationsId:this.theNewsDetail.specifications_id
						}
					}).then((res)=>{
						this.skuList=res.data;
						if(this.skuList.length>0){
							this.selTheSku=this.skuList[0];
						}
						this.isShowAlphaView=true;
					})
				}
				
			},
			clickSKU(item){
				this.selTheSku=item;
			},
			buyNow(){
				this.isShowAlphaView=true;
				// uni.navigateTo({
				// 	url:'../Cart/orderConfirm'
				// })
			},
			
			change(changeNumber,index) {    
			    console.log(changeNumber);  
				this.selNum=changeNumber.value;
			  },  

			
			
			getImgUrl(icon) {
				return this.mainServer + icon;
			},
			dateFormat:function(time) {
				return this.getDateDay(time);
			},
			cancelAlpha(){
				this.isShowAlphaView=false;
			}


		}
	}
</script>

<style>
	page{background-color: #FFFFFF;}
	
	.bannerHolder {
		width: 100%;
		height: 600rpx;
	}
	
	.bannerImage {
		width: 100% ;
		height: 600rpx;
	}
	
	
	.price {
		margin-top: 20rpx;
		padding-left: 40rpx;
		height: 50rpx;
		line-height: 50rpx;
		color: rgb(255,78,0);
		font-size: 42rpx;
		
	}
	.saveBtn{
		color: rgb(255,78,0);
		height: 32rpx;
		line-height: 32rpx;
		/* width: 180rpx; */
		border-radius: 4rpx;
		font-size: 18rpx;
		margin-left: 40rpx;
		margin-top: 29rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
		
	}
	.saveBtn::after{
		border-color: rgb(255,78,0);
	}
	
	.goodsname{
		margin-top: 20rpx;
		padding-left: 40rpx;
		height: 50rpx;
		line-height: 50rpx;
		color: rgb(51,51,51);
		font-size: 30rpx;
		
	}
	.goodsdetail{
		margin-top: 20rpx;
		padding-left: 40rpx;
		height: 50rpx;
		line-height: 50rpx;
		color: rgb(153,153,153);
		font-size: 24rpx;
		
	}
	.other_gray_light{
		/* margin-top: 20rpx;
		padding-left: 40rpx; */
		height: 50rpx;
		line-height: 50rpx;
		color: rgb(153,153,153);
		font-size: 26rpx;
		
	}
	.other_gray{
		/* margin-top: 20rpx;
		padding-left: 40rpx; */
		/* height: 50rpx; */
		line-height: 50rpx;
		color: rgb(51,51,51);
		font-size: 26rpx;

		
	}
	.other_pink{
		/* margin-top: 20rpx;
		padding-left: 40rpx; */
		height: 50rpx;
		line-height: 50rpx;
		color: rgb(255,78,0);
		font-size: 26rpx;
		
	}

	,
	.video_img {

		margin:50rpx;
		border-radius: 20rpx;
		background-color: #09BB07;

	}
	.bottom_tool{
		width: 100%;
		height: 100rpx;
		background-color: #f6f6f6;
		display: flex; 
		flex-direction: row;
		position: fixed;
		border-top: 1rpx  solid #616262;
		bottom:calc(var(--window-bottom));
	}
	.editBtnImg{
		margin-top: 30rpx;
		width: 40rpx;
		height: 40rpx;
		line-height: 99rpx;
	}
	
	.cartBtn{
		color: rgb(102,102,102);
		font-size: 22rpx;
		text-align: center;
		height: 30rpx;
		line-height: 30rpx;

		margin-top: -10rpx;
	}
	.bigBtn{
		width: 40%;
		height: 100rpx;
		line-height: 100rpx;
		font-size: 32rpx;
		text-align: center;
		border-left: 1rpx  solid #E5E5E5;

	}
	
	.wrapper{
		/* z-index: 60; */
		position: absolute;
		top: 0rpx;
		left: 0;
		bottom: 100rpx;
		right: 0;
		background-color: rgba(22,22,22,0.5);
	}
	.alphaWhiteV{
		background-color: #FFFFFF;
		padding: 30rpx;
		width: calc(100% - 60rpx);
		margin-bottom: 0rpx;
		position: fixed;
		bottom:calc(var(--window-bottom) + 100rpx);
	}
	
	.alp_img{
		width: 200rpx;
		height: 200rpx;
		background-color: #09BB07;
	}
	.apl_sku_type{
		margin-top: 20rpx;
		height: 50rpx;
		line-height: 50rpx;
		color: rgb(51,51,51);
		font-size: 28rpx;
	}
	.alp_price {
		margin-top: 20rpx;
		padding-left: 40rpx;
		height: 50rpx;
		line-height: 50rpx;
		color: rgb(255,78,0);
		font-size: 42rpx;
		
	}
	.alp_name{

		padding-left: 40rpx;
		height: 30rpx;
		line-height: 30rpx;
		font-size: 22rpx;
		color: rgb(153,153,153);
		
	}
	.alp_skuname{
		padding-left: 40rpx;
		height: 40rpx;
		line-height: 40rpx;
		font-size: 26rpx;
		color: rgb(51,51,51);
	}
	.sku_btn{
		background-color: rgb(0,139,60);
		height: 60rpx;
		line-height: 60rpx;
		font-size: 28rpx;
		color: rgb(255,255,255);
		width: calc(50% - 10rpx);
	}
	
	.sku_btn_unsel{
		background-color: rgb(245,245,245);
		height: 60rpx;
		line-height: 60rpx;
		font-size: 28rpx;
		color: rgb(51,51,51);
		width: calc(50% - 10rpx);
	}
	.redNum{
		width: 30rpx;
		height: 30rpx;
		line-height: 30rpx;
		font-size: 18rpx;
		color: #FFFFFF;
		background-color: #FC0107;
		border-radius: 15rpx;
		text-align: center;
		position: absolute;margin-left: 90rpx;z-index: 40;
	}
</style>
