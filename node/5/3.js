const fs = require('fs'),
    path = 'static';
try {
    let res = fs.existsSync(`${path}`);
    if (res) {
        fs.readdir(`${path}`, (err, data) => {
            if (!err) {
                if (data.length > 0) console.table(data);
                else fs.rmdir(`${path}`, (err) => {
                    if (!err) console.log('删除空目录成功');
                    else console.error('删除空目录失败');
                })
            }
            else console.error(err);
        })
    }
} catch (error) {
    console.error(error);
}