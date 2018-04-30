// pages/article/article.js

//var app = getApp();
//var theWebPage = require('../../utils/util.js').theWebPage;
const web_url = "http://202.115.55.252/magic/list.aspx";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowWidth:0,
    windowHeight:0,
    pageInfo:[] //网页信息
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;

    //获取设备窗口宽高
    if (app.globalData.systemInfo){
      var systemInfo = app.globalData.systemInfo;
      self.setData({
        windowWidth:systemInfo.windowWidth,
        windowHeight:systemInfo.windowHeight
      });
    }else{
      //重新请求系统信息
    }

    //网址就是const web_url，应该不用变

    //进行网络请求
    wx.request({
      url: web_url,
      success: function(res){
        console.log(res.data);
        var html = res.data;
        self.setData({
          pageInfo:[{"pageSrc": html}]
        });

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