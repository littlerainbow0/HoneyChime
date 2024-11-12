import { Fragment, useEffect, useState } from "react";
import ReactDom from "react-dom";
import { useLocation, Link } from "react-router-dom";

import DataFetcherMeals from '../../dataProcessing/admin/GET_meal.jsx'
import DataFetcherDesserType from '../../dataProcessing/admin/GET_dessertType.jsx'
import DataFetcherTemplate from '../../dataProcessing/admin/GET_template.jsx'
import DataFetcherRoute from '../../dataProcessing/admin/GET_route.jsx'
import DataFetcherStops from '../../dataProcessing/admin/GET_stops.jsx'
import DataDepartureTime from '../../dataProcessing/admin/GET_departureTime.jsx'

import { navText } from "./navbar_admin.jsx";

import classes from "./Modal.module.css";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import BtnLightbrown from "../user/btn_lightbrown.jsx";

// 背景層
const BackDrop = () => {
    return <div className={classes.backdrop}></div>;
};

// 
const ScheduleModalItems = (locationPath, item = null) => {

    // 什麼時候用useEffect?
    // 利用onchange更新完資料後，用useEffect去抓onchange完的資料
    // onchange: 更新資料
    // useEffect: 做function，在組件渲染後執行，依賴事件變化 / 獲得數據 / 清理資源時使用
    // 不需要在useState專門設置監聽事件的data去偵測事件是否發生
    // 發生特定事件才會觸發useEffect
    // 哇難怪useEffect的效能比較好

    // error message
    const [errorMessages, setErrorMessages] = useState({});

    // 新拿到的data
    const [getMealDataFromServer, setGetMealDataFromServer] = useState([]);
    const [getDessertTypeDataFromServer, setGetDessertTypeDataFromServer] = useState([]);
    const [getTemplateDataFromServer, setGetTemplateDataFromServer] = useState([]);
    const [getDepartureTimeDataFromServer, setGetDepartureTimeDataFromServer] = useState([]);
    const [getRouteDataFromServer, setGetRouteDataFromServer] = useState([]);

    // 從table那邊拿到的item
    const initialState = {
        scheduleId: item ? item.ScheduleID : "",
        departureDate: item ? item.DepartureDate : "",
        departureTime: item ? item.DepartureTime : "",
        departureTimeId: item ? item.DepartureTimeID : "",
        templateId: item ? item.TemplateID : "",
        routeId: item ? item.RouteID : "",
        route: item ? `${item.StopStartName} 到 ${item.StopEndName}` : "",
        dessertTypeId: item ? item.DessertTypeID : "",
        relatedDetailItem: {
            dessertTypeId: item?.relatedDetailItem?.[0]?.DessertTypeID || "",
            dessertTitle: item?.relatedDetailItem?.[0]?.DessertTitle || "",
            menuFirstID: item?.relatedDetailItem?.[0]?.MenuFirstID || "",
            menuFirstName: item?.relatedDetailItem?.[0]?.MenuFirstName || "",
            menuSecondID: item?.relatedDetailItem?.[0]?.MenuSecondID || "",
            menuSecondName: item?.relatedDetailItem?.[0]?.MenuSecondName || "",
        }
    };
    const [formData, setFormData] = useState(initialState);

    // useEffect 更新 formData
    useEffect(() => {
        if (item) {
            setFormData(prev => ({
                ...prev,
                scheduleId: item.ScheduleID,
                // /正規表達式/，\=轉譯，g=global，/\//g為利用正規表達式選擇全部的/取代成-
                // replace('/', '-') 只會替換第一個斜線
                departureDate: item.DepartureDate.replace(/\//g, '-'),
                departureTime: item.DepartureTime,
                departureTimeId: item.DepartureTimeID,
                templateId: item.TemplateID,
                routeId: item ? item.RouteID : "",
                templateDescription: item ? item.TemplateDescription : "",
                route: `${item.StopStartName} 到 ${item.StopEndName}`,
                dessertTypeId: item?.DessertTypeID || "",
                relatedDetailItem: {
                    dessertTypeId: item?.relatedDetailItem?.[0]?.DessertTypeID || "",
                    dessertTitle: item?.relatedDetailItem?.[0]?.DessertTitle || "",
                    menuFirstID: item?.relatedDetailItem?.[0]?.MenuFirstID || "",
                    menuFirstName: item?.relatedDetailItem?.[0]?.MenuFirstName || "",
                    menuSecondID: item?.relatedDetailItem?.[0]?.MenuSecondID || "",
                    menuSecondName: item?.relatedDetailItem?.[0]?.MenuSecondName || "",
                },
            }));
        }
    }, [item]);

    // */ 篩選器：供餐
    // const filteredMenu1 = getMealDataFromServer.filter((menu) => menu.DessertTypeID === selectedDessertType) // 假設 meal 數據中有 DessertTypeId
    //     || []; // 若未選擇主題，顯示所有餐點
    // const filteredMenu2 = getMealDataFromServer.filter((menu) => menu.DessertTypeID === selectedDessertType) // 假設 meal 數據中有 DessertTypeId
    //     || [];
    const [filteredMenu1, setFilteredMenu1] = useState([]);
    const [filteredMenu2, setFilteredMenu2] = useState([]);
    useEffect(() => {
        const selectedDessertTypeId = formData.relatedDetailItem.dessertTypeId;
        if (selectedDessertTypeId) {
            const newFilteredMenu1 = getMealDataFromServer.filter(menu => menu.DessertTypeID === Number(selectedDessertTypeId));
            const newFilteredMenu2 = getMealDataFromServer.filter(menu => menu.DessertTypeID === Number(selectedDessertTypeId));
            setFilteredMenu1(newFilteredMenu1);
            setFilteredMenu2(newFilteredMenu2);
        } else {
            // setFilteredMenu1(getMealDataFromServer);
            // setFilteredMenu2(getMealDataFromServer);
        }
    }, [formData.relatedDetailItem.dessertTypeId, getMealDataFromServer]);
    // -- 篩選器：供餐/*

    // */ 篩選器：模板
    useEffect(() => {
        const selectedTemplate = getTemplateDataFromServer.find(template => template.TemplateID === formData.templateId);

        if (selectedTemplate) {
            setFormData(prev => ({
                ...prev,
                routeId: selectedTemplate.RouteID,
                route: `${selectedTemplate.StopStartName} 到 ${selectedTemplate.StopEndName}`,
                dessertTypeId: selectedTemplate.DessertTypeID,
                templateDescription: selectedTemplate.TemplateDescription,
                relatedDetailItem: {
                    dessertTypeId: selectedTemplate.DessertTypeID,
                    dessertTitle: selectedTemplate.DessertTitle,
                    menuFirstID: selectedTemplate.MenuFirstID,
                    menuFirstName: selectedTemplate.MenuFirstName,
                    menuSecondID: selectedTemplate.MenuSecondID,
                    menuSecondName: selectedTemplate.MenuSecondName,
                },
            }));
        }
    }, [formData.templateId, getTemplateDataFromServer]);
    // -- 篩選器：模板 /*

    // */ onchange
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "dessertTypeId") {
            setFormData(prev => ({
                ...prev,
                dessertTypeId: value, // 直接使用新值
                relatedDetailItem: {
                    ...prev.relatedDetailItem,
                    dessertTypeId: value, // 更新 relatedDetailItem 中的 dessertTypeId
                },
            }));
        }

        if (name === "templateId") {
            if (value != "") {
                const selectedTemplate = getTemplateDataFromServer.find(template => template.TemplateID === Number(value));
                if (selectedTemplate) {
                    setFormData(prev => ({
                        ...prev,
                        templateId: selectedTemplate.TemplateID,
                        routeId: selectedTemplate.RouteID,
                        route: `${selectedTemplate.StopStartName} 到 ${selectedTemplate.StopEndName}`,
                        dessertTypeId: selectedTemplate.DessertTypeID,
                        relatedDetailItem: {
                            dessertTypeId: selectedTemplate.DessertTypeID,
                            dessertTitle: selectedTemplate.DessertTitle,
                            menuFirstID: selectedTemplate.MenuFirstID,
                            menuFirstName: selectedTemplate.MenuFirstName,
                            menuSecondID: selectedTemplate.MenuSecondID,
                            menuSecondName: selectedTemplate.MenuSecondName,
                        },
                    }));
                }
            }
            return;
        }

        if (name === "route") {
            const selectedRoute = getRouteDataFromServer.find(route => route.RouteID === Number(value));
            setFormData(prev => ({
                ...prev,
                routeId: value,
                route: value, // 更新顯示的路線名稱
            }));
            return; // 提前返回以避免更新其他字段
        }
        setFormData(prev => ({
            ...prev,
            [name]: value,
            relatedDetailItem: {
                ...prev.relatedDetailItem,
                [name]: value,
            },
        }));
    };
    // -- onchange /*

    const resetForm = () => {
        setFormData(initialState); // 使用初始狀態重置表單
        setErrorMessages({}); // 清除任何錯誤信息
    };

    const modalItemsInSchedule = [
        {
            title: "行程ID",
            content: () => (
                <>
                    <DataFetcherMeals setDataFromServer={setGetMealDataFromServer} />
                    <DataFetcherDesserType setDataFromServer={setGetDessertTypeDataFromServer} />
                    <DataFetcherTemplate setDataFromServer={setGetTemplateDataFromServer} />
                    <DataDepartureTime setDataFromServer={setGetDepartureTimeDataFromServer} />
                    <DataFetcherRoute setDataFromServer={setGetRouteDataFromServer} />
                    {formData.scheduleId != "" ? (
                        <span className="font-bold">{formData.scheduleId}</span>
                    ) : (
                        <span className="font-bold">建立新旅程</span>
                    )}
                </>
            )
        },
        {
            title: "路線與供餐模板",
            content: () => (
                <>
                    <select className="focus:text-dark bg-gray-200 rounded-full p-2 font-bodyFont font-bold"
                        name="templateId"
                        value={formData.templateId || ""}
                        onChange={handleChange}>
                        <option value="">沒有合適的模板？新建一個！</option>
                        {getTemplateDataFromServer.map(data => (
                            <option value={data.TemplateID} key={'template' + data.TemplateID}>
                                {data.StopStartName}到{data.StopEndName}：{data.DessertTitle.substring(0, 2)}
                            </option>
                        ))}
                    </select>
                    {/* route-dom的Link使用to，nextUI的Link使用href */}
                </>
            )
        },
        {
            title: "路線",
            content: () => (
                <>
                    <select className="font-bodyFont font-bold bg-transparent"
                        name="routeId"
                        value={formData.routeId}
                        onChange={handleChange}
                        disabled={!!formData.templateId} // 如果有模板ID則禁用
                    >
                        {
                            formData.templateId ? (
                                <option value={formData.routeId} >
                                    {formData.route}
                                </option>
                            ) : (
                                <>
                                    <option>請選擇路線</option>
                                    {
                                        getRouteDataFromServer.map((data, index) => (
                                            <option value={data.RouteID} key={'routeID' + index}>
                                                {data.StopStartName} 到 {data.StopEndName}
                                            </option>

                                        ))}
                                </>
                            )
                        }
                    </select>
                    {errorMessages.routeId && <span className="text-red-500">{errorMessages.routeId}</span>}
                </>
            ),
        },
        {
            title: "甜點風格",
            content: () => (
                <select className="font-bodyFont font-bold bg-transparent"
                    name="dessertTypeId"
                    value={formData.dessertTypeId}
                    onChange={handleChange}
                    disabled={!!formData.templateId} // 如果有模板ID則禁用
                >
                    {
                        formData.templateId ? (
                            <option value={formData.dessertTypeId} >
                                {formData.relatedDetailItem.dessertTitle}
                            </option>
                        ) : (
                            <>
                                <option>請選擇甜點風格</option>
                                {getDessertTypeDataFromServer.map(data => (
                                    <option value={data.DessertTypeID} key={'dessetType' + data.DessertTypeID}>
                                        {data.DessertTitle}
                                    </option>
                                ))}
                            </>
                        )}
                </select>
            ),
        },
        {
            title: "供餐",
            content: () => (
                <>
                    <select className="font-bodyFont bg-transparent"
                        name="menuFirstID"
                        value={formData.menuFirstID}
                        onChange={handleChange}
                        disabled={!!formData.templateId} // 如果有模板ID則禁用
                    >
                        {formData.templateId ? (
                            <option value={formData.relatedDetailItem.menuFirstID}>{formData.relatedDetailItem.menuFirstName}</option>
                        ) : (
                            <>
                                <option>請選擇餐點</option>
                                {filteredMenu1.map(item => (
                                    <option value={item.MealID} key={'meal1' + item.MealID}>
                                        {item.MealName}
                                    </option>
                                ))}
                            </>
                        )}
                    </select>
                    <br />
                    <select className="font-bodyFont bg-transparent"
                        name="menuSecondID"
                        value={formData.menuSecondID}
                        onChange={handleChange}
                        disabled={!!formData.templateId} // 如果有模板ID則禁用
                    >
                        {formData.templateId ? (
                            <option value={formData.relatedDetailItem.menuSecondID}>{formData.relatedDetailItem.menuSecondName}</option>
                        ) : (
                            <>
                                <option value="">請選擇餐點</option>
                                {filteredMenu2.map(item => (
                                    <option value={item.MealID} key={'meal2' + item.MealID}>
                                        {item.MealName}
                                    </option>
                                ))}
                            </>
                        )}
                    </select>
                </>
            ),
        },
        {
            title: "出發日期",
            content: () => (
                <input type="date"
                    name="departureDate"
                    value={formData.departureDate}
                    className="focus:text-dark bg-gray-200 rounded-full p-2"
                    onChange={handleChange} />
            ),
        },
        {
            title: "出發時間",
            content: () => (
                <select
                    className="focus:text-dark bg-gray-200 rounded-full p-2"
                    name="departureTimeId"
                    value={formData.departureTimeId}
                    onChange={handleChange}
                >
                    <option value="">請選擇出發時間</option>
                    {getDepartureTimeDataFromServer.map(time => (
                        <option value={time.DepartureTimeID} key={'departuretime' + time.DepartureTimeID}>
                            {time.DepartureTime}
                        </option>
                    ))}
                </select>
            ),
        },
    ];
    return { modalItems: modalItemsInSchedule, formData, handleChange };
};

