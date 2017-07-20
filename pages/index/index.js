//index.js
//获取应用实例
var app = getApp();

var util = require('../../utils/util.js');

Page({
  //定义当前Page的属性
  data: {
    fuli: '福利社',
    videos: '休息视频',
    time: util.getCurTime(),
    userInfo: {}
  },
  //事件处理函数(福利)
  bindViewTap: function() {
    wx.navigateTo({
      url: '../galary/galary'
    })
  },

  //休息视频
  bindViewTap2: function () {
    wx.navigateTo({
      url: '../videos/videos'
    })
  },

  //API和Component
  apiStudy: function () {
    wx.navigateTo({
      url: '../api/api'
    })
  },


  onLoad: function () {
    
    //that指向当前Page对象
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })

    setInterval(function () {
      that.setData({
        time: util.getCurTime()
      })
    }, 1000)
  }
})
