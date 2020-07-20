<template>
	<view class="page">
		<image class="bigImg" :src="bigUrl" mode=""></image>
		<view class="bottom_btn" @click="saveImgToLocal()">下载</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			bigUrl:
				'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594871438650&di=3be2a7642fd816b2569330c87ea883c9&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F1%2F31%2F4dc619b687.jpg'
		};
	},

	methods: {
		saveImgToLocal: function(e) {
			var _this = this;
			uni.showModal({
				title: '提示',
				content: '确定保存到相册吗',
				success: function(res) {
					if (res.confirm) {
						uni.downloadFile({
							url: _this.bigUrl,
							success: res => {
								if (res.statusCode === 200) {
									uni.saveImageToPhotosAlbum({
										filePath: res.tempFilePath,
										success: function() {
											uni.showToast({
												title: '保存成功',
												icon: 'none'
											});
										},
										fail: function() {
											uni.showToast({
												title: '保存失败',
												icon: 'none'
											});
										}
									});
								}
							}
						});
					} else if (res.cancel) {
					}
				}
			});
		}
	}
};
</script>

<style>
.bigImg {
	margin-top: 20rpx;
	margin-left: 5%;
	width: 90%;
	background-color: #007aff;
	height: 800rpx;
}
.bottom_btn {
	width: 100%;
	height: 100rpx;
	line-height: 100rpx;
	font-size: 30rpx;
	text-align: center;
	background-color: rgb(0, 139, 60);
	position: fixed;
	bottom: calc(var(--window-bottom));
	color: #ffffff;
}
</style>
