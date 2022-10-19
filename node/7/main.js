const fs = require('fs'),
	ejs = require('ejs'),
	// 使用别名
	{ init: db_init, exec: db_exec, sql: db_sql } = require('mysqls'),
	express = require('express'),
	bp = require('body-parser'),
	colors = require('colors'),
	open = require('open'),
	day = require('dayjs'),
	app = express(),
	Host = '127.0.0.1',
	Port = 23333;
let bookF = {
	b_name: '',
	b_author: '',
	b_allnum: 0,
};
db_init(JSON.parse(fs.readFileSync('conn.json', 'utf-8')));
app
	.use(bp.urlencoded({ extended: false }))
	.get('/', async (req, res) => {
		const queryBook = db_sql.table('book').select(),
			ret = await db_exec(queryBook),
			ejsHtml = fs.readFileSync('main.ejs', 'utf-8');
		log(queryBook);
		res.send(
			ejs.render(ejsHtml, {
				title: '图书管理系统',
				data: ret,
			})
		);
	})
	.get('/add', (req, res) => {
		fs.readFile('form.ejs', 'utf-8', (err, data) => {
			res.send(
				ejs.render(data, {
					data: {},
				})
			);
		});
	})
	.post('/add', async (req, res) => {
		bookF = req.body;
		const queryBook = db_sql.table('book').data(bookF).insert(),
			ret = await db_exec(queryBook);
		log(queryBook);
		res.redirect('/');
	})
	.get('/edit/:id', async (req, res) => {
		const id = req.params?.id ?? 0;
		if (id) {
			const queryBook = db_sql.table('book').where({ b_id: id }).select(),
				ret = await db_exec(queryBook),
				ejsHtml = fs.readFileSync('form.ejs', 'utf-8');
			log(queryBook);
			res.send(
				ejs.render(ejsHtml, {
					title: '图书管理系统',
					data: ret[0],
				})
			);
		} else res.send('id不存在');
	})
	.post('/edit/:id', async (req, res) => {
		bookF = req.body;
		const id = req.params?.id ?? 0;
		if (id) {
			const queryBook = db_sql
					.table('book')
					.data(bookF)
					.where({ b_id: id })
					.update(),
				ret = await db_exec(queryBook);
			log(queryBook);
			res.redirect('/');
		} else res.send('id不存在');
	})
	.get('/del/:id', async (req, res) => {
		const id = req.params?.id ?? 0;
		if (id) {
			const queryBook = db_sql.table('book').where({ b_id: id }).delet(),
				ret = await db_exec(queryBook);
			log(queryBook);
			res.redirect('/');
		} else res.send('id不存在');
	})
	.listen(Port, () => {
		const address = `http://${Host}:${Port}`;
		log(`开始侦听:${address}`, 'success');
		open(address);
	});

function log(msg, type = 'info') {
	const m = `${day().format('YYYY-MM-DD HH:mm:ss ')} [${type}]:${msg}`;
	switch (type) {
		case 'info':
			console.log(m.gray);
			break;
		case 'success':
			console.log(m.green);
			break;
	}
}
