// pages/map1/map1.ts
Page({
  data: {
  },
  onLoad() {
    this.GetWxLocation();
  },
  GetWxLocation() {
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        const lasitude = res.latitude, // 纬度
          longitude = res.longitude,// 经度
          scale = 15; // 缩放比例
        wx.openLocation({
          latitude: lasitude,
          longitude: longitude,
          scale: scale
        })
      },
      fail(err) {
        console.log(err);
      }
    })
  }
})