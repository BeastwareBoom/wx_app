//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    name:""
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  
  //定义一个sayHello函数
  sayHello:function(){
    this.setData({
      name:"Kiki"
    })
  }
})
