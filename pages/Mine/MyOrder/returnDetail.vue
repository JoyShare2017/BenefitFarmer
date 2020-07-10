<template>
	<view class="page" style="background-color: #FFFFFF;">
		<!-- 顶部信息 请等待商家处理-->
		<view >
			<view class="topBlack">
					
					<view class="address" style="font-size: 38rpx;color: #FFFFFF;font-weight: bold;margin-top: 10rpx;">
						请等待商家处理
					</view>
				<view class="address" style="font-size: 24rpx;color: #FFFFFF;margin-left: 0rpx;">
					还剩1天23时59分
				</view>
			</view>
			
			<view style="padding:30rpx  0rpx;background-color: #FFFFFF;margin-bottom: 20rpx;border-bottom: 1rpx solid #E5E5E5;">
				<view class="address" style="font-size: 28rpx;color:rgb(102,102,102);">
					您已成功发起退款申请，请耐心等待商家处理
				</view>
				
			</view>
		</view>
		
		<!-- 顶部信息 已关闭-->
		<view >
			<view class="topBlack">
					
					<view class="address" style="font-size: 38rpx;color: #FFFFFF;font-weight: bold;margin-top: 10rpx;">
						订单关闭
					</view>
				
			</view>
			
			<view style="padding:30rpx  0rpx;background-color: #FFFFFF;margin-bottom: 20rpx;border-bottom: 1rpx solid #E5E5E5;">
				<view class="address" style="font-size: 28rpx;color:rgb(102,102,102);">
					您已成功发起退款申请，已关闭
				</view>
				
			</view>
		</view>
		
		<!-- 顶部信息 已拒绝-->
		<view >
			<view class="topBlack">
					
					<view class="address" style="font-size: 38rpx;color: #FFFFFF;font-weight: bold;margin-top: 10rpx;">
						商家已拒绝
					</view>
				
			</view>
			
			<view style="padding:30rpx  0rpx;background-color: #FFFFFF;margin-bottom: 20rpx;border-bottom: 1rpx solid #E5E5E5;">
				<view class="address" style="font-size: 28rpx;color:rgb(102,102,102);">
					您已成功发起退款申请，已被商家拒绝
				</view>
				
			</view>
		</view>
		
		<!-- 顶部信息 商家已同意-->
		<view >
			<view class="topBlack">
					
					<view class="address" style="font-size: 38rpx;color: #FFFFFF;font-weight: bold;margin-top: 10rpx;">
						商家已同意
					</view>
				<view class="address" style="font-size: 24rpx;color: #FFFFFF;margin-left: 0rpx;">
					还剩1天23时59分
				</view>
			</view>
			
			<view style="padding:30rpx  0rpx;background-color: #FFFFFF;margin-bottom: 20rpx;border-bottom: 1rpx solid #E5E5E5;">
				<view class="address" style="font-size: 28rpx;color:rgb(0,139,60);">
					您已成功发起退款申请，商家已同意
				</view>
				
			</view>
			
			
			<!-- 多功能列表1 -->
			<view class="uni-list" style="margin-top: 20rpx;">
				<view class="uni-list-cell"  
				style="display: flex;flex-direction: column;"
				v-for="(fun,funcIndex) in firstSection" :key="funcIndex">
					
					<view class="uni-list-cell-navigate" style="width: 100%;">
						<view style="display: flex;flex-direction: row;width: 100%;">
							
							<view style="width: 30%;">{{fun.title}}</view>
							<view v-if="fun.index==0">
								<view class="address" style="font-size: 30rpx;color:rgb(51,51,51);">
									刘女士  86-13832530264
								</view>
								<view class="address" style="font-size: 30rpx;color:rgb(51,51,51);height: auto;">
									北京市朝阳东区三环南路98号北京市朝阳东区三环南路98号
								</view>
							</view>
							
							<input class="theInput" disabled="true" @click="changeExpType()" v-if="fun.index==1" v-model="expressCompany" type="text" :placeholder="fun.holder"/>
							<input class="theInput" v-if="fun.index==2" v-model="expressNumber" type="text" :placeholder="fun.holder"/>
							
						</view>
					</view>
					
				</view>
			</view>
			
		</view>
		
		<view style="padding-top:20rpx;">
			
			<view class="address" style="height: auto;">
				商家同意后，请按照给出的退货地址退货，并请记录退货运单号
			</view>
			<view class="address" style="height: auto;">
				如商家拒绝，您可以修改申请后再次发起，商家会重新处理
			</view>
			<view class="address" style="height: auto;">
				如商家超时未处理，退货申请将达成，请按系统给出的退货地址退货
			</view>
			
		</view>
		
		<view class="uni-row" style="margin-top: 40rpx;">
			<button class="loginBtn" @click="contactService()">联系客服</button>
			<button class="loginBtn" @click="callBackApply()">撤销申请</button>
			<button class="loginBtn pink" @click="clickChange()">修改申请</button>
		</view>
		
		<view class="uni-row" style="margin-top: 40rpx;">
			<button class="loginBtn" @click="contactService()" style="width: calc(50% - 20rpx);">联系客服</button>

			<button class="loginBtn pink" @click="applyAgain()" style="width: calc(50% - 20rpx);">再次提交</button>
		</view>
		
		<!-- 已同意 -->
		<view class="uni-row" style="margin-top: 40rpx;">
			<button class="loginBtn" @click="contactService()">联系客服</button>
			<button class="loginBtn" @click="callBackApply()">撤销申请</button>
			<button class="loginBtn pink" @click="confirm()">确认提交</button>
		</view>
		
		<!-- 订单商品 -->
		<view style="margin-top: 20rpx;background-color: #FFFFFF;width: 100%;">
			<view class="address" style="font-size: 36rpx;padding-top: 20rpx;font-weight: bold;">
				退货信息
			</view>
			<!--  -->
			
			<view  style="display: flex;flex-direction: row;margin-top: 20rpx;">

				<image class="goodsImg" mode=""></image>
				
				<view class="uni-column">
					<view class="address" style="font-size: 28rpx;">
						316颗粒化肥
					</view>
					<view class="address" style="font-size: 24rpx;color: #3C3E49;">
					    规格：2大包
					</view>
					<!-- <view class="address" style=" color: rgb(51,51,51);font-size: 24rpx;">
							￥120.00
					</view> -->
					
				</view>
			</view>
			
			
			
		</view>
		
		
		
		
		<!-- 费用合计 -->
		<view style="width: 100%;background-color: #FFFFFF;margin-bottom: 20rpx;padding-top: 0rpx;">
			
			
			
			   <view class="address" style="width: 50%;">
			   	退款原因：不喜欢/不想要
			   </view>
				<view class="address">
					退款金额：￥120.00
				</view>
				<view class="address" >
					申请件数：2包
				</view>
				<view class="address">
					申请时间：2020-06-24 10:36
				</view>
				<view class="address">
					退款编号：372560122014556322
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
				expressCompany:'',
				expressNumber:'',
				firstSection:[
					{
						index:0,
						title:'收件地址',
						holder:'请填写单位名称（个人不可填写）'
					},
					{
						index:1,
						title:'快递公司',
						holder:'请选择快递公司'
					},
					{
						index:2,
						title:'快递单号',
						holder:'请输入快递单号或物流号'
					},
					
				],
				expComList:['中通','圆通','顺丰','邮政']
			}
		},
		methods:{
			contactService(){
				
			},
			callBackApply(){
				
			},
			clickChange(){
				
			},
			payImme(){
				uni.navigateTo({
					url:'./paySuccess'
				})
			},
			applyReturn(){
				uni.navigateTo({
					url:'./applyReturn'
				})
			},
			confirmReceiverGoods(){
				
			},
			delOrder(){
				
			},
			applyFapiao(){
				uni.navigateTo({
					url:'../receiptManage/receiptApply'
				})
			},
			gotoComment(){
				
			},
			changeExpType(){
				var _this=this;
				uni.showActionSheet({
					itemList:_this.expComList,
					success: function (res) {
					        console.log('选中了第' + res.tapIndex  + '个按钮');
							_this.expressCompany=_this.expComList[res.tapIndex];
							
					    },
				})
			},
			// 确认提交退货物流
			confirm(){
				uni.navigateTo({
					url:'./logisticsDetail'
				})
			}
		}
	}
</script>

<style>
	.topBlack{
		width: 100%;
		background-color: rgb(36,36,36);
		/* height: 140rpx; */
		padding: 20rpx 0rpx 20rpx 0rpx;
	}
	
	.address{
		height: 50rpx;
		line-height: 50rpx;
		font-size: 26rpx;
		padding-left: 30rpx;
		color: rgb(102,102,102);
	}
	.goodsImg{
		margin-left: 30rpx;
		width: 160rpx;
		height: 160rpx;
		background-color: #09BB07;
		margin-bottom: 30rpx;
	}
	
	.loginBtn {

		background-color: #ffffff;
		color: rgb(51,51,51);
		margin-left: 10rpx;
		margin-right: 10rpx;
		height: 76rpx;
		line-height: 76rpx;
		font-size: 30rpx;
		width: calc(33.33% - 20rpx);
	}
	.loginBtn::after{
		border-color: rgb(102,102,102);
	}
	.pink{
		background-color: #ffffff;
		color: rgb(255,78,0);
	}
	.pink::after{
		border-color: rgb(255,78,0);
	}
	.theInput{
		width: 70%;
		font-size: 30rpx;
	}
</style>
