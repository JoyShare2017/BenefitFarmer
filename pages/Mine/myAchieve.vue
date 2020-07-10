<template>
	<view class="page">
		
		
		<!-- 多功能列表1 -->
		<view class="uni-list" style="margin-top: 20rpx;">
			<view class="uni-list-cell"  
			
			v-for="(fun,funcIndex) in firstSection" :key="funcIndex">
				
				<view class="uni-list-cell-navigate" style="width: 100%;">
					<view style="display: flex;flex-direction: row;width: 100%;">
						<image class="icon" src="" mode=""></image>
						<view style="margin-left: 20rpx;width: 40%;">{{fun.title}}</view>
						
						<view v-if="fun.index==0" class="uni-row" style="width: 55%;">
							<view  style="text-align: right;width: 100%;color: rgb(255,78,0);">14</view>
							<view  style="">亩</view>
						</view>
						
						<view v-if="fun.index==1" class="uni-row" style="width: 55%;">
							<view  style="text-align: right;width: 100%;color: rgb(255,78,0);">10</view>
							<view  style="">株</view>
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
				firstSection:[
					{
						index:0,
						title:'改善土壤'
					},
					{
						index:1,
						title:'净化绿色果蔬'
					}
				]
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
	.icon{
		margin-top: 10rpx;
		width: 46rpx;
		height: 36rpx;
		background-color: #007AFF;
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
