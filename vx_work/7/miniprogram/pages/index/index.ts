// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    
  },
  GoToMap1(){
    wx.redirectTo({
      url:'/pages/map1/map1'
    });
  },
  GoToMap2(){
    wx.redirectTo({
      url:'/pages/map2/map2'
    });
  }
})
