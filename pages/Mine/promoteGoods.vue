<template>
	<view style="width: 100%;">
		<!-- 表头 -->
		<view style="display: flex;flex-direction: row;height: 80rpx;background-color: #FFFFFF;">
			<view class="tabNav-item" v-for="(item, index) in tabList" :key="index" @tap="clickItem(item, index)">
				<text class="tabNav-item" :class="currentIndex == item.id ? 'tabNav-item-active' : ''">{{ item.name }}</text>
			</view>
		</view>
		<!-- 短移横线 点击哪个栏目就滑动到哪个栏目名字底下height-->
		<view :style="{ width: '16.6667%', 'background-color': 'rgb(0,139,60)', height: '4rpx', 'margin-left': moveLineOffset + '%' }"></view>
		<!-- 商品列表 -->
		<view class="uni-list page" style="margin-top: 20rpx;">
			<view class="uni-list-cell uni-row" style="margin-bottom: 20rpx;">
				<view class="cellHolder" @click="seeDetail()">
					<image class="img" mode=""></image>

					<view>
						<view class="sku">惠农316冲施肥宣传片</view>
						<view class="detail">上传时间 2020-06-18</view>

						<view class="uni-row" style="margin-top: 10rpx;">
							<view class="smlBtn iconfont icon-yulan">预览</view>
							<view class="smlBtn iconfont icon-xiazai">下载</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="loading-more">
			<text class="loading-more-text" @click="loadMore()">{{ loadingText }}</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			theMid: '',
			moveLineOffset: 100 / 12,
			currentIndex: 0,
			showNewsData: [
				{
					title: '最后4小时！最后4小时！最后4小时！最后4小时！',
					content: '重复关注会员：昵称为【开心就好】的朋友，在2020-06-15 10:36:03已经关注成为【惠农6:03已经关公',
					time: 1593571037
				},
				{
					title: '会员通知',
					content: '618最后冲刺，看直播抽免单、赢万千618最后冲刺，看直播抽免单、赢万千',
					time: 1593571037
				},
				{
					title: '订单通知',
					content: '618最后冲刺，看直播抽免单、赢万千618最后冲刺，看直播抽免单、赢万千',
					time: 1593571037
				},
				{
					title: '我的评价',
					content: '618最后冲刺，看直播抽免单、赢万千618最后冲刺，看直播抽免单、赢万千',
					time: 1593571037
				}
			],
			tabList: [
				{
					id: 0,
					name: '视频'
				},
				{
					id: 1,
					name: '图片'
				},
				{
					id: 2,
					name: '文件'
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
			this.showNewsData = [];
			this.page = 1;
			var _this = this;
			_this.currentIndex = e.id;
			_this.moveLineOffset = e.id * 33.3333 + 100 / 12;
			this.loadingText = '正在加载数据...';
			_this.isDraft = _this.currentIndex == 2;
			uni.startPullDownRefresh({});
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

		clickSend() {
			uni.navigateTo({
				url: 'sendNotice'
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
	background-color: #ebeef1;
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

.cellHolder {
	margin-left: 20rpx;
	margin-right: 20rpx;

	padding: 20rpx;
	background-color: #ffffff;
	border-radius: 10rpx;
	display: flex;
	flex-direction: row;
	/* background-color: #007AFF; */
	width: 100%;
}

.img {
	width: 160rpx;
	height: 160rpx;
	border-radius: 10rpx;
	background-color: #09bb07;
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

.cell_holder {
	margin-top: 20rpx;
	margin-left: 3%;
	width: 94%;
	/* height: 240rpx; */
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	border-radius: 10rpx;
}

.sku {
	padding-left: 30rpx;
	color: rgb(53, 53, 53);
	font-size: 32rpx;
}
.detail {
	padding-left: 30rpx;
	color: rgb(135, 135, 135);
	font-size: 24rpx;
}
.smlBtn {
	padding-left: 30rpx;
	color: rgb(102, 102, 102);
	font-size: 28rpx;
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
