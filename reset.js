// resets application so you can start over
const fs = require('fs');
if (fs.existsSync('./dist/index.html')) {
    fs.unlinkSync('./dist/index.html');
    console.log('file reset!')
}