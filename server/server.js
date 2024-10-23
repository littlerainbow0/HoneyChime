import app from './app.js';
import process from 'process';
const port = process.env.PORT || 8000; 

// 啟動伺服器

app.listen(port, () => {
    console.log(`伺服器正在運行，端口：${port}`);
});