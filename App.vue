<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "./common/uni.css";
	@import "./common/iconfont.css";
	.page{
		background-color: rgb(240,240,240);
		width: 100%;
	}
	.row{
		display: flex;
		flex-direction: row;
	}
	.column{
		display: flex;
		flex-direction: column;
	}
	.systemGreen{
		background-color: #1AAD19;
	}
	
</style>
