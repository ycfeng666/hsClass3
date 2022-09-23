// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    imgUrls: [
      'https://i0.hdslb.com/bfs/banner/807a77b5a817309cee58b6e3a5941ac04c9b20b6.jpg@976w_550h_1c_!web-home-carousel-cover.webp',
      'https://i0.hdslb.com/bfs/banner/f22a9058bb71b334c57071de7e5cc5279d11fc96.jpg@976w_550h_1c_!web-home-carousel-cover.webp',
      'https://i0.hdslb.com/bfs/banner/7d065fe06deeacd90436d76e7de57592304a6af4.jpg@976w_550h_1c_!web-home-carousel-cover.webp'
    ],
    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 3000,       //自动切换时间间隔
    duration: 1000,       //滑动动画时长
    inputShowed: false,
    inputVal: "",

    x: 0,
    y: 0,
    r0: 0
  },
  tap() {
    if (this.data.r0 === 0) {
      this.setData({
        x: 100,
        y: 100
      });
      this.data.r0 = 1;
    }
    else {
      this.setData({
        x: 0,
        y: 0
      });
      this.data.r0 = 0;
    }

  },
})
