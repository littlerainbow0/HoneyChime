import { Fragment, useEffect, useState } from "react";
import ReactDom from "react-dom";
import { useLocation } from "react-router-dom";
import { DateInput } from "@nextui-org/react";
import { CalendarDate } from "@internationalized/date";

import DataFetcherMeals from '../../dataProcessing/admin/GET_meal.jsx'
import DataFetcherDesserType from '../../dataProcessing/admin/GET_dessertType.jsx'
import DataFetcherMenu from '../../dataProcessing/admin/GET_menu.jsx'

import { navText } from "./navbar_admin.jsx";

import classes from "./Modal.module.css";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import BtnLightbrown from "../user/btn_lightbrown";

// 背景層
const BackDrop = () => {
    return <div className={classes.backdrop}></div>;
};

// 
const ScheduleModalItems = (locationPath, item = null) => {

    // 新拿到的data
    const [getMealDataFromServer, setGetMealDataFromServer] = useState([]) // 儲存API資料用
    const [getDessertTypeDataFromServer, setGetDessertTypeDataFromServer] = useState([]) // 儲存API資料用
    const [getMenuDataFromServer, setGetMenuDataFromServer] = useState([]) // 儲存API資料用

    // 從table那邊拿到的item
    const [scheduleId, setScheduleId] = useState(item ? item.ScheduleID : "")
    const [departureDate, setDepartureDate] = useState(item ? item.DepartureDate : "");
    const [departureTime, setDepartureTime] = useState(item ? item.DepartureTime : "");
    const [templateId, setTemplateId] = useState(item ? item.TemplateID : "");
    const [route, setRoute] = useState(item ? item.StopStartName + " 到 " + item.StopEndName : "");

    // 從table那邊拿到的relatedDetailItem
    const [dessertTypeId, setDessertTypeId]
        = useState(item?.relatedDetailItem?.[0]?.DessertTypeId || "");
    const [dessertTitle, setDessertTitle]
        = useState(item?.relatedDetailItem?.[0]?.DessertTitle || "");
    const [menuFirstID, setMenuFirstID]
        = useState(item?.relatedDetailItem?.[0]?.MenuFirstID || "");
    const [menuFirstName, setMenuFirstName]
        = useState(item?.relatedDetailItem?.[0]?.MenuFirstName || "");
    const [menuSecondID, setMenuSecondID]
        = useState(item?.relatedDetailItem?.[0]?.MenuSecondID || "");
    const [menuSecondName, setMenuSecondName]
        = useState(item?.relatedDetailItem?.[0]?.MenuSecondName || "");
    const [stopEndName, setStopEndName]
        = useState(item?.relatedDetailItem?.[0]?.StopEndName || "");
    const [stopStartName, setStopStartName]
        = useState(item?.relatedDetailItem?.[0]?.StopStartName || "");

    // 從使用者那邊拿到的data
    const [selectedTemplateData, setSelectedTemplateData] = useState(null);
    const [selectedDessertType, setSelectedDessertType] = useState(null);
    const [selectedMeal1, setSelectedMeal1] = useState('');
    const [selectedMeal2, setSelectedMeal2] = useState('');

    // 狀態更新
    const handleTemplateChange = (event) => {
        const selectedTemplateID = Number(event.target.value);

        // 查找所選模板的資料
        const selectedTemplate = getMenuDataFromServer.find(template => template.TemplateID === selectedTemplateID);

        if (selectedTemplate) {
            setSelectedTemplateData(selectedTemplate);
            console.log(selectedTemplate);

            // 更新相關狀態
            setTemplateId(selectedTemplate.TemplateID);
            setRoute(`${selectedTemplate.StopStartName} 到 ${selectedTemplate.StopEndName}`);
            setDessertTypeId(selectedTemplate.DessertTypeID);
            setDessertTitle(selectedTemplate.DessertTitle);
            setMenuFirstID(selectedTemplate.MenuFirstID);
            setMenuFirstName(selectedTemplate.MenuFirstName);
            setMenuSecondID(selectedTemplate.MenuSecondID);
            setMenuSecondName(selectedTemplate.MenuSecondName);
        } else {
            // 若未選擇模板，則重置
            setSelectedTemplateData(null);
            setRoute("");
            setDessertTypeId("");
            setDessertTitle("");
            setMenuFirstID("");
            setMenuFirstName("");
            setMenuSecondID("");
            setMenuSecondName("");
        }
    };

    const handleMeal1Change = (event) => {
        const value = event.target.value;
        setSelectedMeal1(value);

        // 如果選擇的值與 Menu2 的選擇相同，則清空 Menu2 的選擇
        if (value === selectedMeal2) {
            setSelectedMeal2('');
        }
    };

    const handleMeal2Change = (event) => {
        const value = event.target.value;
        setSelectedMeal2(value);

        // 如果選擇的值與 Menu1 的選擇相同，則清空 Menu1 的選擇
        if (value === selectedMeal1) {
            setSelectedMeal1('');
        }
    };

    const handleDessertTypeChange = (event) => {
        setSelectedDessertType(Number(event.target.value));
    };

    // 供餐的過濾
    const filteredMenu1 = (selectedDessertType ?? null) // 使用 null-coalescing operator
        ? getMealDataFromServer.filter((menu) => menu.DessertTypeID === selectedDessertType) // 假設 meal 數據中有 DessertTypeId
        : []; // 若未選擇主題，顯示所有餐點

    const filteredMenu2 = (selectedDessertType ?? null)
        ? getMealDataFromServer.filter((menu) => menu.DessertTypeID === selectedDessertType) // 假設 meal 數據中有 DessertTypeId
        : [];

    // 行程：行程ID、出發日期、出發時間、模板、路線、甜點風格、供餐
    const modalItemsInSchedule = [
        {
            title: "行程ID",
            content: () => (
                <>
                    <DataFetcherMeals setDataFromServer={setGetMealDataFromServer} />
                    <DataFetcherDesserType setDataFromServer={setGetDessertTypeDataFromServer} />
                    <DataFetcherMenu setDataFromServer={setGetMenuDataFromServer} />
                    {scheduleId}
                </>
            )
        },
        {
            title: "路線與供餐模板",
            content: () =>
                <>
                    <select className="font-bodyFont font-bold bg-transparent"
                        value={templateId}
                        onChange={handleTemplateChange}>
                        {/* <option value={templateId}>目前鎖定：{templateId}</option> */}
                        {getMenuDataFromServer.map((data) => (
                            <option
                                value={data.TemplateID}
                                key={data.TemplateID}
                            >
                                {data.TemplateID}：{data.DessertTitle}
                            </option>
                        ))}
                    </select>
                </>
        },
        {
            title: "路線",
            content: () => <input type="text" value={route} onChange={(e) => setRoute(e.target.value)} />,
        },
        {
            title: "甜點風格",
            content: () => (
                <>
                    <select className="font-bodyFont font-bold bg-transparent"
                        value={dessertTypeId}
                        onChange={handleDessertTypeChange}>
                        {getDessertTypeDataFromServer.map((data) => (
                            <option
                                value={data.DessertTypeID}
                                key={data.DessertTypeID}
                            >
                                {data.DessertTitle}
                            </option>
                        ))}
                    </select>
                </>
            ),
        },
        {
            title: "供餐",
            content: () => (
                <>
                    <select className="font-bodyFont bg-transparent"
                        value={selectedMeal1}
                        onChange={handleMeal1Change}>
                        {filteredMenu1.length > 0 ? (
                            filteredMenu1.map((item) => (
                                <option value={item.MealID} key={item.MealID}>
                                    {item.MealName}
                                </option>
                            ))
                        ) : (
                            item && item.relatedDetailItem && item.DessertTypeID
                                === item.relatedDetailItem.DessertTypeID ? (
                                <option value={menuFirstID}>{menuFirstName}</option>
                            ) : (
                                <option value="">選擇餐點</option>
                            )
                        )}
                    </select>
                    <br />
                    <select className="font-bodyFont bg-transparent"
                        value={selectedMeal2}
                        onChange={handleMeal2Change}>
                        {filteredMenu2.length > 0 ? (
                            filteredMenu2.map((item) => (
                                <option value={item.MealID} key={item.MealID}>
                                    {item.MealName}
                                </option>
                            ))
                        ) : (
                            item && item.relatedDetailItem && item.DessertTypeID
                                === item.relatedDetailItem.DessertTypeID ? (
                                <option value={menuSecondID}>{menuSecondName}</option>
                            ) : (
                                <option value="">選擇餐點</option>
                            )
                        )}
                    </select>

                </>
            ),
        },

        {
            title: "出發日期",
            content: () => (
                <>
                    {departureDate}
                    <input type="date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)} />
                </>
            ),
        },
        {
            title: "出發時間",
            content: () => <input type="time" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} />,
        },
    ];

    return modalItemsInSchedule;
}

