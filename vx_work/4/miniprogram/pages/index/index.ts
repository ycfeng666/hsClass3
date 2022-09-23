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
  // 简易双向数据绑定
  handInputChange(e: any) {
    this.setData({
      [`formData.${e.target.id}`]: e.detail.value
    })
  },
  submitForm() {
    wx.showToast({
      title: '我的名字是:' + this.data.formData.name,
      icon: 'success',
      duration: 2000//持续的时间
    })
  }
})
