// videos.js

//获取app实例
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: app.globalData.url_video + '1',
      success: function (res) {
        console.log(res.data)
        that.setData({
          results: res.data.results,
        })
      }
    })
  },

  /**
   * 滚动到底部
   */
  onScrollToBottom: function () {
    console.log('滚动到底部了')

    var that = this
    this.data.page++;
    wx.request({
      url: app.globalData.url_video + this.data.page,
      success: function (res) {

        var temp = that.data.results;
        //连接两个或更多的数组，并返回结果
        var _results = temp.concat(res.data.results);
        console.log(_results.length)

        that.setData({
          results: _results,
        })

      }
    })
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