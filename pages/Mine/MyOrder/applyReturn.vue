<template>
	<view style="width: 100%;">
		<view class="theText" style="margin-top: 20rpx;">
			退货原因
		</view>
		<view class="uni-row">
			<button class="bigBtn" type="default">
				质量原因
			</button>
			<button class="bigBtn grayBtn" type="default">
				非质量原因
			</button>
		</view>
		
		<textarea class="reason"  v-model="reason" placeholder="请输入您退货的原因"  />
		
		<view class="uni-row">
			<view class="theText" style="margin-top: 20rpx;">
				上传凭证
			</view>
			<view class="theText" style="margin-top: 20rpx;color: rgb(153,153,153);font-size: 24rpx;">
				最多4张
			</view>
		</view>
		
		<view class="images_holder" :style="{ height: 2 * 170 + 'rpx' }">
			<image class="fengcai_image" v-for="(image, index) in imagesPathList" :key="index" :src="getImgUrl(image)" mode="aspectFill" @click="delTheImg(index)"></image>
		
			<image class="fengcai_image" @click="shoosePic()" mode=""></image>
		</view>
		
		<view style="padding-top: 30rpx;">
			<view class="theText" style="margin-top: 20rpx;">
				退货协议
			</view>
			<view class="address">
				1.已发货品申请退货，请直接拒收，非质量问题的需承担10元快递费。
			</view>
			<view class="address">
				2.货物退货仓库后，3个工作日方能办理退款，一旦签收不能退款
			</view>
			<view class="address">
				3.质量问题退货，需拍照上传
			</view>
			<view class="address">
				4.为了您的账户安全，请不要点击任何陌生链接、不要向任何人透露银行卡或验证码信息，若街道陌生来电，冒充物流公司提出双倍赔偿等要求，请立即联系官方客户核实，谨防受骗！
			</view>
		</view>
		
		<view class="bottom_tool" @click="clickOK()">
			同意协议并提交
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				isQualityProblem:true,
				reason:'',
				imagesPathList:[]
			}
		},
		methods:{
			async shoosePic() {
				var res = await this.chooseImgAndUpload({
					path: 3,
					count: 4
				});
			
				if (res) {
					console.log(res);
					this.imagesPathList=this.imagesPathList.concat(res);
				}
			},
			getImgUrl(image){
				console.log(this.mainServer+image);
			   return this.mainServer+image;	
			},
			clickOK(){
				uni.navigateTo({
					url:'./returnDetail'
				})
			}
		}
	}
</script>

<style>
	.theText{
		height: 50rpx;
		line-height: 50rpx;
		font-size: 30rpx;
		padding-left: 30rpx;
		color: rgb(51,51,51);
	}
	.bigBtn{
		width: 40%;
		margin-top: 13rpx;
		height: 74rpx;
		line-height: 74rpx;
		font-size: 32rpx;
		text-align: center;
		background-color: rgb(0,139,60);
		color: #FFFFFF;
		border-radius: 10rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
	
	}
	.grayBtn{
		background-color: transparent;
		color: rgb(102,102,102)
	}
	.bigBtn::after{
		border-color: rgb(102,102,102);
		border-width: 1rpx;
	}
	
	.reason {
		margin: 20rpx;
		padding: 20rpx;
		width: calc(100% - 80rpx);
		border: 1rpx solid #E5E5E5;
	}
	.address {
		line-height: 50rpx;
		font-size: 28rpx;
		padding-left: 30rpx;
		padding-right: 30rpx;
		color: rgb(51,51,51);
		
	}
	.bottom_tool{
		width: 100%;
		height: 100rpx;
		background-color: rgb(0,119,51);
		line-height: 100rpx;
		position: fixed;
		color: rgb(255,255,255);
		text-align: center;
		font-size: 30rpx;
		border-top: 1rpx  solid #616262;
		bottom:calc(var(--window-bottom));
	}
	.images_holder {
		/* background-color: #666666; */
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 96%;
		/* height: 200rpx; */
	}
	.fengcai_image {
		margin-top: 20rpx;
		width: 150rpx;
		height: 150rpx;
		border-radius: 10rpx;
		margin-left: 20rpx;
	}
</style>