const RouteModalItems = (locationPath, item = null) => {

    const modalItemsInRoute = [
        {
            title: "路線ID",
            content: () => (
                ""
            ),
        },
        {
            title: "起點站",
            content: () => (
                ""
            ),
        },
        {
            title: "終點站",
            content: () => (
                ""
            ),
        },
        {
            title: "車程(分)",
            content: () => (
                ""
            ),
        },
        {
            title: () => (
                <>
                    {"路線圖×1"}<br />{"風景圖×3"}
                </>
            ),
            content: () => (
                <>
                <input type="file" accept="image/png, image/jpeg" 
                id="imgInputRoute"
                onChange={()=>{getImgFile(img1_Route)}}
                />
                <input type="file" accept="image/png, image/jpeg" multiple 
                id="imgInputLandScape"
                // onChange={()=>{getImgFile(img3
                //     _LandScape)}}
                />
                </>
            ),
        },
        {
            title: "路線介紹",
            content: () => (
                ""
            ),
        },
        {
            title: "風景介紹",
            content: () => (
                ""
            ),
        },
    ]

    return modalItemsInRoute;
}

// Modal
const ModalOverLay = (props) => {
    const { item } = props;
    const location = useLocation();



    const modalItemsInMeal = [
        {
            title: "餐點ID",
            content: () => (
                ""
            ),
        },
        {
            title: "餐點名稱",
            content: () => (
                ""
            ),
        },
        {
            title: "餐點圖片",
            content: () => (
                ""
            ),
        },
        {
            title: "餐點內容",
            content: () => (
                ""
            ),
        },
        {
            title: "餐點描述",
            content: () => (
                ""
            ),
        },
    ]

    const modalItems = () => {
        // 旅程管理
        if (location.pathname === navText[1].path) {
            return ScheduleModalItems(location.pathname, item);
        }
        // 路線管理
        if (location.pathname === navText[3].path) {
            return RouteModalItems(location.pathname, item)
        }
        // 餐點管理
        if (location.pathname === navText[4].path) {
            return modalItemsInMeal;
        }
    };

    return (
        <div className={classes.modal}>
            <Card className="rounded-lg transition-all">
                <CardHeader className="justify-between bg-darkbrown">
                    <h3 className="
                    font-titleFont font-bold text-h4 mx-2 text-lightyellow pl-5 py-2
                    ">
                        新增/修改
                    </h3>
                    <BtnLightbrown btnText="×" onClick={props.onClose} />
                </CardHeader>
                <CardBody className="bg-dark text-lightbrown pr-10">
                    {modalItems().map((elem, index) => (
                        <div key={index} className="
                        py-1 
                        grid grid-cols-2 gap-4 items-center">
                            <div className="text-right">
                                <h3 className="font-titleFont font-bold text-p-1 px-6 py-2 rounded-full">
                                {typeof elem.title === 'function' ? elem.title() : elem.title}
                                </h3>
                            </div>
                            <div>
                                <p className="pl-2 font-bodyFont text-p-2">
                                {typeof elem.content === 'function' ? elem.content() : elem.content}
                                </p>
                                <hr />
                            </div>
                        </div>
                    ))}
                </CardBody>
                <CardFooter className="bg-darkbrown items-end justify-end">
                    <BtnLightbrown btnText="確定送出" />
                    <BtnLightbrown btnText="取消" onClick={props.onClose} />
                </CardFooter>
            </Card>
        </div>
    );
};

const portalElement = document.getElementById("overlay");
const Modal = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<BackDrop />, portalElement)}
            {ReactDom.createPortal(
                <ModalOverLay item={props.item} onClose={props.onClose}>
                    {props.children}
                </ModalOverLay>,
                portalElement
            )}
        </Fragment>
    );
};

export default Modal;
