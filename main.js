import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'


var serverPath = 'http://wzf.shzzpt.org.cn/'
Vue.prototype.mainServer = serverPath;
Vue.prototype.requestFromServer = (options) => {

	var promise = new Promise((resolve, reject) => {
		uni.showNavigationBarLoading();
		uni.request({
			url: serverPath + options.url,
			data: options.data,
			method: 'POST',
			success: (res) => {
				uni.hideNavigationBarLoading();
				resolve(res.data);
			},
			fail: (fa) => {
				uni.hideNavigationBarLoading();
				reject(fa)
			}
		})
	});
	return promise;
}

Vue.prototype.getUserInfoWithKey = (key) => {
	//获取不到的话返回null
	var promise = new Promise((resolve, reject) => {
		uni.getStorage({
			key: key,
			success: function(res) {
				resolve(res.data);
			},
			fail: function(res) {
				resolve(null)
			}
		});
	});
	return promise;
}


Vue.prototype.getDateDay = (time) => {

	var date = new Date(time * 1000);
	var year = date.getFullYear();
	var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
	var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

	return year + "." + month + "." + day;
}

Vue.prototype.getDateSecond = (time) => {

	var date = new Date(time * 1000);
	var year = date.getFullYear();
	var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
	var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
	var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
	var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
	var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

	return year + "." + month + "." + day + ' ' + hours + ':' + minutes+ ':' + seconds;
}

//统一的图片上传工具,支持多选
Vue.prototype.chooseImgAndUpload = (options) => {

	var promise = new Promise((resolve, reject) => {
		uni.showActionSheet({
			itemList: ['相册', '拍照'],
			success: (res) => {
				uni.chooseImage({
					count: options.count ? options.count : 1,//这里是可以选择的最大张数
					sizeType: ['orginal', 'compressed'],
					sourceType: res.tapIndex == 1 ? ['camera'] : ['album'],
					success: (res) => {
						uni.showLoading({});

						var serverPaths = []; //上传成功后 返回来的地址数组
						var alreadCount = 0; //已经处理完的
						var allCount = res.tempFilePaths.length;//选取的图片的张数
						
						res.tempFilePaths.forEach(path => {
							const uploadtask = uni.uploadFile({
								url: serverPath + '/Home/Img/upload',
								filePath: path,
								name: 'file',
								formData: {
									'image': 'image',
									'path': options.path,
									'uptype': 1 //1 流文件 2 base64的
								},
								success: function(uploadResult) {
									console.log(uploadResult.data);
									alreadCount++;
									if (JSON.parse(uploadResult.data).code == 1) {
										console.log('push');
										serverPaths.push(JSON.parse(uploadResult.data).path);
									}
									console.log('alreadCount'+alreadCount+'allCount'+allCount);
									if (alreadCount == allCount) {
										resolve(serverPaths);
										uni.hideLoading();
									}
								},
								fail: (fail) => {
									alreadCount++;
									if (alreadCount == allCount) {
										resolve(serverPaths);
										uni.hideLoading();
									}
								}
							})
						});
					}
				})
			}


		})
	});
	return promise;
}

const app = new Vue({
	...App
})
app.$mount()
