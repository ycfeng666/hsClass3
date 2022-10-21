const http = require('http'),
	express = require('express'),
	app = express(),
	{ Server: io_server } = require('socket.io'),
	day = require('dayjs'),
	Host = '127.0.0.1',
	Port = 23333,
	server = http.createServer(app),
	io = new io_server(server);
app.use(express.static('./public')).get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});
io.on('connection', (socket) => {
	let roomName;
	socket
		.on('join', (d) => {
			roomName = d == '' ? 1 : d;
			socket.join(roomName);
		})
		.on('message', (msg) => {
			msg.name =
				msg.name == '' ? '匿名用户' + Math.ceil(Math.random() * 100) : msg.name;
			msg.time = day().format('YYYY-MM-DD HH:mm:ss');
			console.log('房间' + roomName + '：' + msg.name + '说：' + msg.msg);
			io.sockets.in(roomName).emit('message', msg);
		});
});
server.listen(Port, () => {
	const address = `http://${Host}:${Port}`;
	console.log(`开始侦听:${address}`);
});
