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
    const num1 = this.data.num1,
    num2 = this.data.num2;
    if (num1 > num2) r = `${num1} > ${num2}`;
    else if (num1 === num2) r = `${num1} = ${num2}`;
    else r = `${num1} < ${num2}`;
    this.setData({
      res: r
    })
  }
})
