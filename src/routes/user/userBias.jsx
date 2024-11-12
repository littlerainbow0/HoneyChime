// 
import React, { useState, useCallback, useEffect } from 'react';
import { useParams, useNavigate, } from 'react-router-dom';
import api from '../../api.jsx';
import './userBias.css'

// */ Componenets
import NavbarUser from '../../components/user/navbar_user.jsx'
import Header from '../../components/user/header.jsx';
import RadiusCard from '../../components/user/card_radius.jsx'
import Footer from '../../components/user/footer.jsx'
// -- Componenets /*

const UserBias = () => {

    // 這是物件導向寫法
    // const UserBias = (props) => {
    // const getData = props.match.params.myData; 
    // ...}

    const { userId } = useParams();
    console.log(userId);
    // 注意這個hook不在React套件，而是在react-router-dom
    // 這個userId在App.jsx中，Route path="/user/info/:userId"
    // 從登入的session中得到userId之後，可以加密寫在網址中

    const [loading, setLoading] = useState(false); // 加載狀態
    const [dataTrigger, setDataTrigger] = useState([]); // 用來觸發資料重載
    const [dataPwdFromServer, setDataPwdFromServer] = useState([])
    const [dataInfoFromServer, setDataInfoFromServer] = useState([])

    const fetchData = useCallback(async () => {
        if (loading) return;
        setLoading(true);
        // 排序用：台北 台中 台南 高雄 花蓮
        try {
            const response = await api.get(`/getUsers/${userId}`);
            console.log("data", response.data[0]);
            setDataPwdFromServer(response.data[0]);
            setDataInfoFromServer(response.data[0]);
        } catch (error) {
            console.error('獲取數據失敗', error);
        } finally {
            setLoading(false);
        }
    }, [loading]);

    useEffect(() => {
        console.log("useEffect triggered");
        fetchData();
    }, []);
    useEffect(() => {
        console.log("123");

        if (dataTrigger) {
            fetchData(); // 重新拉取 schedules 資料
            setDataTrigger(false); // 重置 trigger 狀態
        }
    }, [dataTrigger]);


    const cardBodyPwd = {
        title: "修改密碼",
        items: [
            {
                tag: "input",
                subtitle: "帳號",
                inputType: "text",
                value: dataPwdFromServer.UserMail,
                placeholderWords: "",
                disabled: true,
            },
            {
                tag: "input",
                subtitle: "密碼",
                inputType: "password",
                value: "",
                placeholderWords: "請輸入密碼",
                disabled: false,
            },
            {
                tag: "input",
                subtitle: "確認密碼",
                inputType: "password",
                value: "",
                placeholderWords: "請再次輸入密碼",
                disabled: false,
            },
        ],
    }
    const cardBodyInfo = {
        title: "基本資料",
        items: [
            {
                userId: 1,
                tag: "input",
                subtitle: "姓名",
                inputType: "text",
                value: dataInfoFromServer.UserName,
                placeholderWords: "",
                disabled: false,
            },
            {
                tag: "radio",
                subtitle: "性別",
                options: [
                    { label: "男", value: "男" },
                    { label: "女", value: "女" }
                ],
                selectedValue: "女", // 預設選中的值
                disabled: false,
            },
            {
                tag: "input",
                subtitle: "手機電話",
                inputType: "tel",
                value: dataInfoFromServer.UserPhone,
                placeholderWords: "",
                disabled: false,
            },
            {
                tag: "input",
                subtitle: "生日",
                inputType: "date",
                value: (dataInfoFromServer?.Birth ? String(dataInfoFromServer.Birth).replace(/\//g,"-") : "") || "",
                placeholderWords: "",
                disabled: false,
            },
        ]
    }
    const handleOnChange1 = (e) => {
        const { name, value } = e.target;
        setDataPwdFromServer((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    const handleOnChange2 = (e) => {
        const { name, value } = e.target;
        setDataInfoFromServer((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    const handleSubmit1 = () => {
""
    }
    const handleSubmit2 = () => {
        api.put(`/updateUserInfo/${userId}`, {
            UserName: dataInfoFromServer.UserName,
            UserPhone: dataInfoFromServer.UserPhone,
            Password: dataInfoFromServer.Password,
            Birth: dataInfoFromServer.Birth,
            Sex: dataInfoFromServer.Sex,
        })
            .then((response) => {
                const newRouteData = response.data;
                setDataInfoFromServer(prev =>
                    dataInfoFromServer
                );
                alert("更新個人資料成功!");
            })
            .catch((error) => {
                console.log('更新個人資料發生錯誤:', error);
            });
    }

    return (

        <>
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
                                Hello!<br />
                                {dataInfoFromServer.UserName}
                            </h3>
                        </header>
                        <div className='mt-[660px]'>
                            <NavbarUser userId={userId} />
                        </div>
                        <div id="mainbody">
                            <RadiusCard data={cardBodyPwd}
                                handleSubmit={handleSubmit1}
                                handleOnChange={handleOnChange1}
                            />
                            <RadiusCard data={cardBodyInfo}
                                handleSubmit={handleSubmit2}
                                handleOnChange={handleOnChange2}
                            />
                        </div>
                        <Footer />
                    </div>
                ) : (
                    <p>About US page body content</p>
                )}

        </>

    )
}

export default UserBias;