const RouteModalItems = (locationPath, item = null) => {

    // 新拿到的data
    const [getStopsDataFromServer, setGetStopsDataFromServer] = useState([]);

    // 從table那邊拿到的item
    const initialState = {
        routeId: item?.RouteID || "",
        routeImagePath: item?.RouteImagePath || "",
        duration: item?.Duration || "",
        description: item?.Description || "",
        landScapeImage1: item?.LandScapeImage1 || "",
        landScapeImage2: item?.LandScapeImage2 || "",
        landScapeImage3: item?.LandScapeImage3 || "",
        landScapeDescription: item?.LandScapeDescription || "",
        stopStartId: item?.StopStartID || "",
        stopStartName: item?.StopStartName || "",
        stopEndId: item?.StopEndID || "",
        stopEndName: item?.StopEndName || "",
    }
    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        if (item) {
            setFormData(prev => ({
                ...prev,
                routeId: item?.RouteID || "",
                routeImagePath: item?.RouteImagePath || "",
                duration: item?.Duration || "",
                description: item?.Description || "",
                landScapeImage1: item?.LandScapeImage1 || "",
                landScapeImage2: item?.LandScapeImage2 || "",
                landScapeImage3: item?.LandScapeImage3 || "",
                landScapeDescription: item?.LandScapeDescription || "",
                stopStartId: item?.StopStartID || "",
                stopStartName: item?.StopStartName || "",
                stopEndId: item?.StopEndID || "",
                stopEndName: item?.StopEndName || "",
            }));
        }
    }, [item]);

    const handleChange = (event) => {
        const { name, value, type, files } = event.target;
        if (type === "file") {
            if (name === "routeImagePath" && files && files.length == 1) {
                // file => array，並且將資料以array方式取得檔名
                const file = Array.from(files).map(file => file.name)
                setFormData(prev => ({
                    ...prev,
                    [name]: `/src/assets/images/train_exterior/${file}` // 將文件的 URL 存入狀態
                }));
            }
            else if (files && files.length == 3) {
                // file => array，並且將資料以array方式取得檔名
                const fileList = Array.from(files).map(file => file.name)
                setFormData(prev => ({
                    ...prev,
                    landScapeImage1: `/src/assets/images/train_exterior/${fileList[0]}`,
                    landScapeImage2: `/src/assets/images/train_exterior/${fileList[1]}`,
                    landScapeImage3: `/src/assets/images/train_exterior/${fileList[2]}`,
                }));
            }
            else if (files && files.length !== 3) {
                alert("務必選擇3張風景圖");
                event.target.value = "";
            }

            return;
        }

        if (name === 'stopStartId' && value === formData.stopEndId) {
            setFormData(prev => ({ ...prev, stopEndId: '' }));
        }
        if (name === 'stopEndId' && value === formData.stopStartId) {
            setFormData(prev => ({ ...prev, stopStartId: '' }));
        }

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const modalItemsInRoute = [
        {
            title: "路線ID",
            content: () => (
                <>
                    <DataFetcherStops setDataFromServer={setGetStopsDataFromServer} />
                    {formData.routeId != "" ? (
                        <span className="font-bold">{formData.routeId}</span>
                    ) : (
                        <span className="font-bold">建立新路線</span>
                    )}
                </>
            ),
        },
        {
            title: "起迄站",
            content: () => (
                <>
                    <select
                        className="focus:text-dark bg-gray-200 rounded-full p-2 font-bodyFont"
                        name="stopStartId"
                        value={formData.stopStartId || ""}
                        onChange={handleChange}>
                        {formData.routeId ? (
                            <option value={formData.stopStartId}>{formData.stopStartName}</option>
                        ) : (
                            <>
                                <option value="" disabled hidden>選擇站點</option>
                                {getStopsDataFromServer.map((data) => (
                                    <option key={'stopStart' + data.StopID} value={data.StopID}>
                                        {data.StopName}
                                    </option>
                                ))}
                            </>
                        )}
                    </select>
                    &emsp;到&emsp;
                    <select
                        className="focus:text-dark bg-gray-200 rounded-full p-2 font-bodyFont"
                        name="stopEndId"
                        value={formData.stopEndId || ""}
                        onChange={handleChange}>
                        {formData.routeId ? (
                            <option value={formData.stopEndId}>{formData.stopEndName}</option>
                        ) : (
                            <>
                                <option value="" disabled hidden>選擇站點</option>
                                {getStopsDataFromServer.map((data) => (
                                    <option key={'stopEnd' + data.StopID} value={data.StopID}>
                                        {data.StopName}
                                    </option>
                                ))}
                            </>
                        )}
                    </select>
                </>
            ),
        },
        {
            title: "車程(分)",
            content: () => (
                <input
                    type="number"
                    className="focus:text-lightyellow border border-dashed border-brown focus:border-double focus:border-lightyellow rounded-lg w-full pl-3 py-1"
                    name="duration"
                    defaultValue={formData.duration || ""}
                    onChange={handleChange}
                    readOnly={!!formData.routeId} // 雙重否定
                    min="1"
                    max="600"
                />
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
                    <div className={`flex flex-row gap-3 ${formData.routeImagePath ? "py-3" : ""}`}>
                        {formData.routeImagePath &&
                            <img src={formData.routeImagePath}
                                className="rounded-full"
                                title="路線圖"
                                alt="Route" style={{
                                    width: '50px', height: 'auto',
                                    objectFit: 'cover', display: 'block'
                                }} />}
                        <div className="bg-brown w-[1px]"></div>
                        {formData.landScapeImage1 &&
                            <img src={formData.landScapeImage1}
                                className="rounded-full"
                                title="風景圖1"
                                alt="Route" style={{
                                    width: '50px', height: 'auto',
                                    objectFit: 'cover', display: 'block'
                                }} />}
                        {formData.landScapeImage2 &&
                            <img src={formData.landScapeImage2}
                                className="rounded-full"
                                title="風景圖2"
                                alt="Route" style={{
                                    width: '50px', height: 'auto',
                                    objectFit: 'cover', display: 'block'
                                }} />}
                        {formData.landScapeImage3 &&
                            <img src={formData.landScapeImage3}
                                className="rounded-full"
                                title="風景圖3"
                                alt="Route" style={{
                                    width: '50px', height: 'auto',
                                    objectFit: 'cover', display: 'block'
                                }} />}
                    </div>
                    {formData.routeImagePath
                        && formData.landScapeImage1
                        && formData.landScapeImage2
                        && formData.landScapeImage3
                        ? (
                            ""
                        ) :
                        (
                            <>
                                <input
                                    type="file"
                                    name="routeImagePath"
                                    accept="image/png, image/jpeg"
                                    id="routeImagePath"
                                    onChange={handleChange}
                                />
                                <input
                                    type="file"
                                    multiple
                                    name="landScapeImage1"
                                    accept="image/png, image/jpeg"
                                    onChange={handleChange}
                                    id="landScapeImage1"
                                />
                            </>
                        )}
                </>
            ),
        },
        {
            title: "路線介紹",
            content: () => (
                <textarea
                    type="text"
                    name="description"
                    className="w-full text-ellipsis bg-transparent border border-dashed border-brown focus:border rounded-lg"
                    rows="5"
                    defaultValue={formData.description || ""}
                    onChange={handleChange}
                />
            ),
        },
        {
            title: "風景介紹",
            content: () => (
                <textarea
                    type="text"
                    name="landScapeDescription"
                    className="w-full text-ellipsis bg-transparent border border-dashed border-brown focus:border rounded-lg"
                    rows="5"
                    defaultValue={formData.landScapeDescription || ""}
                    onChange={handleChange}
                />
            ),
        },
    ];

    return { modalItems: modalItemsInRoute, formData, handleChange }
}

