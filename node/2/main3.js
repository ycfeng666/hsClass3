const url = require('url'),
  u = 'https://baike.baidu.com/item/node.js/7567977?fr=aladdin&k=12345',
  GetQuery = () => {
    const arg = url.parse(u),
      query = arg.query,
      params = query ? query.split('&') : [];
    params.forEach((item, index) => {
      const param = item.split('=');
      console.info(`键${index}：${param[0]} \n值${index}：${param[1]}\n`);
    })
  };
console.log(GetQuery());