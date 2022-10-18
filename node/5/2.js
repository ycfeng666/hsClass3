const fs = require('fs'),
	path = 'static';
try {
	let res = fs.existsSync(`${path}`);
	if (res) {
		fs.stat(`${path}`, (err, data) => {
			if (!err) console.table(data);
			else console.error(err);
		});
	} else {
		fs.mkdir(`${path}`, (err) => {
			if (!err) console.log('创建成功');
			else console.error('创建失败');
		});
	}
} catch (error) {
	console.error(error);
}
