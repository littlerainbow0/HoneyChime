import * as userModel from '../models/userModel.js';  // 引入模型層
import * as controllerFuns from './controllerFuns.js';
import bcrypt from 'bcrypt'; //密碼加密方式
import nodemailer from 'nodemailer';//寄信
import dotenv from 'dotenv'; //使用環境變數
import process from 'process';
import crypto from 'crypto';

dotenv.config();


// 取得所有使用者的資料
export const getAllUsers = async (req, res) => {
    try {
        const { results } = await userModel.getAllUsers();
        res.json(results);  // 返回 JSON 格式的資料
    } catch (error) {
        console.error('取得使用者資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得使用者資料' });
    }
};

// 取得特定ID之使用者的資料
export const getUserByUserID = async (req, res) => {
    const { userID } = req.params;  // 從 URL 獲取 userID 參數
    try {
        const { results } = await userModel.getUserByUserID(userID);
        res.json(results);  // 返回 JSON 格式的資料
    } catch (error) {
        console.error('取得特定ID之使用者資料錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法取得特定ID之使用者資料' });
    }
};

// 註冊
export const signIn = async (req, res) => {
    const data = req.body;
    const { UserMail, Password } = req.body;

    try {
        const existingUser = await userModel.findByUserMail(UserMail);
        // console.log(existingUser);

        if (existingUser) {
            return res.status(500).json({ message: '該email已註冊' });
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(Password, saltRounds);
        data.Password = hashedPassword;
        if (data.UserMail === "" || data.UserPhone === "" || data.UserName === "" || data.Password === "" || data.Birth === "") {
            return res.status(500).json({ message: '請填入完整資料' });
        }
        const result = await userModel.signIn(data); // 插入資料  

        res.status(201).json({ message: '註冊資料已成功新增', userID: result.userID });
    } catch (error) {
        console.error('處理請求錯誤：', error);
        res.status(500).json({ message: '註冊失敗，請確認傳輸資料內容' });
    }
};

//驗證信
export const Validate = async (req, res) => {
    const { UserMail } = req.body;
    const verificationCode = controllerFuns.generateVerificationCode(6); //生成六位數亂碼
    try {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(UserMail)) {
            return res.status(400).json({ message: '無效的電子郵件格式!' });
        }

        //尋找該用戶是否存在
        const existingUser = await userModel.findByUserMail(UserMail);
        if (!existingUser) {
            return res.status(401).json({ message: '用戶不存在!' });
        }

        //設定寄信方式
        const transporter = nodemailer.createTransport({
            service: 'Yahoo',
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            },
        });

        //加密驗證碼
        const hashedCode = await bcrypt.hash(verificationCode, 10);
        const expirationTime = Date.now() + 10 * 60 * 1000; // 10 分鐘後過期
        await userModel.updateUserValidate(existingUser.UserID, hashedCode, expirationTime);


        //寄信
        await transporter.sendMail(
            {
                from: "jordan8715069@yahoo.com",
                to: UserMail,
                subject: 'HoneyChime 帳號驗證',
                html:
                    `
                             <div style="background-color: rgb(250, 236, 222); width: 350px;height: 480px; border-radius: 40px; ">      
                                <h1 style="padding-left: 20px;padding-top: 20px;">這是您的驗證碼：</h1>
                                <h1 style="color:rgb(0, 240, 22);padding-left: 60px;font-size: 50px;">${verificationCode}</h1>
                                <p style="padding-left: 20px; padding-top: 20px; padding-right: 20px;"> 我們收到來自您 HoneyChime 帳號的安全性驗證要求。請使用上方的驗證碼完成帳號的登入驗證。 </p>
                                <br>
                                <p style="text-decoration:underline; padding-left: 20px; padding-right: 20px;">請注意：驗證碼會在 10 分鐘後過期，請盡快進行驗證！</p>       
                                <p style="padding-left:80px ;padding-top: 40px;">盡情享受您的冒險旅程！</p>
                            </div>
                                        `,
            }
        ).catch(emailError => {
            console.error('郵件發送錯誤:', emailError);
            return res.status(500).json({ message: '郵件發送失敗' });
        });

        req.session.ValidateID = existingUser.UserID;
        req.session.UserMail = existingUser.UserMail;

        return res.status(200).json({ message: '驗證碼已發送至您的電子郵件!', Message: existingUser.UserMail });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: '驗證失敗' });
    }
};

