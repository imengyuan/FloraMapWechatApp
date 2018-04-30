// pages/map/map.js
let plantData = require('../../resources/plant_location')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    centerX: 104.0780564, 
    centerY: 30.6340720, 
    markers:[],
    controls:[{
      id:1,
      iconPath:'/image/location_control.png',
      position:{
        left:0,
        top:10,
        width:40,
        height:40
      },
      clickable:true
    }]
  
  },

  onReady: function (e) {
    //使用wx.createMapContext获取map上下文
    this.mapCtx = wx.createMapContext('myMap')

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log('地图定位')
    let that = this
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: (res) => {
        console.log(res)
          let longitude = res.longitude;
          let latitude = res.latitude;
          let marker = this.createMarker(res);
          this.setData({
            centerX: longitude,
            centerY: latitude,
            marker: this.getPlantMarker()
        })

      },
    })  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */


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
  
  },

  //其他函数
  regionchange(e){
    console.log(e.type)
  },

  markertap(e){
    console.log(e)
  },

  controltap(e){
    console.log(e.controlId)
    this.moveToLocation()
  },

  //get plant marker
  getPlantMarker(){
    let markers = [];
    for (let item of plantData){
      let marker = this.createMarker(item);
      markers.push(marker)
    }
    return markers;
  },

  moveToLocation: function(){
    this.mapCtx.moveToLocation()
  },

  //create marker
  createMarker(point){
    let latitude = point.latitude;
    let longitude = point.longitude;
    let marker = {
      iconPath:"/image/marker.png",
      id:point.id || 0,
      name:point.name || '',
      latitude:latitude,
      longitude:longitude,
      width:25,
      height:48
    };
    return marker;

  }





})