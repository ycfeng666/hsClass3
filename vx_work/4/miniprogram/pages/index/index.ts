// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    formData: {
      name: '只因鲲',
    },
    sexList: [{ name: '他',  }, { name: '她' }, { name: '它',ch: 'true' }],
    likeList: [{ name: '唱', ch: 'true' }, { name: '跳',ch:'true' }, { name: 'rap' },{name:'篮球'}]
  },
  submitForm() {
    wx.showToast({
      title: '触发了点击事件',
      icon: 'success',
      duration: 2000//持续的时间
    })

  }
})
