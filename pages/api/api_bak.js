// api.js

var items = ['actionA', 'actionB'];


Page({


  /**
   * 页面的初始数据
   */
  data: {
    attrs:{
      attr1:'属性1',
      attr2:'属性2'
    },
    actionSheetHidden:true,
    actionSheetItems:items,
  },

  actionSheetTap:function(){
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetChange: function (e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },

})

