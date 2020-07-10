<template>
	<view class="page">
		
		<!-- 首页 -->
		<view v-if="tabIndex==1"  style=";display: flex;flex-direction: row;flex-wrap: wrap;margin-bottom: 100rpx;">
				<view class="halfCell" v-for="(item,index) in 'kisss'">
					<view class="cellHolder" @click="seeDetail()">
						<image class="img" mode=""></image>
						<view class="uni-row">
							<view class="price">
								新农人故事1新农人故事1新农人故事1新农人故事1新农人故事1新农人故事1新农人故事1新农人故事1
							</view>
							<view class="iconfont icon-zanpress weizan">
								
							</view>
						</view>
					</view>
				</view>
				
		</view>
		
		
		<!-- 我的 -->
		<view v-if="tabIndex==2">
			<!-- 表头 -->
			<view   style="display: flex;flex-direction: row;height: 80rpx;background-color: #FFFFFF;">
				<view class="tabNav-item" v-for="(item,index) in tabList" :key="index" @tap="clickItem(item,index)">
					<text class="tabNav-item" :class=" currentIndex==item.id?'tabNav-item-active':''">
						{{item.name}}
					</text>
				</view>
			</view>
			<!-- 短移横线 点击哪个栏目就滑动到哪个栏目名字底下height-->
			<view :style="{'width': '25%','background-color': 'rgb(0,139,60)',
			 'height': '4rpx','margin-left':moveLineOffset+'%',}">
			
			</view>
			<!-- 消息列表 -->
			<view style="display: flex;flex-direction: row;flex-wrap: wrap;margin-bottom: 100rpx;">
				<view class="halfCell" v-for="(item,index) in 'kisss'">
					<view class="cellHolder" @click="seeDetail()">
						<image class="img" mode=""></image>
						<view class="uni-row">
							<view class="price">
								新农人故事1新农人故事1新农人故事1新农人故事1新农人故事1新农人故事1新农人故事1新农人故事1
							</view>
							<view v-if="currentIndex==0" class="iconfont icon-zanpress yizan">
								
							</view>
							<view v-if="currentIndex==1" class="reviewing">
								审核中
							</view>
						</view>
					</view>
				</view>
				
			</view>
			<view class="loading-more">
			    <text class="loading-more-text" @click="loadMore()">{{loadingText}}</text>
			</view>
			
		</view>
		
		
		
		
		<!-- 底部工具栏 -->
		<view class="bottom_tool">
			
			<view class="" style="width: 30%;" @click="clickMe(1)">
				<image class="tab_icon" src="" mode=""></image>
				<view  :class="tabIndex==1?'tab_title_sel':'tab_title'">首页</view>
			</view>
			
			
			
			<view class="bigBtn" @click="send()">
				+发布
			</view>
			<view class="" style="width: 30%;" @click="clickMe(2)">
				<image class="tab_icon" src="" mode=""></image>
				<view :class="tabIndex==2?'tab_title_sel':'tab_title'">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				tabIndex:1,
				currentIndex: 0,
				moveLineOffset: 100/8,
				tabList: [{
					id: 0,
					name: '我的视频'
				}, {
					id: 1,
					name: '审核中'
				}],
			}
		},
		methods:{
			clickMe(index){
			   this.tabIndex=index;	
			},
			send(){
				uni.navigateTo({
					url:'./cashShareSend'
				})
			},
			clickItem(e,index){
				this.showNewsData=[];
				this.page=1;
				var _this = this;
				_this.currentIndex = e.id;
				_this.moveLineOffset=(e.id*50)+100/8;
				this.loadingText='正在加载数据...';
				_this.isDraft=_this.currentIndex==2;
				uni.startPullDownRefresh({
					
				})
			},
		}
	}
</script>

<style>
	
	.halfCell{
		width: 50%;
	}
	.cellHolder{
		
		/* margin-left: 30rpx;
		margin-right: 30rpx; */
		background-color: #FFFFFF;
		border-radius: 10rpx;
		/* display: flex; */
		margin: 20rpx;
		width: calc(100% - 40rpx);
		/* flex-direction: row; */
		/* background-color: #007AFF; */
		/* width: 100%; */
		height: 400rpx;
	}
	
	.price{
		padding-left: 20rpx;
		color: rgb(51,51,51);
		font-size: 24rpx;
		line-height: 40rpx;
		height: 80rpx;
		overflow: hidden;
		width: calc(100% - 120rpx);
		/* white-space: nowrap; */
		/* text-overflow: ellipsis; */
	}
	.img{
		width: 100%;
		height: 280rpx;
		background-color: #09BB07;
		border-radius: 10rpx 10rpx 0rpx 0rpx;
	}
	
	.reviewing{
		padding-left: 20rpx;
		color: rgb(224,18,18);
		font-size: 24rpx;
		line-height: 40rpx;
		height: 40rpx;
	}
	
	
	.weizan{
		padding-left: 20rpx;
		padding-right: 20rpx;
	}
	.yizan{
		padding-left: 20rpx;
		padding-right: 20rpx;
		color: rgb(224,18,18);
	}
	
	.bottom_tool {
		width: 100%;
		height: 100rpx;
		background-color: #f6f6f6;
		display: flex;
		flex-direction: row;
		position: fixed;
		border-top: 1rpx solid #616262;
		bottom: calc(var(--window-bottom));
	}
	
	
	.tab_icon{
		width: 40rpx;
		height: 40rpx;
		background-color: #09BB07;
		margin-left: calc(50% - 20rpx);
		margin-top: 17rpx;
	}
	.tab_title{
		color: rgb(146,146,146);
		font-size: 24rpx;
		text-align: center;
		height: 30rpx;
		line-height: 30rpx;
		margin-top: -5rpx;

	}
	.tab_title_sel{
		color: rgb(0,139,60);
		font-size: 24rpx;
		text-align: center;
		height: 30rpx;
		line-height: 30rpx;
		margin-top: -5rpx;
	
	}
	
	
	.tabNav-item {
		color: rgb(53,53,53);
		width: 50%;
		text-align: center;
		line-height: 80rpx;
		/* flex-direction: row; */
	}
	.tabNav-item-active {
		color: rgb(53,53,53);
		line-height: 80rpx;
	
	}
	
	
	.bigBtn {
		width: 40%;
		height: 74rpx;
		line-height: 74rpx;
		font-size: 28rpx;
		text-align: center;
		border-radius: 37rpx;
		margin-top: 13rpx;
		color: #FFFFFF;background-color: #1AAD19;
	}
</style>
