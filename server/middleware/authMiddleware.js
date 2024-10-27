export const isUser = async (req, res, next) => {
    if (req.session.UserID ) {
        return next();
    }
    return res.status(403).json({ message: 'not Login!' });
};

export const isAdmin = async (req, res, next) => {
    if (req.session.UserID == 1 ) {
        return next();
    }
    return res.status(403).json({ message: 'not Admin!' });
};

export const logined = async (req, res, next) => {
    if (req.session.UserID ) {
        return  res.status(403).json({ message: '已經登入了!' });
    }
    return next();
};
