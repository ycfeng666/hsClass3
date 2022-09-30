const http = require('http'),
  querystring = require('querystring'),
  fs = require('fs'),
  ejs = require('ejs'),
  Post = 23333,
  UserList = [
    {
      userid: 1,
      name: '张三',
      chinese: 90,
      math: 60,
    },
    {
      userid: 2,
      name: '李四',
      chinese: 81,
      math: 90,
    }
  ],
  server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF8' });
    if (req.method === 'GET') {
      fs.readFile('login.html', '', (err, data) => res.end(data));
    }
    else if (req.method === 'POST') {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => {
        data = decodeURI(data);
        let dataObj = querystring.parse(data);
        if (dataObj.userid) {
          const List = UserList.filter(i => i.userid == dataObj.userid);
          console.log(List);
          // res.end(`欢迎登录,用户:${dataObj?.userid}`);
          fs.readFile('main.ejs', 'utf8', (err, data) => {
            res.end(ejs.render(data, {
              title: '成绩表',
              data: List
            }));
          })
        }
        else res.end('hello world!');
      });
    }
  })
server.listen(Post);
console.log(`开始侦听${Post},http://127.0.0.1:${Post}`);

