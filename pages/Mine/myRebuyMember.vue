<template>
	<view style="width: 100%;">
		
		<view >
			<!-- 会员人数总概 -->
			<view class="topView">
				<view class="top_black">您当前的会员号为：31480449</view>
				
			</view>
			<!-- 会员列表 -->
			<view class="uni-list">
				<view class="uni-list-cell" style="display: flex;flex-direction: column;background-color: #F4F5F6;">
					<!-- 白色view -->
					<view class="cell_holder" v-for="(noti, index) in showNewsData" :key="index" @click="seeDetail(noti)">
						<!-- 左头像 -->
						<view style="width: 150rpx;height: 120rpx;margin-top: 20rpx;margin-bottom: 20rpx;margin-left: 30rpx;">
							<image class="cell_icon" src="" mode="">
								
							</image>
						</view>

						<!-- 右内容 -->
						<view class="uni-column" style="width: calc(100% - 150rpx);margin-top: 30rpx;">
							<view class="uni-row">
								<view class="cell_title">张思德</view>
								<view class="cell_title">13333333333</view>

								
							</view>
							<view class="uni-row">
								<view class="cell_time">会员号：21865956</view>
								<view class="cell_time">{{ dateFormat(noti.time) }}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="loading-more">
				<text class="loading-more-text" @click="loadMore()">{{ loadingText }}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			theMid: '',
			moveLineOffset: 100 / 8,
			currentIndex: 0,
			showNewsData: [
				{
					title: '北极***    会员号：21865956！',
					content: '重复关注会员：昵称为【开心就好】的朋友，在2020-06-15 10:36:03已经关注成为【惠农6:03已经关公',
					time: 1593571037
				},
				{
					title: '北极***    会员号：21865956',
					content: '618最后冲刺，看直播抽免单、赢万千618最后冲刺，看直播抽免单、赢万千',
					time: 1593571037
				},
				{
					title: '北极***    会员号：21865956',
					content: '618最后冲刺，看直播抽免单、赢万千618最后冲刺，看直播抽免单、赢万千',
					time: 1593571037
				},
				{
					title: '北极***    会员号：21865956',
					content: '618最后冲刺，看直播抽免单、赢万千618最后冲刺，看直播抽免单、赢万千',
					time: 1593571037
				}
			],
			tabList: [
				{
					id: 0,
					name: '已购买'
				},
				{
					id: 1,
					name: '未购买'
				}
			],
			
			page: 1,
			loadingText: '正在加载数据...'
		};
	},
	onReachBottom() {
		this.page++;
		this.loadingText = '正在加载更多数据...';
		this.getServicList();
	},
	onPullDownRefresh() {
		this.getServicList();
	},
	onLoad(eee) {
		var _this = this;
		uni.getStorage({
			key: 'mid',
			success: function(res) {
				console.log('getStoragegemid' + res.data);
				_this.theMid = res.data;
				// _this.getServicList();
			}
		});
		// this.getServicList();
	},
	methods: {
		clickItem(e, index) {
			// this.showNewsData=[];
			this.page = 1;
			var _this = this;
			_this.currentIndex = e.id;
			_this.moveLineOffset = e.id * 50 + 100 / 8;
			this.loadingText = '正在加载数据...';
			_this.isDraft = _this.currentIndex == 2;
			uni.startPullDownRefresh({});
		},
		dateStart(e) {
			this.start = e.target.value;
		},
		dateEnd(e) {
			this.end = e.target.value;
		},
		async getServicList() {
			var serverUrl = 'Home/Message/getList';
			var data = {
				mid: this.theMid,
				type: this.currentIndex,
				limit: 10,
				page: this.page
			};
			var res = await this.requestFromServer({
				url: serverUrl,
				data: data
			});
			if (this.page == 1) {
				this.showNewsData = [];
			}
			uni.stopPullDownRefresh();
			if (res.data) {
				this.showNewsData = this.showNewsData.concat(res.data);
				if (res.data.length < 10) {
					this.loadingText = '没有更多数据了';
				} else {
					this.loadingText = '加载更多数据...';
				}
			} else {
				this.loadingText = '没有更多数据了';
			}
		},

		seeDetail(noti) {
			uni.navigateTo({
				url: './memberDetail'
			});
		},

		dateFormat: function(time) {
			return this.getDateSecond(time);
		}
	}
};
</script>

<style>


.topView {
	/* width: 100%; */
	height: 80rpx;
	padding-left: 30rpx;
	display: flex;
	flex-direction: row;
}
.top_black {
	height: 80rpx;
	line-height: 80rpx;
	color: rgb(153,153,153);
	font-size: 28rpx;
}
.top_pink {
	height: 80rpx;
	line-height: 80rpx;
	color: rgb(0,139,60);
	font-size: 26rpx;
}

.cell_holder {
	
	width: 100%;
	display: flex;
	flex-direction: row;
	background-color: #ffffff;
	/* padding-left: 30rpx; */
	/* border-radius: 10rpx; */
}

.cell_title {
	/* margin-top: 30rpx; */
	padding-left: 20rpx;
	height: 50rpx;
	line-height: 50rpx;
	overflow: hidden;
	font-size: 28rpx;
	color: rgb(51, 51, 51);
	width: 50%;
}
.cell_time {
	padding-left: 20rpx;
	height: 50rpx;
	line-height: 50rpx;
	color: rgb(153, 153, 153);
	font-size: 24rpx;
	width: 50%;
}



.cell_icon {
	width: 120rpx;
	height: 120rpx;
	/* padding-left: 30rpx; */
	border-radius: 80rpx;
	background-color: #09bb07;
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
