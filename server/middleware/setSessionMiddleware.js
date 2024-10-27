export const setSessionMaxAge = async (req, res, next) => {
    if (req.session) {
        // 每次請求時更新 maxAge
        req.session.cookie.maxAge = 10 * 60 * 1000; // 重新設置為 10 分鐘
    }
    next();
};

