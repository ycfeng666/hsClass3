const events = require('events').EventEmitter;

class Cala extends events {
  constructor() {
    super();
  }
  Add () {
    this.on('aaaa', (a, b) => {
      console.log('事件已触发,结果将延迟1秒后打印');
      setTimeout(() => {
        console.log(a + '+' + b + '=' + (a + b));
      }, 1000)
    })
  }
}
module.exports = Cala;