<template>
	<view style="width: 100%;">
		<!-- 表头 -->
		<view   style="display: flex;flex-direction: row;height: 110rpx;background-color: #FFFFFF;">
			<view class="tabNav-item" v-for="(item,index) in tabList" :key="index" @tap="clickItem(item,index)">
				<view >
					<view class="tabName" style="width: 100%;">
						{{item.name}}
					</view>
					<view class="tabName_gray" v-if="item.id==1">（请联系客服）</view>
				</view>
				
				
				
				
			</view>
		</view>
		<!-- 短移横线 点击哪个栏目就滑动到哪个栏目名字底下height-->
		<view :style="{'width': '25%','background-color': 'rgb(0,139,60)',
		 'height': '4rpx','margin-left':moveLineOffset+'%',}">
		
		</view>
		
		<view class="uni-row" style="background-color: rgb(253,251,238);">
			<view class="receiptTip">
				电子普票效力等同纸质普通发票，用户可自行打印
			</view>
			<button class="receiptKnow" type="default" @click="needknow()">发票须知</button>
		</view>
		
		<!-- 发票抬头 -->
		<view style="background-color: #FFFFFF;padding-top: 30rpx;padding-bottom: 30rpx;">
			<view class="textGray">
				请确认发票抬头
			</view>
			<view class="uni-row" style="margin-top: 20rpx;">
				<button class="taitouBtn_Sel" type="default">
					个人/非企业单位
				</button>
				<button class="taitouBtn_Nor" type="default">
					公司抬头
				</button>
			</view>
		</view>
		
		<!-- 多功能列表1 -->
		<view class="uni-list" style="margin-top: 20rpx;">
			<view class="uni-list-cell"  
			style="display: flex;flex-direction: column;"
			v-for="(fun,funcIndex) in firstSection" :key="funcIndex">
				
				<view class="uni-list-cell-navigate" style="width: 100%;">
					<view style="display: flex;flex-direction: row;width: 100%;">
						<view style="margin-left: 20rpx;color: #FF3333;">*</view>
						<view style="width: 30%;">{{fun.title}}</view>
						
						<input class="theInput" v-if="fun.index==0" v-model="taitou" type="text" :placeholder="fun.holder"/>
						<input class="theInput" v-if="fun.index==1" v-model="shibiehao" type="text" :placeholder="fun.holder"/>
						<input class="theInput" v-if="fun.index==2" v-model="address" type="text" :placeholder="fun.holder"/>
						<input class="theInput" v-if="fun.index==3" v-model="openBank" type="text" :placeholder="fun.holder"/>
						<input class="theInput" v-if="fun.index==4" v-model="email" type="text" :placeholder="fun.holder"/>
					</view>
				</view>
				
			</view>
		</view>
		
		<!-- 多功能列表2 -->
		<view class="uni-list" style="margin-top: 20rpx;">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" 
			style="display: flex;flex-direction: column;"
			v-for="(fun,funcIndex) in secondSection" :key="funcIndex">
				
				<view class="uni-list-cell-navigate" style="width: 100%;">
					<view style="display: flex;flex-direction: row;width: 100%;">
						
						<view v-if="funcIndex==0" style="width: 40%;color: rgb(51,51,51);font-size: 32rpx;font-weight: bold;">{{fun.title}}</view>
						
						<view v-if="funcIndex!=0" style="width: 40%;">{{fun.title}}</view>
						<view v-if="funcIndex==1" style="text-align: right;width: 60%;">
							商品明细
						</view>
						<view v-if="funcIndex==2" style="text-align: right;width: 60%;">
							￥120.00
						</view>
		
					</view>
				</view>
				
			</view>
		</view>
		
		<button class="loginBtn" @click="clickOk()">提交</button>
	</view>
</template>

<script>

	export default{
		
		data(){
			return{
				theMid:'',
				moveLineOffset: 100/8,
				currentIndex: 0,
				taitou:'',
				shibiehao:'',
				address:'',
				openBank:'',
				email:'',
				firstSection:[
					{
						index:0,
						title:'发票抬头',
						holder:'请填写单位名称（个人不可填写）'
					},
					{
						index:1,
						title:'缴纳人识别号',
						holder:'请填写单位缴纳人识别号'
					},
					{
						index:2,
						title:'地址',
						holder:'请填写单位地址'
					},
					{
						index:3,
						title:'开户行',
						holder:'请填写单位开户行信息'
					},
					{
						index:4,
						title:'邮箱',
						holder:'用来接收电子发票的邮箱'
					}
				],
				secondSection:[
					{
						index:0,
						title:'发票信息',
					},
					{
						index:1,
						title:'发票内容',
					},
					{
						index:2,
						title:'发票金额'
					}
					
				],
				tabList: [{
					id: 0,
					name: '电子普票'
				}, {
					id: 1,
					name: '专用发票'
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
			clickItem(e,index){
				this.showNewsData=[];
				this.page=1;
				var _this = this;
				_this.currentIndex = e.id;
				_this.moveLineOffset=(e.id*50)+100/8;
				this.loadingText='正在加载数据...';
				_this.isDraft=_this.currentIndex==2;
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
			needknow() {
				uni.navigateTo({
					url: './receiptKnow'
				});
			},
			
			clickOk(){
			    uni.navigateTo({
			    	url:'receiptConfirm'
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
		line-height: 110rpx;
		/* flex-direction: row; */
	}
	.tabNav-item-active {
		color: rgb(53,53,53);
		line-height: 80rpx;
	
	}
	
	.tabName {
		color: rgb(53,53,53);
		text-align: center;
		line-height: 50rpx;
		margin-top: 20rpx;
		/* flex-direction: row; */
	}
	.tabName_gray {
		color: rgb(153,153,153);
		text-align: center;
		line-height: 30rpx;
		/* flex-direction: row; */
	}
	
	.receiptTip{
		font-size: 26rpx;color: rgb(255,75,75);
		height: 80rpx;line-height: 30rpx;width: calc(100% - 210rpx);
		padding-left: 30rpx;
		padding-top: 10rpx;
	}
	
	
	
	.textGray{
		padding-left: 30rpx;
		/* width: 60%; */
		height: 50rpx;
		line-height: 50rpx;
		font-size: 30rpx;
		color: rgb(51,51,51);

	}
	
	.taitouBtn_Sel{
		height: 68rpx;
		line-height: 68rpx;
		background-color: rgb(0,139,60);
		font-size: 28rpx;
		border-radius: 6rpx;
		margin-left: 30rpx;
		width: 40%;
		color: #FFFFFF;
	}
	.taitouBtn_Nor{
		height: 68rpx;
		line-height: 68rpx;
		background-color: #FFFFFF;
		font-size: 28rpx;
		border-radius: 6rpx;
		margin-left: 30rpx;
		width: 40%;
	}
	.taitouBtn::after{
		border-color: rgb(102,102,102);
	}
	
	
	
	
	
	.receiptKnow {
		height: 46rpx;
		color: rgb(255, 86, 81);
		line-height: 46rpx;
		width: 140rpx;
		font-size: 24rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
		margin-top: 17rpx;
		background-color: transparent;
	}
	.receiptKnow::after {
		border-color: rgb(255, 86, 81);
	}
	
	
	.theInput{
		width: 70%;
		font-size: 30rpx;
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
	
</style>
