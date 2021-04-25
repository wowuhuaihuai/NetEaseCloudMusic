import request from "../../utils/request";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    msg: "text",
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    bannerList: [], // 轮播数据
    recommendList:[] // 推荐歌单数据
  },
  handleParent() {
    console.log("handleParent");
  },
  handleChild() {
    console.log("handleChild");
  },
  handleToLogsByRedirectTo() {
    wx.redirectTo({
      url: "/pages/logs/logs",
    });
  },
  handleToLogsByNavigateTo() {
    wx.navigateTo({
      url: "/pages/logs/logs",
    });
  },
  // 获取用户信息回调
  handleGetUserInfo(res) {
    console.log(res);
    const res1 = wx.getUserInfo();
    console.log(res1);
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    console.log("e", e);
    wx.getUserProfile({
      desc: "用于完善会员资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log("res", res);
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        });
      },
    });
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e);
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 请求轮播数据
    const bannerListData = await request("banner", { type: 2 });
    this.setData({ bannerList: bannerListData.banners });

    // 请求推荐歌单数据
    const recommendListData = await request("personalized", { limit: 10 });    
    this.setData({ recommendList: recommendListData.result });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady：监听页面初次渲染完成");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow：监听页面显示");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide：监听页面隐藏");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload：监听页面卸载");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage");
  },
});
