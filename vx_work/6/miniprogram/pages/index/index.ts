// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    aimgurl: '', // //临时图片的路径
    countIndex: 1, // 可选图片剩余的数量
    hitokoto: {}
  },
  /*图片浏览及上传 */
  browse: function () {
    let that = this;
    wx.chooseImage({
      count: that.data.countIndex,
      // sizeType: ['original', 'compressed'],
      sourceType: ['album'],
      success: function (res) {
        // 选择图片后的完成确认操作
        that.setData({
          aimgurl: res.tempFilePaths[0]
        });
        console.log(that.data.aimgurl);
      }
    })
  },
  getRequest() {
    let that = this;
    const param = '?c=a&c=b';
    wx.request({
      url: 'https://v1.hitokoto.cn' + param,
      success: function (res) {
        that.setData({
          hitokoto: res.data
        })
      },
    })
  }
})
