const fs = require('fs'),
	path = 'static';
fs.readFile(`${path}/info.json`, 'utf-8', (err, data) => {
	if (!err) {
		fs.writeFile(`${path}/info_copy.txt`, data.toString(), (err) => {
			if (!err) console.log('复制成功');
			else console.error('复制失败');
		});
		console.log(data);
	} else console.error(err);
});
