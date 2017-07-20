//Page() 函数用来注册一个页面。接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等

var items = ['item1', 'item2', 'item3', 'item4']
var pageObject = {
  data: {
    attrs: {
      attr1: '属性1',
      attr2: '属性2'
    },
    actionSheetHidden: true,
    actionSheetItems: items,
    modalHidden: true,
    modalHidden2: true,

    toast2Hidden:true,
    hidden:true
  },

  //loading
  loadingTap: function () {
    this.setData({
      hidden: false
    });
    var that = this;
    setTimeout(function () {
      that.setData({
        hidden: true
      });
      that.update();
    }, 3000);
  },

  //toast
  toast2Change:function(){
    this.setData({
      toast2Hidden:true,
    })
  },

  //toast2Tap
  toast2Tap: function () {
    this.setData({
      toast2Hidden: false,
    })
  },

  //modal
  modalTap: function (e) {
    this.setData({
      modalHidden: false
    })
  },
  modalChange: function (e) {
    this.setData({
      modalHidden: true
    })
  },
  modalTap2: function (e) {
    this.setData({
      modalHidden2: false
    })
  },
  modalChange2: function (e) {
    this.setData({
      modalHidden2: true
    })
  },

  //action
  actionSheetTap: function (e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetChange: function (e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  }
}

//定义所有action的点击事件
for (var i = 0; i < items.length; ++i) {
  (function (itemName) {
    pageObject['bind' + itemName] = function (e) {
      console.log('click' + itemName, e)
    }
  })(items[i])
}

//Page() 函数用来注册一个页面。接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等
Page(pageObject)