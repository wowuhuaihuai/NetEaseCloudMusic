// pages/personal/personal.js
let starY = 0 // 手指起始的坐标
let moveY = 0  // 手指移动的坐标
let moveDistance = 0 // 手指移动的距离
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		contentTransform:"translateY(0)",
		contentTransition:""
	},

	bindTouchStart(event){
		starY = event.touches[0].clientY
		this.setData({
			contentTransition:""
		})
	},
	bindTouchMove(event){
		moveY = event.touches[0].clientY
		moveDistance = moveY-starY
		console.log('moveDistance',moveDistance)
		
		if(moveDistance < 0){
			return
		}
		if(moveDistance > 100){
			moveDistance = 100
		}
		this.setData({
			contentTransform:`translateY(${moveDistance}rpx)`
		})

	},
	bindTouchEnd(){
		this.setData({
			contentTransform:`translateY(0rpx)`,
			contentTransition:"transform 1s linear"
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})