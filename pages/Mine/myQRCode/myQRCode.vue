<template>
	<view class="page uni-row">
		<view class="leftView">
			<view v-for="(item,index) in qrTypeData" :key="index">
				<view   :class="currentIndex==index?'leftTitle_sel':'leftTitle'"
				@click="clickItem(index)">
					{{item.title}}
				</view>
			</view>
		</view>
		
		<view class="rightView">
			<view class="rightItem" v-for="(item,index) in 'dataList'" :key="index" @click="clickMe()">

			</view>
		</view>
	</view>
</template>

<script>
	export default{

		data(){
			return{
				theMid:'',
				currentIndex: 0,
				qrTypeData: [
					{
						title:'我的',
						content:'618最后冲刺，看直播抽免单、赢万千618最后冲刺，看直播抽免单、赢万千',
						time:1593571037
					},
					{
						title:'316冲施肥',
						content:'618最后冲刺，看直播抽免单、赢万千618最后冲刺，看直播抽免单、赢万千',
						time:1593571037
					},
					{
						title:'316颗粒底肥',
						content:'618最后冲刺，看直播抽免单、赢万千618最后冲刺，看直播抽免单、赢万千',
						time:1593571037
					},
					{
						title:'316叶面肥',
						content:'618最后冲刺，看直播抽免单、赢万千618最后冲刺，看直播抽免单、赢万千',
						time:1593571037
					}
				],
			}
		},
		
		onLoad(eee) {
			
			var _this = this;
			uni.getStorage({
				key: 'mid',
				success: function(res) {
					console.log('getStoragegemid' + res.data);
					_this.theMid = res.data;
					_this.getServicList();
				}
			});
			this.getServicList();
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
			clickItem(index){
				this.currentIndex=index;
			},
			clickMe(index){
				uni.navigateTo({
					url:'./myQRCodeDetail'
				})
			    
			},
			
			dateFormat:function(time) {
				return this.getDateSecond(time);
			},
		}
	}
</script>

<style>
	.leftView{
		width: 30%;

	}
	.leftTitle{
		width: 100%;
		height: 160rpx;
		line-height: 160rpx;
		color: rgb(51,51,51);
		text-align: center;
	}
	.leftTitle_sel{
		width: 100%;
		height: 160rpx;
		line-height: 160rpx;
		color: rgb(0,139,60);
		text-align: center;
	}
	.rightView{
		width: 70%;
		background-color: #E5E5E5;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.rightItem{
		width: 45.5%;
		height: 420rpx;
		margin-top: 20rpx;
		border-radius: 10rpx;
		margin-left: 3%;
		background-color: #09BB07;
	}
</style>
