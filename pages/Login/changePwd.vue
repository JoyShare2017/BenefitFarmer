<template>
	<view style="width: 100%;">
		<view class="uni-list">
			
	
			<view class="uni-list-cell" hover-class="none">
				<view class="uni-list-cell-navigate">
				<view style="display: flex;flex-direction: row;">
					<text class="item_title">原密码</text>
					<input type="text" password="true" class="item_input" placeholder="请填写旧密码"  v-model="oldPwd" />
				</view>
				</view>
			</view>
			
			<view class="uni-list-cell" hover-class="none">
				<view class="uni-list-cell-navigate">
				<view style="display: flex;flex-direction: row;">
					<text class="item_title">新密码</text>
					<input type="text" password="true" class="item_input" placeholder="请填写新密码"  v-model="newPwdOne" />
				</view>
				</view>
			</view>
			
			<view class="uni-list-cell" hover-class="none">
				<view class="uni-list-cell-navigate">
				<view style="display: flex;flex-direction: row;">
					<text class="item_title">确认密码</text>
					<input type="text" password="true" class="item_input" placeholder="请再次填写新密码"  v-model="newPwdTwo" />
				</view>
				</view>
			</view>
			
		</view>
		
		<button  style="margin-top: 100rpx;  width: 40%;margin-left: 30%;background-color: #FC0107;
		height: 80rpx;border-radius: 40rpx;color: #FFFFFF;line-height: 80rpx;
		"
		@click="clickSend()">确定</button>
	</view>
	
	
	
</template>

<script>
	export default {
		data() {
			return {
				oldPwd: '',
				newPwdOne:'',
				newPwdTwo: '',
			}
		},
		async onLoad(event) {
			this.theMid = await this.getUserInfoWithKey('mid');
		},
		methods:{
			
			async clickSend(){
				if(this.oldPwd.length<=0){
					uni.showToast({
						icon:"none",
						title:'请输入旧密码'
					})
					return;
				}
				if(this.newPwdOne.length<=0){
					uni.showToast({
						icon:"none",
						title:'请输入新密码'
					})
					return;
				}
				
				if(this.newPwdTwo.length<=0){
					uni.showToast({
						icon:"none",
						title:'请再次输入新密码'
					})
					return;
				}
				
				if(this.newPwdOne !=this.newPwdTwo){
					uni.showToast({
						icon:"none",
						title:'两次新密码不一致,请重新输入'
					})
					return;
				}
				
				
				
				
				var theApi='Home/User/setPass';
				var theData={
						mid:this.theMid,
						oldpass:this.oldPwd,
						newpass:this.newPwdOne,
						reppass:this.newPwdTwo,
	
				};
				var res = await this.requestFromServer({
					url:theApi,
					data:theData,
				})
				if(res.code.toString()=='1'){
					uni.showToast({
						icon:null,
						title:res.message
					})
					
					setTimeout(function(){
						uni.navigateBack({delta:2})
					},2000)
				}else{
					uni.showToast({
						icon:null,
						title:res.message
					})
				}
				
				
			}
		}
	}
</script>

<style>
	page{background-color: #ebeef1;}
	.item_title {
		color: #232323;
		font-size: 24rpx;
		width: 200rpx;
		
	}
	
	.item_input {
		margin-top: 10rpx;
		margin-left: 20rpx;
		font-size: medium;
		color: #3C3E49;
		font-size: 24rpx;
	
	}
</style>
