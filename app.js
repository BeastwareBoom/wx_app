//app.js
App({

  //监听并处理小程序的生命周期函数
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []//存在则读取，不存在则定义一个空数组

    //unshift() 方法可向数组的开头添加一个或更多元素
    logs.unshift(Date.now())

    //同步存储本地数据，类似Android中的SharedPreferences
    wx.setStorageSync('logs', logs)
  },

  //定义app中的全局方法
  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      //若已经登录，将this.globalData.userInfo作为参数传递给cb函数
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口（系统api）
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  //声明app中的全局变量
  globalData: {
    //将userInfo声明为属性
    userInfo: null,
    url_fuli: 'https://gank.io/api/data/福利/10/',
    url_video: 'https://gank.io/api/data/休息视频/10/'
  },

})

/**
 * app.json配置文件描述
 * 
 * 设置页面路径
 * 设置默认页面的窗口表现
 * 首页tab
 * "tabBar": {
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页"
      },
      {
        "pagePath": "pages/logs/logs",
        "text": "日志"
      }
    ]
  },
 * 网络连接超时时间
 * 是否开启调试
 */