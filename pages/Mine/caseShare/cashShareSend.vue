<template>
	<view class="page">
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate" style="width: 100%;">
					<view style="display: flex;flex-direction: row;width: 100%;">
						<input type="text" class="item_input" value="" placeholder="请输入视频标题" v-model="videoTitle" />
					</view>
				</view>
			</view>
			<view style="display: flex;flex-direction: column;width: 100%;padding: 30rpx;">
				<textarea class="item_input_long" placeholder="内容描述（限制在200字）" focus v-model="videoDes" />
			</view>

			<!-- 添加视频 -->
			<view style="padding: 30rpx;"><view class="addVideo" @click="addV()"></view></view>
		</view>

		<view style="margin-top: 0rpx;"><button class="loginBtn" @click="send()">确认发布</button></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			videoTitle: '',
			videoDes: '',
			src: ''
		};
	},
	methods: {
		addV() {
			var self = this;
			uni.chooseVideo({
				count: 1,
				sourceType: ['album', 'camera'],
				success: function(res) {
					console.log(res.tempFilePath);
					self.src = res.tempFilePath;
				}
			});
		},
		send(){
			if(this.videoTitle.length==0){
				uni.showToast({
					icon:'none',
					title:'请输入视频标题'
				})
				return;
			}
			if(this.videoDes.length==0){
				uni.showToast({
					icon:'none',
					title:'请输入视频描述'
				})
				return;
			}
		}
	}
};
</script>

<style>
page {
	background-color: rgb(240, 240, 240);
}
.item_input {
	margin-top: 0rpx;
	height: 50rpx;
	line-height: 50rpx;
	font-size: medium;
	color: #3c3e49;
	font-size: 32rpx;
	width: 100%;
}
.item_input_long {
	height: 200rpx;

	font-size: 28rpx;
	color: #3c3e49;
	font-size: 28rpx;
	width: calc(100% - 60rpx);
	line-break: auto;
	/* background-color: #09BB07; */
}
.loginBtn {
	margin-top: 100rpx;
	background-color: rgb(0, 139, 60);
	color: #ffffff;
	margin-left: 60rpx;
	margin-right: 60rpx;
	height: 100rpx;
	line-height: 100rpx;
	font-size: 30rpx;
}
.addVideo {
	width: 200rpx;
	height: 200rpx;
	background-color: #007aff;
	border-radius: 8rpx;
}
</style>
