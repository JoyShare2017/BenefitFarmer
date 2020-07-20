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

		<!-- 订单统计 -->
		<view v-if="currentIndex == 0">
			<view class="search_holder">
				<!-- 多功能列表 -->
				<view class="uni-list" style="margin-top: 10rpx;">
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right" style="width: 100%;">
							<picker mode="date"   @change="dateStart">
								<view style="margin-left: 20rpx;width: 100%;">{{ start }}</view>
							</picker>
						</view>
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-list-cell-navigate uni-navigate-right" style="width: 100%;">
							<picker mode="date"  @change="dateEnd">
								<view style="margin-left: 20rpx;width: 100%;">{{ end }}</view>
							</picker>
						</view>
					</view>
					
					<!-- :value="date" :start="startDate" :end="endDate" -->
					

					<button class="searchBtn" type="default">搜索</button>
				</view>
			</view>
			
			<!-- 全部订单 -->
			<view style="background-color: #FFFFFF;margin-top: 40rpx;">
				<view class="uni-row" style="border-bottom: 1rpx solid #E5E5E5;">
					<view class="qbdd">
						全部订单
					</view>
					<view class="qbddgs">
						98个
					</view>
				</view>
				
				
				<view class="uni-row" v-for="(item,index) in orderSumList" :key="index">
					
					
					
					<view class="otherdd">
						{{item.name}}
					</view>
					<view class="otherddgs">
						33
					</view>
				</view>
			</view>
			
		</view>

        <!-- 会员统计 -->
		<view v-show="currentIndex == 1">
			<!-- 会员人数总概 -->
			<view class="topView">
				<view class="top_black">共有</view>
				<view class="top_pink">100</view>
				<view class="top_black">人，有效</view>
				<view class="top_pink">50</view>
				<view class="top_black">人；其中专属</view>
				<view class="top_pink">30</view>
				<view class="top_black">人，有效</view>
				<view class="top_pink">23</view>
				<view class="top_black">人</view>
			</view>
			<!-- 会员列表 -->
			<view class="uni-list">
				<view class="uni-list-cell" style="display: flex;flex-direction: column;background-color: #F4F5F6;">
					<!-- 白色view -->
					<view class="cell_holder uni-list-cell-navigate uni-navigate-right" v-for="(noti, index) in showNewsData" :key="index" @click="seeDetail(noti)">
						<!-- 左头像 -->
						<view style="width: 150rpx;height: 120rpx;margin-top: 20rpx;margin-bottom: 20rpx;"><image class="cell_icon" src="" mode=""></image></view>

						<!-- 右内容 -->
						<view class="uni-column" style="width: calc(100% - 150rpx);">
							<view>
								<view class="cell_title">{{ noti.title }}</view>

								<view class="uni-row">
									<view class="cell_time">{{ dateFormat(noti.time) }}</view>
									<view class="useful">有效</view>
									<view class="useless">无效</view>
								</view>
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
			start: '请选择开始时间',
			end: '请选择结束时间',
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
					name: '订单统计'
				},
				{
					id: 1,
					name: '会员统计'
				}
			],
			orderSumList: [
				
				{
					id: 1,
					name: '已完成订单'
				},
				{
					id: 2,
					name: '待确认订单'
				},
				{
					id: 3,
					name: '待收货订单'
				},
				{
					id: 4,
					name: '待审核订单'
				},
				{
					id: 5,
					name: '换货订单'
				},
				{
					id: 6,
					name: '退货订单'
				},
				{
					id: 7,
					name: '上传订单'
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
page {
	background-color: #FFFFFF;
}
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

.search_holder {
	margin-top: 30rpx;
	margin-left: 30rpx;
	width: calc(100% - 60rpx);
	background-color: #bebebe;
	-moz-box-shadow:2px 2px 10px rgb(175, 175, 175);
	-webkit-box-shadow:2px 2px 10px rgb(175, 175, 175);
	box-shadow:2px 2px 10px rgb(175, 175, 175);
}
.searchBtn {
	margin-top: 40rpx;
	background-color: rgb(0, 139, 60);
	color: #ffffff;
	margin-left: 60rpx;
	margin-right: 60rpx;
	height: 100rpx;
	line-height: 100rpx;
	font-size: 30rpx;
	margin-bottom: 40rpx;
}

.timeView {
	background-color: rgb(218, 218, 218);
	margin-top: 20rpx;
	height: 80rpx;
	line-height: 80rpx;
	text-align: center;
	border-radius: 40rpx;
	margin-left: 30%;
	width: 40%;
	color: #ffffff;
}
.qbdd {
	color: rgb(51, 51, 51);
	width: 50%;
	line-height: 100rpx;
	font-size: 32rpx;
	padding-left: 30rpx;
}
.qbddgs {
	color: rgb(0,139,60);
	width: 50%;
	line-height: 100rpx;
	font-size: 32rpx;
	text-align: right;
	padding-right: 30rpx;
}
.otherdd {
	color: rgb(153,153,153);
	width: 50%;
	line-height: 80rpx;
	font-size: 28rpx;
	padding-left: 30rpx;
}
.otherddgs {
	color: rgb(51,51,51);
	width: 50%;
	line-height: 80rpx;
	font-size: 28rpx;
	text-align: right;
	padding-right: 30rpx;
}
/* 会员统计部分css */

.topView {
	/* width: 100%; */
	height: 80rpx;
	background-color: rgb(254, 245, 225);
	padding-left: 30rpx;
	display: flex;
	flex-direction: row;
}
.top_black {
	height: 80rpx;
	line-height: 80rpx;
	color: rgb(51, 51, 51);
	font-size: 26rpx;
}
.top_pink {
	height: 80rpx;
	line-height: 80rpx;

	color: rgb(255, 78, 0);
	font-size: 26rpx;
}

.cell_holder {
	/* margin-top: 20rpx;
		margin-left: 0%;
		width: 94%; */
	/* height: 240rpx; */
	display: flex;
	flex-direction: row;
	background-color: #ffffff;
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
}
.cell_time {
	padding-left: 20rpx;
	height: 50rpx;
	line-height: 50rpx;
	color: rgb(153, 153, 153);
	font-size: 24rpx;
	margin-top: 0rpx;
}
.useful {
	margin-left: 20rpx;
	margin-top: 10rpx;
	height: 32rpx;
	line-height: 32rpx;
	font-size: 22rpx;
	width: 60rpx;
	border-radius: 6rpx;
	background-color: rgb(0, 139, 60);
	color: #ffffff;
	text-align: center;
}
.useless {
	margin-left: 20rpx;
	margin-top: 10rpx;
	height: 32rpx;
	line-height: 32rpx;
	font-size: 22rpx;
	width: 60rpx;
	border-radius: 6rpx;
	background-color: rgb(175, 175, 175);
	color: #ffffff;
	text-align: center;
}
.cell_seeDetail {
	padding-right: 20rpx;
	width: 40%;
	height: 80rpx;
	line-height: 80rpx;
	font-size: 24rpx;
	text-align: right;
}
.cell_content {
	/* padding-left: 20rpx; */
	padding-right: 20rpx;

	line-height: 50rpx;
	overflow: hidden;
	font-size: 30rpx;
	color: rgb(51, 51, 51);
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
