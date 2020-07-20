<template>
	<view class="page">
		
		
		<view class="uni-list" >
			<view class="uni-list-cell"  style="display: flex;flex-direction: column;"
			v-for="(noti,index) in showNewsData" :key="index">
				<view   class="cell_holder" @click="clickMe(index)" >
					
					<view style="width: 150rpx;height: 120rpx;margin-top: 20rpx;padding-left: 30rpx;">
						
						<view style="position: absolute;margin-left: 90rpx;z-index: 40;">
							<uni-badge text="9" type="error"></uni-badge>
						</view>
						<image class="cell_icon" src="" mode="">
							
						</image>
						
					</view>
					
					<view class="uni-column" style="width: calc(100% - 150rpx);">
						<view class="uni-row">
							
							<view class="cell_title">
								{{noti.title}}
							</view>
							<view class="cell_time">
								{{dateFormat(noti.time)}}
							</view>
						</view>
						
						<view class="cell_content">
							{{noti.content}}
						</view>
					</view>
					
					
					
				</view>
			</view>
			
		</view>
		
		
	</view>
</template>

<script>
	import uniBadge from "@/components/uni-badge/uni-badge.vue"


	export default{
		components: {uniBadge},
		data(){
			return{
				theMid:'',
				moveLineOffset: 12.5,
				currentIndex: 1,
				showNewsData: [
					{
						title:'系统通知',
						content:'618最后冲刺，看直播抽免单、赢万千618最后冲刺，看直播抽免单、赢万千',
						time:1593571037
					},
					{
						title:'会员通知',
						content:'618最后冲刺，看直播抽免单、赢万千618最后冲刺，看直播抽免单、赢万千',
						time:1593571037
					},
					{
						title:'订单通知',
						content:'618最后冲刺，看直播抽免单、赢万千618最后冲刺，看直播抽免单、赢万千',
						time:1593571037
					},
					{
						title:'我的评价',
						content:'618最后冲刺，看直播抽免单、赢万千618最后冲刺，看直播抽免单、赢万千',
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
			
			clickMe(index){
				if(index<=2){
					uni.navigateTo({
						url:'./messageList?query='+index
					})	
				}else if(index==3){
					uni.navigateTo({
						url:'./commentList'
					})	
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
		/* margin-top: 10rpx;
		margin-left: 0%;
		width: 94%; */
		width: 100%;
		height: 160rpx;
		display: flex;
		flex-direction: row;
		background-color: #FFFFFF;


		/* margin-left: 100rpx; */
		/* border-radius: 10rpx; */
	}
	
	.cell_title{
		padding-left: 20rpx;
		width: 50%;
		height: 80rpx;
		line-height: 80rpx;
		overflow: hidden;
		font-size: 32rpx;
		color: rgb(51,51,51);
	}
	.cell_time{
		padding-right: 20rpx;
		width: 50%;
		height: 80rpx;
		line-height: 80rpx;
		overflow: hidden;
		font-size: 24rpx;
		text-align: right;
		color: rgb(51,51,51);
	}
	.cell_content{
		/* margin-left: 3%;
		width: 94%; */
		padding-left: 20rpx;
		padding-right: 20rpx;
		height: 50rpx;
		line-height: 50rpx;
		overflow: hidden;
		font-size: 28rpx;
		color: rgb(102,102,102);
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.cell_icon{
		width: 120rpx;
		height: 120rpx;
		/* padding-left: 30rpx; */
		border-radius: 80rpx;
		background-color: #09BB07;
	}
	
	
	
	
</style>
