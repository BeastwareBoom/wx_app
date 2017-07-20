// galary.js

//获取app实例
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    results:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: app.globalData.url_fuli+'1',
      success: function (res) {
        //console.log(res.data)
        that.setData({
          results:res.data.results,
        })
      }
    })
  },

  /**
   * 滚动到底部
   */
  onScrollToBottom:function(){
    console.log('滚动到底部了')

    var that = this
    this.data.page++;
    
    wx.request({
      url: app.globalData.url_fuli + this.data.page,
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
 * 点击单个item，使用wx的api预览大图
 */
  onItemTap:function(event){
    var result = event.currentTarget.dataset.result;
    var results = event.currentTarget.dataset.results;
    //将调用的数组的每个元素传递给指定的函数，并返回一个数组，该数组以函数的返回值作为元素
    var urls = results.map(function (result){
      return result.url;
    });

    console.log(urls)

    //参数1：当前url；参数2：要预览的列表
    wx.previewImage({
      current: result.url,
      urls: urls
    })
  },

  /**
   * 点击单个item
   */
  onItemTap2: function (event) {
    var result = event.currentTarget.dataset.result;
    //console.log(result)
    wx.navigateTo({
      url: '../detail/detail?url=' + result.url
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