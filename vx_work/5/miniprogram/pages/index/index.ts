// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    num1: 5,
    num2: 0,
    res: ''
  },
  // 简易双向数据绑定
  handInputChange(e: any) {
    this.setData({
      [`${e.target.id}`]: parseInt(e.detail.value)
    })
  },
  checkNum() {
    let r = '';
    if (this.data.num1 > this.data.num2) r = '数字1大于数字2';
    else if (this.data.num1 === this.data.num2) r = '两数相等';
    else r = '数字2大于数字1';
    this.setData({
      res: r
    })
  }
})