const MealModalItems = (locationPath, item = null) => {

    // 新拿到的data
    const [getDessertTypeDataFromServer, setGetDessertTypeDataFromServer] = useState([]);

    // 從table那邊拿到的item
    const initialState = {
        mealId: item ? item.MealID : "",
        dessertTypeId: item ? item.DessertTypeID : "",
        dessertTitle: item ? item.DessertTitle : "",
        mealName: item ? item.MealName : "",
        mealImagePath: item ? item.MealImagePath : "",
        mealContent: item ? item.MealContent : "",
        mealDescription: item ? item.MealDescription : "",
    }
    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        if (item) {
            setFormData(prev => ({
                ...prev,
                mealId: item ? item.MealID : "",
                dessertTypeId: item ? item.DessertTypeID : "",
                dessertTitle: item ? item.DessertTitle : "",
                mealName: item ? item.MealName : "",
                mealImagePath: item ? item.MealImagePath : "",
                mealContent: item ? item.MealContent : "",
                mealDescription: item ? item.MealDescription : "",
            }));
        }
    }, [item]);

    const handleChange = (event) => {
        const { name, value, type, files } = event.target;

        if (type === "file") {
            if (files) {
                // file => array，並且將資料以array方式取得檔名
                const file = Array.from(files).map(file => file.name)
                setFormData(prev => ({
                    ...prev,
                    [name]: `/src/assets/images/dessert/${file}` // 將文件的 URL 存入狀態
                }));
            }
            else {
                alert("務必選擇1張甜點圖");
                event.target.value = "";
            }

            return;
        }

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const modalItemsInMeal = [
        {
            title: "餐點ID",
            content: () => (
                <>
                    <DataFetcherDesserType setDataFromServer={setGetDessertTypeDataFromServer} />
                    {formData.mealId != "" ? (
                        <span className="font-bold">{formData.mealId}</span>
                    ) : (
                        <span className="font-bold">建立新餐點</span>
                    )}
                </>
            ),
        },
        {
            title: "甜點風格",
            content: () => (
                <select
                    className="focus:text-dark bg-gray-200 rounded-full p-2 font-bodyFont"
                    name="dessertTypeId"
                    defaultValue={formData.dessertTypeId || ""}
                    onChange={handleChange}>
                    <option value="" disabled hidden>選擇甜點風格</option>
                    {getDessertTypeDataFromServer.map((data) => (
                        <option key={'dessert' + data.DessertTypeID} value={data.DessertTypeID}>
                            {data.DessertTitle}
                        </option>
                    ))}
                </select>
            )
        },
        {
            title: "餐點名稱",
            content: () => (
                <input type="text"
                    className="focus:text-lightyellow border border-dashed border-brown focus:border-double focus:border-lightyellow rounded-lg w-full pl-3 py-1"
                    name="mealName"
                    defaultValue={formData.mealName || ""}
                    onChange={handleChange}
                    readOnly={formData.mealId ? true : false}
                />
            ),
        },
        {
            title: "餐點圖片",
            content: () => (
                <>
                    {formData.mealImagePath &&
                        <img src={formData.mealImagePath}
                            className="my-3 rounded-full"
                            title="甜點圖"
                            alt="Route" style={{
                                width: '50px', height: 'auto',
                                objectFit: 'cover', display: 'block'
                            }} />}
                    {formData.mealImagePath ? (
                        ""
                    ) : (
                        <input type="file"
                            name="mealImagePath"
                            id="mealImagePath"
                            onChange={handleChange}
                        />
                    )}
                </>
            ),
        },
        {
            title: "餐點內容",
            content: () => (
                <textarea
                    type="text"
                    className="w-full text-ellipsis bg-transparent border border-dashed border-brown rounded-lg"
                    rows="3"
                    defaultValue={formData.mealContent}
                    name="mealContent"
                    onChange={handleChange}
                />
            ),
        },
        {
            title: "餐點描述",
            content: () => (
                <textarea
                    type="text"
                    className="w-full text-ellipsis bg-transparent border border-dashed border-brown focus:border rounded-lg"
                    rows="5"
                    name="mealDescription"
                    value={formData.mealDescription}
                    onChange={handleChange}
                />
            ),
        },
    ]
    return { modalItems: modalItemsInMeal, formData, handleChange }
}

