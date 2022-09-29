// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    curNav: 1,
    navList: [{
        id: 1,
        name: '新品来袭'
      },
      {
        id: 2,
        name: '真鲜果茶'
      },
      {
        id: 3,
        name: '醇香奶茶'
      }
    ],
    dishesListFirst: [{
        id: 1,
        name: "大王奇异果(升级版)",
        price: 8,
        nav: [1, 2],
        status: false,
      },
      {
        id: 2,
        name: "雪梨银耳椰椰(升级版)",
        price: 9,
        nav: [1, 2],
        status: false,
      },
      {
        id: 3,
        name: "葡萄肉多多(升级版)",
        price: 8,
        nav: [1, 2],
        status: false,
      }, {
        id: 4,
        name: "冰鲜柠檬水",
        price: 4,
        nav: [2],
        status: false,
      },
      {
        id: 5,
        name: "蜜桃四季春",
        price: 6,
        nav: [2],
        status: false,
      },
      {
        id: 6,
        name: "芋圆奶茶(升级版)",
        price: 8,
        nav: [3],
        status: false,
      },
      {
        id: 7,
        name: "奥利奥(饼干风味)奶茶",
        price: 7,
        nav: [3],
        status: false,
      }
    ],
    dishesList: [],
  },
  selectNav(event) {
    let id = event.target.dataset.id;
    self = this;
    this.setData({
      curNav: id,
    })
    this.setStatus(id);
  },
  // 选择饮品
  selectDish(event) {
    let item = event.currentTarget.dataset.item,
    ListF = this.data.dishesList;

    for (let i = 0; i < ListF.length; i++) {
      if(ListF[i].id === item.id){
        ListF[i].status = !ListF[i].status;
        break;
      }
    }
    this.setData({
      dishesList:ListF
    });

  },
  // 切换左侧菜单
  setStatus(dishId) {
    const dishesFirst = JSON.parse(JSON.stringify(this.data.dishesListFirst));
    let dishes = [];

    dishesFirst.forEach(item => {
      if (item.nav.includes(dishId)) {
        dishes.push(item);
      }
    })
    this.setData({
      dishesList: dishes
    })
  },
  onLoad() {
    this.setStatus(1);
  }
})