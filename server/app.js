import express from 'express';
import cors from 'cors';
import index from './routes/index.js';
import session from 'express-session';
import dotenv from 'dotenv';
import process from 'process';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

dotenv.config();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false, //資料沒變動不重新保存
    saveUninitialized: true, // 沒有資料也會建立session
    cookie: {
        maxAge: 999 * 60 * 1000, // 重新設置為 10 分鐘
        secure: false// 為了在HTTP中測試而不是在HTTPS
    },
}));

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // 如果使用 cookie，則需要設置為 true
}));


app.use('/', index);

export default app;