// Modal
const ModalOverLay = (props) => {
    const { item, handleSubmit } = props;
    const location = useLocation();

    let modalItems = [];
    let formData = {};
    let handleChange = () => { };

    const handleSubmitClick = async () => {
        if (handleSubmit) {
            try {
                await handleSubmit(formData);
            } catch (error) {
                console.error("提交失敗", error);
            } finally {
                if (props.onClose) {
                    props.onClose();
                }
            }
        }
    };

    if (location.pathname === navText[1].path) {
        // 旅程管理
        const result = ScheduleModalItems(location.pathname, item);
        modalItems = result.modalItems;
        formData = result.formData;
        handleChange = result.handleChange;
    } else if (location.pathname === navText[3].path) {
        // 路線管理
        const result = RouteModalItems(location.pathname, item);
        modalItems = result.modalItems;
        formData = result.formData;
        handleChange = result.handleChange;
    } else if (location.pathname === navText[4].path) {
        // 餐點管理
        const result = MealModalItems(location.pathname, item);
        modalItems = result.modalItems;
        formData = result.formData;
        handleChange = result.handleChange;
    }

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
                    {modalItems.map((elem, index) => (
                        <div key={'modalItem' + index} className="
                        py-1 
                        grid grid-cols-2 gap-4 items-center">
                            <div className="text-right">
                                <h3 className="font-titleFont font-bold text-p-1 px-6 py-2 rounded-full">
                                    {typeof elem.title === 'function' ? elem.title() : elem.title}
                                </h3>
                            </div>
                            <div>
                                <p className="font-bodyFont text-p-2 pb-2">
                                    {typeof elem.content === 'function' ? elem.content() : elem.content}
                                </p>
                                <hr />
                            </div>
                        </div>
                    ))}
                </CardBody>
                <CardFooter className="bg-darkbrown items-end justify-end">
                    <BtnLightbrown btnText="確定送出"
                        onClick={handleSubmitClick} />
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
                <ModalOverLay
                    item={props.item}
                    onClose={props.onClose}
                    handleSubmit={props.handleSubmit}
                >
                    {props.children}
                </ModalOverLay>,
                portalElement
            )}
        </Fragment>
    );
};

export default Modal;