//是否重新寄送驗證信
export const resendMail = async (req, res) => {
    const ValidateID = req.session.ValidateID;

    try {
        // 獲取存儲的驗證碼和過期時間
        const { results } = await userModel.getValidity(ValidateID);

        // 檢查是否過期
        if (Date.now() > results[0].ValidityExpired) {
            //設定寄信方式
            const transporter = nodemailer.createTransport({
                service: 'Yahoo',
                secure: false,
                auth: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASSWORD
                },
            });
            const verificationCode = controllerFuns.generateVerificationCode(6); //生成六位數亂碼

            //加密驗證碼
            const hashedCode = await bcrypt.hash(verificationCode, 10);
            const expirationTime = Date.now() + 10 * 60 * 1000; // 10 分鐘後過期
            await userModel.updateUserValidate(ValidateID, hashedCode, expirationTime);


            //寄信
            await transporter.sendMail(
                {
                    from: "jordan8715069@yahoo.com",
                    to: req.session.UserMail,
                    subject: 'HoneyChime 帳號驗證',
                    html:
                        `
                             <div style="background-color: rgb(250, 236, 222); width: 350px;height: 480px; border-radius: 40px; ">      
                                <h1 style="padding-left: 20px;padding-top: 20px;">這是您的驗證碼：</h1>
                                <h1 style="color:rgb(0, 240, 22);padding-left: 60px;font-size: 50px;">${verificationCode}</h1>
                                <p style="padding-left: 20px; padding-top: 20px; padding-right: 20px;"> 我們收到來自您 HoneyChime 帳號的安全性驗證要求。請使用上方的驗證碼完成帳號的登入驗證。 </p>
                                <br>
                                <p style="text-decoration:underline; padding-left: 20px; padding-right: 20px;">請注意：驗證碼會在 10 分鐘後過期，請盡快進行驗證！</p>       
                                <p style="padding-left:80px ;padding-top: 40px;">盡情享受您的冒險旅程！</p>
                            </div>
                                        `,
                }
            ).catch(emailError => {
                console.error('郵件發送錯誤:', emailError);
                return res.status(500).json({ message: '郵件發送失敗' });
            });

            return res.status(400).json({ message: '驗證碼已過期!重新寄出驗證信' });
        }

        return res.status(200).json({ message: '驗證碼尚未到期，請輸入驗證碼' });

    } catch (err) {
        console.error('檢查失敗:', err);
        return res.status(500).json({ message: '檢查失敗' });
    }
};


// 驗證用戶輸入的驗證碼
export const VerifyCode = async (req, res) => {
    const ValidateID = req.session.ValidateID;
    const { inputCode } = req.body
    try {
        // 獲取存儲的驗證碼和過期時間
        const { results } = await userModel.getValidity(ValidateID);

        // 檢查是否過期
        if (Date.now() > results[0].ValidityExpired) {
            return res.status(400).json({ message: '驗證碼已過期!' });
        }

        // 驗證用戶輸入的驗證碼
        const match = await bcrypt.compare(inputCode, results[0].Validity);
        if (match) {
            return res.status(200).json({ message: '驗證成功!' });
        } else {
            return res.status(400).json({ message: '驗證碼不正確!' });
        }
    } catch (err) {
        console.error('驗證失敗:', err);
        return res.status(500).json({ message: '驗證失敗' });
    }
};

//登入
export const logIn = async (req, res) => {
    const { UserMail, Password } = req.body;
    try {
        //尋找該用戶是否存在
        const existingUser = await userModel.findByUserMail(UserMail);
        if (!existingUser) {
            return res.status(401).json({ message: '登入失敗: 用戶不存在' });
        }

        // 驗證密碼
        const match = await bcrypt.compare(Password, existingUser.Password);

        if (!match) {
            return res.status(401).json({ message: '登入失敗: E-mail或密碼錯誤' });
        }

        const isUpdated = await userModel.updateUserLogInTime(existingUser.UserID); // 更新最近登入時間
        //更新最近登入時間
        if (!isUpdated) {
            res.status(404).json({ message: '更新最近登入時間失敗' });
        }
        try {

            //重新生成session
            await controllerFuns.regenerateSession(req);

            //設定session變數
            controllerFuns.setSessionVariables(req, existingUser);

            res.status(200).json({ message: '登入成功', userMail: req.session.UserMail, userID: req.session.UserID });
        } catch (err) {
            return res.status(500).json({ message: '登入失敗: 無法重新生成 session' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: '登入失敗' });
    }
};


// 更新使用者資料
export const updateUserInfo = async (req, res) => {
    const UserMail = req.session.UserMail;
    const data = req.body;
    const { Password } = req.body;

    try {
        const existingUser = await userModel.findByUserMail(UserMail);

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(Password, saltRounds);
        data.Password = hashedPassword;

        const isUpdated = await userModel.updateUserInfo(existingUser.UserID, data); // 更新資料

        if (isUpdated) {
            res.status(200).json({ message: '該使用者資訊已成功更新', userID: existingUser.UserID });
        } else {
            res.status(404).json({ message: '更新該使用者資訊失敗' });
        }
    } catch (error) {
        console.error('處理請求錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法更新使用者資料，請確認傳輸資料內容' });
    }
};

//更新密碼
export const updateUserPassword = async (req, res) => {
    const data = req.body;
    const { Password } = req.body;

    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(Password, saltRounds);
        data.Password = hashedPassword;

        const isUpdated = await userModel.updateUserPassword(req.session.ValidateID, data); // 更新資料

        if (isUpdated) {
            res.status(200).json({ message: '該使用者密碼已成功更新' });
        } else {
            res.status(404).json({ message: '更新該使用者密碼失敗' });
        }
    } catch (error) {
        console.error('處理請求錯誤：', error);
        res.status(500).json({ message: '伺服器錯誤，無法更新使用者密碼，請確認傳輸資料內容' });
    }
};


//登出
export const logOut = async (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: '登出失敗' });
        }
        res.json({ message: '登出成功' });
    });
};
