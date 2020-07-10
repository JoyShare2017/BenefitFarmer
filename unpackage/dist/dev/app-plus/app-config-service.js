
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/Home/homeTab","pages/Home/goodsDetail","pages/Home/goodsComment","pages/Cart/cartTab","pages/Cart/orderConfirm","pages/Message/messageTab","pages/Message/messageList","pages/Message/commentList","pages/Mine/mineTab","pages/Mine/commissionOrder","pages/Mine/userManage","pages/Mine/myAchieve","pages/Mine/PromoteFee","pages/Mine/cashUp","pages/Mine/cashUpRecord","pages/Mine/cashUpDescription","pages/Mine/safePrivacy","pages/Login/changePhone","pages/Mine/address","pages/Mine/addAddress","pages/Mine/statisticData","pages/Mine/memberDetail","pages/Mine/myMember","pages/Mine/myRebuyMember","pages/Mine/MyOrder/myOrderList","pages/Mine/MyOrder/applyReturn","pages/Mine/MyOrder/logisticsDetail","pages/Mine/MyOrder/myOrderDetail","pages/Mine/MyOrder/paySuccess","pages/Mine/MyOrder/returnDetail","pages/Mine/MyOrder/applyReturn","pages/Mine/myJiFen","pages/Mine/jifenDes","pages/Mine/customerService","pages/Mine/farmerStory","pages/Mine/promoteGoods","pages/Mine/farmerStoryDetail","pages/Login/login","pages/Login/regist","pages/Login/find","pages/Login/changePwd","pages/Mine/receiptManage/receiptMan","pages/Mine/receiptManage/receiptApply","pages/Mine/receiptManage/receiptConfirm","pages/Mine/receiptManage/receiptEdit","pages/Mine/receiptManage/receiptHistory","pages/Mine/receiptManage/receiptKnow","pages/Mine/receiptManage/receiptPath","pages/Mine/receiptManage/receiptProgresss","pages/Mine/receiptManage/receiptSendEmail","pages/Mine/caseShare/caseShareHome","pages/Mine/caseShare/cashShareSend"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"backgroundColor":"#ffffff","color":"#000000","selectedColor":"#FC0107","list":[{"pagePath":"pages/Home/homeTab","text":"首页"},{"pagePath":"pages/Cart/cartTab","text":"购物车"},{"pagePath":"pages/Message/messageTab","text":"消息"},{"pagePath":"pages/Mine/mineTab","text":"我的"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"BenefitFarmer","compilerVersion":"2.6.16","entryPagePath":"pages/Home/homeTab","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/Home/homeTab","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":true,"backgroundTextStyle":"dark","pullToRefresh":{"offset":"0px","style":"default","contentdown":"正在刷新...","color":"#333333"}}},{"path":"/pages/Home/goodsDetail","meta":{},"window":{"navigationBarTitleText":"商品详情"}},{"path":"/pages/Home/goodsComment","meta":{},"window":{"navigationBarTitleText":"商品评价","enablePullDownRefresh":true,"backgroundTextStyle":"dark","pullToRefresh":{"offset":"0px","style":"default","contentdown":"正在刷新...","color":"#333333"}}},{"path":"/pages/Cart/cartTab","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"购物车","enablePullDownRefresh":true,"backgroundTextStyle":"dark","pullToRefresh":{"offset":"0px","style":"default","contentdown":"正在刷新...","color":"#333333"}}},{"path":"/pages/Cart/orderConfirm","meta":{},"window":{"navigationBarTitleText":"订单确认"}},{"path":"/pages/Message/messageTab","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"消息","enablePullDownRefresh":true,"backgroundTextStyle":"dark","pullToRefresh":{"offset":"0px","style":"default","contentdown":"正在刷新...","color":"#333333"}}},{"path":"/pages/Message/messageList","meta":{},"window":{"navigationBarTitleText":"消息","enablePullDownRefresh":true,"backgroundTextStyle":"dark","pullToRefresh":{"offset":"0px","style":"default","contentdown":"正在刷新...","color":"#333333"}}},{"path":"/pages/Message/commentList","meta":{},"window":{"navigationBarTitleText":"我的评价","enablePullDownRefresh":true,"backgroundTextStyle":"dark","pullToRefresh":{"offset":"0px","style":"default","contentdown":"正在刷新...","color":"#333333"}}},{"path":"/pages/Mine/mineTab","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/Mine/commissionOrder","meta":{},"window":{"navigationBarTitleText":"提成订单","enablePullDownRefresh":true,"backgroundTextStyle":"dark","pullToRefresh":{"offset":"0px","style":"default","contentdown":"正在刷新...","color":"#333333"}}},{"path":"/pages/Mine/userManage","meta":{},"window":{"navigationBarTitleText":"用户管理"}},{"path":"/pages/Mine/myAchieve","meta":{},"window":{"navigationBarTitleText":"个人成绩"}},{"path":"/pages/Mine/PromoteFee","meta":{},"window":{"navigationBarTitleText":"我的推广"}},{"path":"/pages/Mine/cashUp","meta":{},"window":{"navigationBarTitleText":"立即提现"}},{"path":"/pages/Mine/cashUpRecord","meta":{},"window":{"navigationBarTitleText":"提现记录"}},{"path":"/pages/Mine/cashUpDescription","meta":{},"window":{"navigationBarTitleText":"提现说明"}},{"path":"/pages/Mine/safePrivacy","meta":{},"window":{"navigationBarTitleText":"安全隐私"}},{"path":"/pages/Login/changePhone","meta":{},"window":{"navigationBarTitleText":"修改手机号码"}},{"path":"/pages/Mine/address","meta":{},"window":{"navigationBarTitleText":"收货地址管理"}},{"path":"/pages/Mine/addAddress","meta":{},"window":{"navigationBarTitleText":"新建收件人"}},{"path":"/pages/Mine/statisticData","meta":{},"window":{"navigationBarTitleText":"数据统计","enablePullDownRefresh":true,"backgroundTextStyle":"dark","pullToRefresh":{"offset":"0px","style":"default","contentdown":"正在刷新...","color":"#333333"}}},{"path":"/pages/Mine/memberDetail","meta":{},"window":{"navigationBarTitleText":"会员详情"}},{"path":"/pages/Mine/myMember","meta":{},"window":{"navigationBarTitleText":"我的会员","enablePullDownRefresh":true,"backgroundTextStyle":"dark","pullToRefresh":{"offset":"0px","style":"default","contentdown":"正在刷新...","color":"#333333"}}},{"path":"/pages/Mine/myRebuyMember","meta":{},"window":{"navigationBarTitleText":"待复购会员","enablePullDownRefresh":true,"backgroundTextStyle":"dark","pullToRefresh":{"offset":"0px","style":"default","contentdown":"正在刷新...","color":"#333333"}}},{"path":"/pages/Mine/MyOrder/myOrderList","meta":{},"window":{"navigationBarTitleText":"我的订单","enablePullDownRefresh":true,"backgroundTextStyle":"dark","pullToRefresh":{"offset":"0px","style":"default","contentdown":"正在刷新...","color":"#333333"}}},{"path":"/pages/Mine/MyOrder/applyReturn","meta":{},"window":{"navigationBarTitleText":"申请退货"}},{"path":"/pages/Mine/MyOrder/logisticsDetail","meta":{},"window":{"navigationBarTitleText":"物流详情"}},{"path":"/pages/Mine/MyOrder/myOrderDetail","meta":{},"window":{"navigationBarTitleText":"订单详情"}},{"path":"/pages/Mine/MyOrder/paySuccess","meta":{},"window":{"navigationBarTitleText":"款已付"}},{"path":"/pages/Mine/MyOrder/returnDetail","meta":{},"window":{"navigationBarTitleText":"退货详情"}},{"path":"/pages/Mine/myJiFen","meta":{},"window":{"navigationBarTitleText":"我的积分"}},{"path":"/pages/Mine/jifenDes","meta":{},"window":{"navigationBarTitleText":"积分说明"}},{"path":"/pages/Mine/customerService","meta":{},"window":{"navigationBarTitleText":"客服"}},{"path":"/pages/Mine/farmerStory","meta":{},"window":{"navigationBarTitleText":"新农人故事","enablePullDownRefresh":true,"backgroundTextStyle":"dark","pullToRefresh":{"offset":"0px","style":"default","contentdown":"正在刷新...","color":"#333333"}}},{"path":"/pages/Mine/promoteGoods","meta":{},"window":{"navigationBarTitleText":"地推物料","enablePullDownRefresh":true,"backgroundTextStyle":"dark","pullToRefresh":{"offset":"0px","style":"default","contentdown":"正在刷新...","color":"#333333"}}},{"path":"/pages/Mine/farmerStoryDetail","meta":{},"window":{"navigationBarTitleText":"详情"}},{"path":"/pages/Login/login","meta":{},"window":{"navigationBarTitleText":"登录"}},{"path":"/pages/Login/regist","meta":{},"window":{"navigationBarTitleText":"注册"}},{"path":"/pages/Login/find","meta":{},"window":{"navigationBarTitleText":"找回密码"}},{"path":"/pages/Login/changePwd","meta":{},"window":{"navigationBarTitleText":"修改密码"}},{"path":"/pages/Mine/receiptManage/receiptMan","meta":{},"window":{"navigationBarTitleText":"发票管理"}},{"path":"/pages/Mine/receiptManage/receiptApply","meta":{},"window":{"navigationBarTitleText":"发票申请"}},{"path":"/pages/Mine/receiptManage/receiptConfirm","meta":{},"window":{"navigationBarTitleText":"发票确认"}},{"path":"/pages/Mine/receiptManage/receiptEdit","meta":{},"window":{"navigationBarTitleText":"发票信息填写"}},{"path":"/pages/Mine/receiptManage/receiptHistory","meta":{},"window":{"navigationBarTitleText":"发票历史"}},{"path":"/pages/Mine/receiptManage/receiptKnow","meta":{},"window":{"navigationBarTitleText":"开票须知"}},{"path":"/pages/Mine/receiptManage/receiptPath","meta":{},"window":{"navigationBarTitleText":"开票流程"}},{"path":"/pages/Mine/receiptManage/receiptProgresss","meta":{},"window":{"navigationBarTitleText":"开票进度"}},{"path":"/pages/Mine/receiptManage/receiptSendEmail","meta":{},"window":{"navigationBarTitleText":"发送邮件"}},{"path":"/pages/Mine/caseShare/caseShareHome","meta":{},"window":{"navigationBarTitleText":"案例分享","enablePullDownRefresh":true,"backgroundTextStyle":"dark","pullToRefresh":{"offset":"0px","style":"default","contentdown":"正在刷新...","color":"#333333"}}},{"path":"/pages/Mine/caseShare/cashShareSend","meta":{},"window":{"navigationBarTitleText":"发布"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});