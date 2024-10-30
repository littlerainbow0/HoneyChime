// 
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './userBias.css'

// */ Componenets
import NavbarUser from '../../components/user/navbar_user.jsx'
import Header from '../../components/user/header_user.jsx'
import RadiusCard from '../../components/user/card_radius.jsx'
// -- Componenets /*

// */ 假資料
// const individualInformationColumns = ["userId", "name", "email", "phone", "birth", "sex"];
// const individualInformationData = [
//     {
//         userId: 1,
//         name: "林少晴",
//         email: "onoyi17@gmail.com",
//         phone: "0912345678",
//         birth: "1997/02/22",
//         sex: "F"
//     },
// ];
var cardBodyPwd = {
    title: "修改密碼",
    items: [
        {
            tag: "input",
            subtitle: "帳號",
            inputType: "text",
            value: "honey@gmail.com",
            placeholderWords: "",
            readOnly: true,
        },
        {
            tag: "input",
            subtitle: "密碼",
            inputType: "password",
            value: "",
            placeholderWords: "請輸入密碼",
            readOnly: false,
        },
        {
            tag: "input",
            subtitle: "確認密碼",
            inputType: "password",
            value: "",
            placeholderWords: "請再次輸入密碼",
            readOnly: false,
        },
    ],
}
var cardBodyInfo = {
    title: "基本資料",
    items: [
        {
            userId: 1,
            tag: "input",
            subtitle: "姓名",
            inputType: "text",
            value: "蜂鳴號",
            placeholderWords: "",
            readOnly: false,
        },
        {
            tag: "radio",
            subtitle: "性別",
            options: [
                { label: "男", value: "男" },
                { label: "女", value: "女" }
            ],
            selectedValue: "女", // 預設選中的值
            readOnly: false,
        },
        {
            tag: "input",
            subtitle: "手機電話",
            inputType: "tel",
            value: "09123456789",
            placeholderWords: "",
            readOnly: false,
        },
        {
            tag: "input",
            subtitle: "生日",
            inputType: "date",
            value: "2024-11-13",
            placeholderWords: "",
            readOnly: false,
        },
    ]
}
// -- 假資料 /*


const UserBias = () => {

    // 這是物件導向寫法
    // const UserBias = (props) => {
    // const getData = props.match.params.myData; 
    // ...}

    const { userId } = useParams();
    // 注意這個hook不在Reac套件，而是在react-router-dom

    return (

        <>
            {/* <Header /> */}
            {userId ?
                (
                    <div>
                        <header className="flex-auto font-bold w-full text-center 
                  overflow-hidden text-clip min-w-[170px] 
                  absolute top-0 left-0 h-640"
                            style={{
                                background: ` url("/src/assets/images/train_interior/train_interior_shop03.png")`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}>
                            <Header />
                            <h3 className="text-lightyellow px-40 py-2 font-titleFont text-h2 font-bold" style={{
                                zIndex: '1000', position: 'absolute',
                                top: '60%', left: '50%',
                                transform: 'translate(-50%, -50%)',
                                borderRadius: '3rem',
                                backdropFilter: 'blur(16px)',
                            }}>
                                Hello! 您好
                            </h3>
                        </header>
                        <div className='mt-[630px]'>
                            <NavbarUser />
                        </div>
                        <div id="mainbody">
                            <RadiusCard data={cardBodyPwd} />
                            <RadiusCard data={cardBodyInfo} />
                        </div>
                    </div>
                ) : (
                    <p>About US page body content</p>
                )}

        </>

    )
}

export default UserBias;