<template>
	<view class="page">
		<view class="whiteTop">
			<image class="headImg" src="" mode="" @click="changehead()"></image>
			<view class="userInfo">
				雷佳音
			</view>
		</view>
		
		<!-- 多功能列表1 -->
		<view class="uni-list" style="margin-top: 20rpx;">
			<view class="uni-list-cell"  
			style="display: flex;flex-direction: column;"
			v-for="(fun,funcIndex) in firstSection" :key="funcIndex">
				
				<view class="uni-list-cell-navigate" style="width: 100%;">
					<view style="display: flex;flex-direction: row;width: 100%;">
						<view style="margin-left: 20rpx;width: 40%;">{{fun.title}}</view>
						
						<view v-if="fun.index==0" style="text-align: right;margin-left: 20%;width: 40%;color: rgb(153,153,153);display: flex;flex-direction: row;">
							<button class="duplicateBtn" type="default" @click="clickDup()">
								复制
							</button>
							1213888
							
							</view>
						<view v-if="fun.index==1" style="text-align: right;width: 60%;color: rgb(153,153,153);">欧巴</view>
						<view v-if="fun.index==2" style="text-align: right;width: 60%;color: rgb(153,153,153);">{{dateFormat(1530000000)}}</view>
					</view>
				</view>
				
			</view>
		</view>
		<!-- 多功能列表2 -->
		<view class="uni-list" style="margin-top: 20rpx;">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" 
			style="display: flex;flex-direction: column;"
			v-for="(fun,funcIndex) in secondSection" :key="funcIndex" @tap="jump(fun)">
				
				<view class="uni-list-cell-navigate uni-navigate-right" style="width: 100%;">
					<view style="display: flex;flex-direction: row;width: 100%;">
						<view style="margin-left: 20rpx;width: 40%;">{{fun.title}}</view>

					</view>
				</view>
				
			</view>
		</view>
		
		<!-- 退出登录 -->
		<button class="logOutBtn" @click="clickOut()" type="default">
			退出登录
		</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				firstSection:[
					{
						index:0,
						title:'会员号'
					},
					{
						index:1,
						title:'推荐人'
					},
					{
						index:2,
						title:'注册时间'
					}
				],
				
				secondSection:[
					{
						index:0,
						title:'微信绑定',
					},
					{
						index:1,
						title:'我的收获地址',
					},
					{
						index:2,
						title:'安全隐私'
					}
					
				],
			}
		},
		methods:{
			async changehead(){
				var res =await this.chooseImgAndUpload({
					count:1
				}).then((res)=>{
					console.log(res);
					var headurl = res[0];
				});
				
			},
			clickDup(){
				uni.setClipboardData({
				    data: 'kissssss'
				});
				uni.showToast({
					icon:'none',
					title:'会员号已复制到剪贴板'
				})
			},
			jump(fun){
			    if(fun.index==1){
					uni.navigateTo({
						url:'address'
					})
				}else if(fun.index==2){
					uni.navigateTo({
						url:'./safePrivacy'
					})
				}	
			},
			clickOut(){
				uni.showModal({
					title: '提示',
					content: '确定退出登录?',
					success: function(res) {
						if (res.confirm) {
							console.log('点击确定');
							
									
						}
					}
				})
			},
			dateFormat:function(time) {
				return this.getDateSecond(time);
			},
		}
	}
</script>

<style>
    page{background-color: rgb(240,240,240);}
	.whiteTop{
		background-color: #FFFFFF;
		height: 306rpx;
		width: 100%;
		
	}
	.headImg{
		margin-top: 40rpx;
		width: 172rpx;
		height: 172rpx;
		border-radius: 81rpx;
		background-color: #007AFF;
		margin-left: calc(50% - 86rpx);
	}
	.userInfo{
		height: 50rpx;
		line-height: 50rpx;
		font-size: 32rpx;
		color: rgb(51,51,51);
		text-align: center;
	}
	.duplicateBtn{
		margin-top: 10rpx;
		height: 34rpx;
		line-height: 34rpx;
		width: 100rpx;
		font-size:20rpx ;
		
		color: rgb(0,139,60);
	}
	.duplicateBtn::after{
		border-color: rgb(0,139,60);
		/* border-radius: 60rpx; */
		border-width: 1rpx;
	}
	.logOutBtn{
		margin-top: 40rpx;
		height: 100rpx;
		line-height: 100rpx;
		margin-left: 13%;
		width: 74%;
		font-size:28rpx ;
		color: rgb(51,51,51);
		background-color: #FFFFFF;

	}
</style>
