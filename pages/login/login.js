// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    phone: "",
    password: "",
  },
  handleInput(event) {
    console.log("event", event);
    // target VS currentTarget
    // currentTarget：要求绑定事件的元素一定是触发事件的元素
    // target：要求绑定事件的元素不一定是触发事件的元素

    // let type = event.currentTarget.id; //id 传值
    let type = event.currentTarget.dataset.type; // data-key=value 传值


    this.setData({
      [type]: event.detail.value,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
