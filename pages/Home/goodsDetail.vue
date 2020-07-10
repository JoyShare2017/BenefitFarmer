<template>
	<view class="page" >
		
		<!-- 轮播 -->
		<swiper class="bannerHolder" :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(ban,index) in bannerData" :key="index">
				<navigator url="../Detail/newsDetail">
					<image class="bannerImage" :src="getImgUrl(ban.focus_img)" mode="aspectFill"></image>
				</navigator>
			</swiper-item>
		</swiper>
		
		
		<!-- 商品简介 -->
		<view style="background-color: #FFFFFF;padding-top: 20rpx;">
			<view class="uni-row">
				<view class="price">
					￥256
				</view>
				<button class="saveBtn" type="default">
					复购立省20.00
				</button>
			</view>
			<view class="goodsname">
				晟农博316冲施肥
			</view>
			<view class="goodsdetail">
				硬核产品 青枯 病毒 黄叶 起死回生"
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
							
							<view class="other_gray">
								购买可得
							</view>
							<view class="other_pink">
								10
							</view>
							<view class="other_gray">
								积分，积分可抵现
							</view>
							</view>
						<view v-if="fun.index==1" class="other_gray" style="width: 80%;">
							316颗粒底肥改善土壤 提高肥效吸收316颗粒底肥改善土壤 提高肥效吸收316颗粒底肥改善土壤 提高肥效吸收316颗粒底肥改善土壤 提高肥效吸收。
						</view>
						<view v-if="fun.index==2" class="other_gray">
							请选择规格数量
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
						商品评价（75658）
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
			<view class="cartBtn" style="width: 25%;">
				购物车
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
		@touchmove.stop.prevent="moveHandle" @click="cancelAlpha()">
			<view class="alphaWhiteV">
				<view class="uni-row" >
					<image class="alp_img" src="" mode=""></image>
					<view style="width: 100%;">
						<view style="width: 100%;text-align: right;">
							<view class="iconfont icon-guanbi">
								
							</view>
						</view>
						<text class="alp_price" style="font-size: 24rpx;">
							￥
						</text>
						<text class="alp_price" style="padding-left: 0rpx;">
							256
						</text>
						<view class="alp_name">
							晟农博316冲施肥
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
					<button class="sku_btn" type="default">
						大包
					</button>
					<button class="sku_btn_unsel" type="default">
						小包
					</button>
				</view>
				
				<view class="uni-row" style="padding-top: 30rpx;">
					<view class="apl_sku_type" style="margin-top: 0rpx;width: calc(100% - 200rpx);">
						数量
					</view>
					<wm-numberBox  model='1' min='1' value='1'
					@change="numberChange(2,1)" >
						
						
					</wm-numberBox>
				</view>
				
			</view>
		</view>


	</view>


</template>

<script>

	import wmNumberBox from "@/common/wm-number-box.vue"
	export default {
		components: {wmNumberBox},
		data() {
			return {
				theNewsid: '',
				theMid: '',
				theNewsDetail: {},
				theComment: '',
				bannerData:[{
					focus_img:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1593565729&di=bf0297a1bb18781b89c9725ff687cd53&src=http://img007.hc360.cn/m1/M07/9D/91/wKhQcFRRt5yEXtZLAAAAAMD3N9g207.jpg'
				},
				{
					focus_img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593575815914&di=243ef1045c91ecb424f64816720fdb6b&imgtype=0&src=http%3A%2F%2Fsup.user.img38.51sole.com%2Fimages3%2F20150409%2F1556126_2015491112220.jpg'
				}],
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
				isShowAlphaView:false,
				
			}
		},


		onLoad(event) {
			this.theNewsid = event.query;
			if(event.mine==1){
				console.log('mineminemine');
				this.isMine=true;
			}
			var _this = this;
			uni.getStorage({
				key: 'mid',
				success: function(res) {
					console.log('getStoragegemid' + res.data);
					_this.theMid = res.data;

				}
			});
			this.getNewsDetail();

		},

		methods: {
			async getNewsDetail() {
				 var result = await this.requestFromServer({
					 url:  'Home/Notice/detail',
					 data: {
					 	id: this.theNewsid,
					 	mid: this.theMid
					 },
				 })
				 console.log(result);
				 this.theNewsDetail = result.data;
				 if(this.theNewsDetail.is_feedback==1){
					 this.is_feedback=true;//需要反馈
				 }
				 if(this.theNewsDetail.feedback==1){
				 	    this.feedback=true;//已经反馈了
				 }
			},
			addToCart(){
				
			},
			buyNow(){
				this.isShowAlphaView=true;
				// uni.navigateTo({
				// 	url:'../Cart/orderConfirm'
				// })
			},
			seeComment(){
				uni.navigateTo({
					url:'./goodsComment'
				})
			},

			sendComment() {
				if (this.theMid) {
					uni.request({
						url: this.mainServer + 'Home/Exchange/addFayan',
						method: "POST",
						data: {
							id: this.theNewsid,
							mid: this.theMid,
							content: this.theComment
						},
						success: (result) => {
							console.log(result);
						},
						fail: (failresult) => {

						}
					})
				} else {
					uni.navigateTo({
						url: '../Login/login'
					})
				}

			},
			deleIt(){
				var _this=this;
				uni.showModal({
					title: '删除通知',
					content: '是否删除此条通知?',
					success: function(res) {
						if (res.confirm) {
							console.log('点击确定');
							uni.request({
								url:_this.mainServer+'Home/Notice/delete',
								data:{
									id:_this.theNewsid,
									mid:_this.theMid, 
								},
								method:"POST",
								success: (res) => {
									uni.showToast({
										icon:'none',
										title:res.data.message
									})
									if(res.data.code==1){
										uni.$emit('fire',{
											isNeedRefresh:1
										});
										uni.navigateBack({
											
										})
									}
									
								},
								
							})
				
						}
					}
				})
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
		margin-bottom: 0rpx;
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
</style>
