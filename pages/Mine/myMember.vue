<template>
	<view style="width: 100%;">
		<!-- 表头 -->
		<view style="display: flex;flex-direction: row;height: 80rpx;background-color: #FFFFFF;">
			<view class="tabNav-item" v-for="(item, index) in tabList" :key="index" @tap="clickItem(item, index)">
				<text class="tabNav-item" :class="currentIndex == item.id ? 'tabNav-item-active' : ''">{{ item.name }}</text>
			</view>
		</view>
		<!-- 短移横线 点击哪个栏目就滑动到哪个栏目名字底下height-->
		<view :style="{ width: '25%', 'background-color': 'rgb(0,139,60)', height: '4rpx', 'margin-left': moveLineOffset + '%' }"></view>

		

		<view style="width: 100%;">
			<!-- 会员人数总概 -->
			<view class="topView">
				<view class="top_black" style="width: 70%;">张思德</view>
				<view class="top_pink">3</view>
			</view>
			<!-- 会员列表 -->
			<view class="uni-list" style="width: 100%;">
				<view class="uni-list-cell" style="display: flex;flex-direction: column;background-color: #F4F5F6;">
					<!-- 白色view -->
					<view class="cell_holder" v-for="(noti, index) in showNewsData" :key="index" @click="seeDetail(noti)">
						<!-- 左头像 -->
						<view style="width: 120rpx;height: 120rpx;margin-top: 20rpx;margin-bottom: 20rpx;margin-left: 30rpx;">
							<image class="cell_icon" src="" mode="">
								
							</image>
						</view>

						<!-- 右内容 -->
						<view class="uni-column" style="width: calc(100% - 180rpx);margin-top: 30rpx;">
							<view class="uni-row">
								<view class="cell_title">张思德</view>
								<view class="cell_title">13333333333</view>
							</view>
							<view class="uni-row">
								<view class="cell_time">会员号：21865956</view>
								<view class="cell_time">{{dateFormat(noti.time)}}</view>
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

.tabNav-item {
	color: rgb(53, 53, 53);
	width: 50%;
	text-align: center;
	line-height: 80rpx;
	/* flex-direction: row; */
}
.tabNav-item-active {
	color: rgb(53, 53, 53);
	line-height: 80rpx;
}





.topView {
	width: calc(100% - 60rpx);
	height: 80rpx;
	padding-left: 30rpx;
	padding-right: 30rpx;
	display: flex;
	flex-direction: row;
}
.top_black {
	height: 80rpx;
	line-height: 80rpx;
	color: rgb(51,51,51);
	font-size: 30rpx;
}
.top_pink {
	height: 80rpx;
	line-height: 80rpx;
	color: rgb(0,139,60);
	font-size: 26rpx;
	width: 30%;
	text-align: right;
}
.top_pink::before{
	content: '共';
	color: rgb(51,51,51);
	font-size: 30rpx;
}
.top_pink::after{
	content: '人';
	color: rgb(51,51,51);
	font-size: 30rpx;
}
.cell_holder {
	
	width: 100%;
	display: flex;
	flex-direction: row;
	background-color: #ffffff;
	/* background-color: #4CD964; */
	/* padding-left: 30rpx; */
	/* padding-right: 30rpx; */
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
	/* text-align: right; */
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
