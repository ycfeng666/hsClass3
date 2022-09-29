// pages/map2/map2.ts
Page({
  data: {

  },
  onLoad() {
    this.GetWxLocation();
  },
  GetWxLocation() {
    wx.startLocationUpdate({
      success(res) {
        console.log(res);
        wx.onLocationChange((v) => {
          const lasitude = v.latitude, // 纬度
            longitude = v.longitude,// 经度
            scale = 15; // 缩放比例
          wx.openLocation({
            latitude: lasitude,
            longitude: longitude,
            scale: scale
          })
        })
      },
      fail(err) {
        console.log(err);
      }
    })
  }
})