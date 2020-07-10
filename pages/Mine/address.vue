<template>
	<view class="page">
		<!-- 新增地址 -->
		<view class="uni-list" style="margin-top: 20rpx;">
			<view class="uni-list-cell-navigate uni-navigate-right" 
				hover-class="uni-list-cell-hover"  @click="addadd()">
				<view style="display: flex;flex-direction: row;width: 100%;">
					<view class="iconfont icon-xinzeng"></view>
					<view   style="margin-left: 20rpx;width: 40%;"> 新增地址</view>
				</view>
			</view>
				
			
		</view>
		
		<!-- 收货地址列表 -->
		<view class="uni-list" style="margin-top: 20rpx;">
			<view class="uni-list-cell">
				<view class="cellHolder">
					<view class="namePhone" style="height: 100rpx;line-height: 100rpx;">
						张三   15622222222
					</view>
					<view class="place">
						河北省石家庄事河北省石家庄事河北省石家庄事河北省石家庄事
					</view>
					
					<view class="uni-row" style="margin-bottom: 20rpx;">
						<view style="width: 60%;">
							<label style="60%">
								<checkbox :value="1" /><text>蛇尾默认是</text>
							</label>
						</view>
						
						<view class="uni-row" style="width: 40%;">
							<button class="editbtn" type="default" @click="edit()">编辑</button>
							<button class="delbtn" type="default" @click="del()">删除</button>
						</view>
						
					</view>
				</view>
				
			</view>
				
			
		</view>
	</view>
</template>

<script>

	export default{
		
		data(){
			return{
				
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
			del(){
				uni.showModal({
					title: '提示',
					content: '确定删除?',
					success: function(res) {
						if (res.confirm) {
							console.log('点击确定');
							
									
						}
					}
				})
			},
			addadd(){
			    uni.navigateTo({
			    	url:'./addAddress'
			    })	
			},
			edit(){
			    uni.navigateTo({
			    	url:'./addAddress'
			    })	
			},
			
			dateFormat:function(time) {
				return this.getDateSecond(time);
			},
		}
	}
</script>

<style>
	
	.cellHolder{
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.namePhone{
		padding-left: 30rpx;
		height: 50rpx;
		line-height: 50rpx;
		font-size: 32rpx;
		color: rgb(40,40,40);
	}
	.place{
		padding-left: 30rpx;
		/* height: 50rpx; */
		line-height: 50rpx;
		font-size: 28rpx;
		color: rgb(153,153,153);
	}
	.editbtn{
		height: 46rpx;
		line-height: 46rpx;
		font-size: 28rpx;
		width: 120rpx;
		color: rgb(0,139,60);
		background-color: transparent;
	}
	.editbtn::after{
		border-color: rgb(0,139,60);
	}
	
	.delbtn{
		height: 46rpx;
		line-height: 46rpx;
		font-size: 28rpx;
		width: 120rpx;
		color: rgb(51,51,51);
		background-color: transparent;
	}
	.delbtn::after{
		border-color: rgb(51,51,51);
	}
</style>
