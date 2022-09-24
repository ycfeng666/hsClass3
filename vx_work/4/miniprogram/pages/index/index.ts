// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    formData: {
      cardId: '',
      membersOf: '',
      name: '',
      phone: ''
    },
    healthCodeList: [{ name: '绿码', ch: 'true' }, { name: '黄码' }, { name: '红码' }],
    placeList: [{ name: '武汉', ch: 'true' }, { name: '北京' }, { name: '上海' }]
  },
  submitForm() {
    wx.showToast({
      title: '触发了点击事件',
      icon: 'success',
      duration: 2000//持续的时间
    })

  }
})
