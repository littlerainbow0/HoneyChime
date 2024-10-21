// server.js
const app = require('./app.js'); 
const port = process.env.PORT || 8000; 

// 啟動伺服器
app.listen(port, () => {
    console.log(`伺服器正在運行，端口：${port}`);
});