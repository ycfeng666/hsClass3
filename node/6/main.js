const { url } = require('inspector');

const express = require('express'),
	bp = require('body-parser'),
	http = require('http'),
	fs = require('fs'),
	ejs = require('ejs'),
	path = require('path'),
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
		},
	],
	app = express(),
	serve = http.createServer(app);
app
	.use(bp.urlencoded({ extended: false }))
	// .use(express.static('./public'))
	.get('/', (req, res, next) => {
		fs.readFile('login.html', 'utf-8', (err, data) => {
			res.send(data);
		});
	})
	.get('/u/:id', (req, res, next) => {
		const userid = req.params.id ?? 1,
			filepath = path.resolve(__dirname, 'public/' + userid + '.jpg');
		res.set('content-type', { jpg: 'image/jpg' });
		const stream = fs.createReadStream(filepath);
		let resData = [];
		if (stream) {
			stream
				.on('data', (chunk) => {
					resData.push(chunk);
				})
				.on('end', () => {
					const filedata = Buffer.concat(resData);
					res.write(filedata);
					res.end();
				});
		}
	})
	.post('/', (req, res, next) => {
		res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF8' });
		const userid = req.body?.userid ?? '',
			password = req.body?.password ?? '';
		if (userid) {
			const List = UserList.filter((i) => i.userid == userid);
			fs.readFile('main.ejs', 'utf8', (err, data) => {
				res.end(
					ejs.render(data, {
						title: '成绩表',
						data: List,
					})
				);
			});
		} else res.end('hello world!');
	});
serve.listen(Post, () => {
	console.log(`开始侦听${Post},http://127.0.0.1:${Post}`);
});
