<template>
	<view style="width: 100%;">
		<!-- 表头 -->
		<view   style="display: flex;flex-direction: row;height: 80rpx;background-color: #FFFFFF;">
			<view class="tabNav-item" v-for="(item,index) in tabList" :key="index" @tap="clickItem(item,index)">
				<text class="tabNav-item" :class=" currentIndex==item.id?'tabNav-item-active':''">
					{{item.name}}
				</text>
			</view>
		</view>
		<!-- 短移横线 点击哪个栏目就滑动到哪个栏目名字底下height-->
		<view :style="{'width': '16.6667%','background-color': 'rgb(0,139,60)',
		 'height': '4rpx','margin-left':moveLineOffset+'%',}">
		
		</view>
		<!-- 消息列表 -->
		<view class="uni-list" >
			<view class="uni-list-cell" style="display: flex;flex-direction: column;background-color: #F4F5F6;">
				
				<view class="cell_holderBig" v-for="(noti,index) in showNewsData" :key="index">
					<!-- 时间 -->
					<view class="timeView">
						{{dateFormat(noti.time)}}
					</view>
					<!-- 白色view -->
					<view    class="cell_holder" >
						<view class="uni-row" style="padding-top: 20rpx;padding-bottom: 20rpx;border-bottom: 1rpx solid #EBEEF1;">
							<view class="cell_title">
								{{noti.title}}
							</view>
							<view class="cell_seeDetail">
								查看详情>
							</view>
						</view>
						
						<view class="cell_content">
							{{noti.content}}
						</view>
						
					</view>
				</view>
				
				
			</view>
			
		</view>
		<view class="loading-more">
		    <text class="loading-more-text" @click="loadMore()">{{loadingText}}</text>
		</view>
		
	</view>
</template>

<script>

	export default{
		
		data(){
			return{
				theMid:'',
				moveLineOffset: 100/12,
				currentIndex: 0,
				showNewsData: [
					{
						title:'最后4小时！最后4小时！最后4小时！最后4小时！',
						content:'重复关注会员：昵称为【开心就好】的朋友，在2020-06-15 10:36:03已经关注成为【惠农6:03已经关公',
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
				tabList: [{
					id: 0,
					name: '会员通知'
				}, {
					id: 1,
					name: '订单通知'
				}, {
					id: 2,
					name: '系统通知'
				}],
				page:1,
				loadingText: '正在加载数据...',
			}
		},
		onReachBottom() {
		    this.page++;
		    this.loadingText='正在加载更多数据...';
		    this.getServicList();
		},
		onPullDownRefresh() {
			this.getServicList();
		},
		onLoad(param) {
			if(param.query){
				this.changeIndex(param.query);
			}
		},
		methods:{
			clickItem(e,index){
				this.showNewsData=[];
				this.page=1;
				this.changeIndex(e.id);
			},
			
			changeIndex(index){
				var _this = this;
				_this.currentIndex = index;
				_this.moveLineOffset=(index*33.3333)+100/12;
				this.loadingText='正在加载数据...';
				
				uni.startPullDownRefresh({
					
				})
			},
			
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
			
			clickSend(){
			    uni.navigateTo({
			    	url:'sendNotice'
			    })	
			},
			
			dateFormat:function(time) {
				return this.getDateSecond(time);
			},
		}
	}
</script>

<style>
	page{background-color: #ebeef1;}
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
	
	.cell_holderBig{
		margin-top: 10rpx;
		/* margin-left: 0%; */
		/* width: 94%; */
		/* height: 320rpx; */
		display: flex;
		flex-direction: column;
		background-color: transparent;
		/* border-radius: 10rpx; */
	}
	
	
	.timeView{
		background-color: rgb(218,218,218);
		margin-top: 20rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border-radius: 40rpx;
		margin-left: 30%;
		width: 40%;
		color: #FFFFFF;
	}
	
	.cell_holder{
		margin-top: 20rpx;
		margin-left: 3%;
		width: 94%;
		/* height: 240rpx; */
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		border-radius: 10rpx;
	}
	
	.cell_title{
		padding-left: 20rpx;
		width: 60%;
		height: 80rpx;
		line-height: 80rpx;
		overflow: hidden;
		font-size: 40rpx;

	}
	.cell_seeDetail{
		padding-right: 20rpx;
		width: 40%;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 32rpx;
		text-align: right;
	}
	.cell_content{
		padding-top: 20rpx;
		padding-bottom: 20rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;


		line-height: 50rpx;
		overflow: hidden;
		font-size: 32rpx;
		color: #808080;
	}
	
	
	.loading-more {
		align-items: center;
		justify-content: center;
		padding-top: 14px;
		padding-bottom: 14px;
		text-align: center;
		background-color: transparent;
		
	}
	
	.loading-more-text {
		font-size: 28upx;
		color: #999;
	}
	
</style>
