//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({

    })
    try {
      var res = wx.getSystemInfoSync();
      this.globalData.systemInfo = res;
    }catch(error){console.log("同步获取系统信息失败",error)}
  },



  globalData: {
    userInfo: null,
    systemInfo: null
  }
})