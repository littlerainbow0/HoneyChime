export const isUser = async (req, res, next) => {
    if (req.session.UserID) {
        return next();
    }
    return res.status(403).json({ message: '尚未登入!' });
};

export const isAdmin = async (req, res, next) => {
    if (req.session.UserID == 1) {
        return next();
    }
    return res.status(403).json({ message: 'not Admin!' });
};

//為 sessionID 的有效性和合法性已經在 Express 的 express-session 中自動處理了
export const logined = async (req, res, next) => {
    if (req.session.UserID) {
        return res.status(403).json({ message: '已經登入了!' });
    }
    return next();
};

export const checkLogin = async (req, res) => {
    if (req.session.UserID) {
        return res.json({ isLogin: true });
    } else {
        return res.json({ isLogin: false });
    }

};

export const checkAdmin = async (req, res) => {
    if (req.session.UserID) {
        return res.json({ isAdmin: true });
    } else {
        return res.json({ isAdmin: false });
    }

};