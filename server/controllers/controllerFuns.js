import crypto from 'crypto';

//生成亂碼
export function generateVerificationCode(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }

    return result;
}


export function generateSessionId() {
    return crypto.randomBytes(32).toString('hex'); // 生成 64 字元的十六進制隨機字串
}

//因為regenerate為異步回調函數，為了抓取錯誤訊息包裝成Promise
export const regenerateSession = (req) => {
    return new Promise((resolve, reject) => {
        req.session.regenerate((err) => {
            if (err) return reject(err);
            resolve();
        });
    });
};

//設定session變數
export const setSessionVariables = (req, existingUser) => {
    // 登入成功
    req.session.UserID = existingUser.UserID;
    req.session.UserMail = existingUser.UserMail;
    req.session.CreateTime = new Date().toLocaleString();
    req.session.Role = existingUser.UserID === 1 ? 'admin' : 'user';
};