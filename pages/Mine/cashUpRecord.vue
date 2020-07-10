<template>
	<view class="page">
		
		
		<view class="uni-list" >
			<view class="uni-list-cell"  style="display: flex;flex-direction: column;"
			v-for="(noti,index) in showNewsData" :key="index">
				<view   class="cell_holder" @click="clickMe(index)" >
					
					<view style="width: 150rpx;height: 120rpx;margin-top: 20rpx;padding-left: 30rpx;">
						<image class="cell_icon" src="" mode="">
							
						</image>
					</view>
					
					<view class="uni-column" style="width: 300rpx;">
						<view class="uni-column">
							
							<view class="cell_title">
								提现方式：微信
							</view>
							<view class="cell_time">
								{{dateFormat(noti.time)}}
							</view>
						</view>
					</view>
					<view class="cell_content">
						{{noti.money}}
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
				theMid:'',
				showNewsData: [
					{
						money:'100.00',
						time:1593571037
					},
					{
						money:100.00,
						time:1593571037
					},
					{
						money:100.00,
						time:1593571037
					},
					{
						money:100.00,
						time:1593571037
					}
				],
			}
		},
		
		onLoad(eee) {
			
			var _this = this;
			uni.getStorage({
				key: 'mid',
				success: function(res) {
					console.log('getStoragegemid' + res.data);
					_this.theMid = res.data;
					_this.getServicList();
				}
			});
			this.getServicList();
		},
		methods:{
			
			
			async getServicList(){
				
				var serverUrl="Home/Message/getList";
				var data={
					mid:this.theMid,
					type:this.currentIndex,
					limit:10,
				    page:this.page
				}
				var res = await this.requestFromServer({
					url:serverUrl,
					data:data
				})
				if(this.page==1){
					this.showNewsData=[];
				}
				uni.stopPullDownRefresh();
				if(res.data){
					this.showNewsData=this.showNewsData.concat(res.data);
					if(res.data.length<10){
						this.loadingText='没有更多数据了';
					}else{
						this.loadingText='加载更多数据...';
					}
				}else{
					this.loadingText='没有更多数据了';
				}
				
			},
			
			
			
			dateFormat:function(time) {
				return this.getDateSecond(time);
			},
		}
	}
</script>

<style>
	
	
	.cell_holder{
		
		width: 100%;
		height: 160rpx;
		display: flex;
		flex-direction: row;
		background-color: #FFFFFF;

	}
	
	.cell_title{
		margin-top: 30rpx;
		
		padding-left: 20rpx;
		height: 50rpx;
		line-height: 50rpx;
		overflow: hidden;
		font-size: 32rpx;
		color: rgb(51,51,51);
	}
	.cell_time{
		padding-left: 20rpx;
		height: 50rpx;
		line-height: 50rpx;
		overflow: hidden;
		font-size: 24rpx;
		color: rgb(51,51,51);
	}
	.cell_content{
		
		margin-top: 30rpx;
		padding-right: 20rpx;
		height: 100rpx;
		line-height: 100rpx;
		overflow: hidden;
		font-size: 42rpx;
		white-space: nowrap;
		text-overflow: ellipsis;
		width: calc(100% - 520rpx);
		text-align: right;
	}
	
	.cell_icon{
		width: 120rpx;
		height: 120rpx;
		border-radius: 80rpx;
		background-color: #09BB07;
	}
	
	
	
	
</style>
