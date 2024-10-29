import { Fragment, useEffect, useState } from "react";
import ReactDom from "react-dom";
import { useLocation, Link } from "react-router-dom";
import { DateInput } from "@nextui-org/react";
import { CalendarDate } from "@internationalized/date";

import DataFetcherMeals from '../../dataProcessing/admin/GET_meal.jsx'
import DataFetcherDesserType from '../../dataProcessing/admin/GET_dessertType.jsx'
import DataFetcherTemplate from '../../dataProcessing/admin/GET_template.jsx'
import DataFetcherStops from '../../dataProcessing/admin/GET_stops.jsx'

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
    // 新拿到的data
    const [getMealDataFromServer, setGetMealDataFromServer] = useState([]);
    const [getDessertTypeDataFromServer, setGetDessertTypeDataFromServer] = useState([]);
    const [getTemplateDataFromServer, setGetTemplateDataFromServer] = useState([]);

    // 從使用者那邊拿到的data
    const [selectedTemplateData, setSelectedTemplateData] = useState(null);
    const [selectedDessertType, setSelectedDessertType] = useState(null);
    const [selectedMeal1, setSelectedMeal1] = useState('');
    const [selectedMeal2, setSelectedMeal2] = useState('');

    // 從table那邊拿到的item
    const initialState = {
        scheduleId: item ? item.ScheduleID : "",
        departureDate: item ? item.DepartureDate : "",
        departureTime: item ? item.DepartureTime : "",
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

    // 使用 useEffect 更新 formData
    useEffect(() => {
        if (item) {
            setFormData(prev => ({
                ...prev,
                scheduleId: item.ScheduleID,
                departureDate: item.DepartureDate,
                departureTime: item.DepartureTime,
                templateId: item.TemplateID,
                routeId: item ? item.RouteID : "",
                templateDescription:item? item.TemplateDescription:"",
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

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "routeId") {
            setSelectedTemplateData(value);
        }
        if (name === "dessertTypeId") {
            setSelectedDessertType(value); // 更新 selectedDessertType
        }

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleTemplateChange = (event) => {
        const selectedTemplateID = Number(event.target.value);
        const selectedTemplate = getTemplateDataFromServer.find(template => template.TemplateID === selectedTemplateID);

        if (selectedTemplate) {
            setFormData(prev => ({
                ...prev,
                templateId: selectedTemplate.TemplateID,
                routeId: item ? item.RouteID : "",
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
        } else {
            resetForm();
        }
    };
    const resetForm = () => {
        setFormData(initialState); // 或根据需要设置为空或默认值
    };

    // 供餐的過濾
    const filteredMenu1 = (selectedDessertType ?? null) // 使用 null-coalescing operator
        ? getMealDataFromServer.filter((menu) => menu.DessertTypeID === selectedDessertType) // 假設 meal 數據中有 DessertTypeId
        : []; // 若未選擇主題，顯示所有餐點

    const filteredMenu2 = (selectedDessertType ?? null)
        ? getMealDataFromServer.filter((menu) => menu.DessertTypeID === selectedDessertType) // 假設 meal 數據中有 DessertTypeId
        : [];

    console.log("我的供餐咧", formData.dessertTypeId, "123", filteredMenu1, filteredMenu2);
    console.log("data123", formData);
    console.log("data", formData.relatedDetailItem.dessertTypeId);
    console.log("data", formData.relatedDetailItem.menuSecondID);


    const modalItemsInSchedule = [
        {
            title: "行程ID",
            content: () => (
                <>
                    <DataFetcherMeals setDataFromServer={setGetMealDataFromServer} />
                    <DataFetcherDesserType setDataFromServer={setGetDessertTypeDataFromServer} />
                    <DataFetcherTemplate setDataFromServer={setGetTemplateDataFromServer} />
                    <span className="font-bold">{formData.scheduleId}</span>
                </>
            )
        },
        {
            title: "路線與供餐模板",
            content: () => (
                <>
                    <select className="focus:text-dark bg-gray-200 rounded-full p-2 font-bodyFont font-bold"
                        name="templateId"
                        value={formData.templateId}
                        onChange={handleTemplateChange}>
                        {getTemplateDataFromServer.map(data => (
                            <option value={data.TemplateID} key={data.TemplateID}>
                                {data.TemplateID}：{data.DessertTitle}
                            </option>
                        ))}
                        <option value="">沒有合適的模板？新建一個！</option>
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
                        name="route"
                        value={formData.route}
                        onChange={handleChange}>
                        {getTemplateDataFromServer.map(data => (
                            <option value={data.RouteID} key={data.RouteID}>
                                {data.TemplateDescription}
                            </option>
                        ))}
                    </select>
                </>
            ),
        },
        {
            title: "甜點風格",
            content: () => (
                <select className="font-bodyFont font-bold bg-transparent"
                    name="dessertTypeId"
                    value={formData.dessertTypeId}
                    onChange={handleChange}>
                    {getDessertTypeDataFromServer.map(data => (
                        <option value={data.DessertTypeID} key={data.DessertTypeID}>
                            {data.DessertTitle}
                        </option>
                    ))}
                </select>
            ),
        },
        {
            title: "供餐",
            content: () => (
                <>
                    <select className="font-bodyFont bg-transparent"
                        name="selectedMeal1"
                        value={formData.selectedMeal1}
                        onChange={handleChange}>
                        {formData.dessertTypeId === formData.relatedDetailItem.dessertTypeId ? (
                            <option value={formData.relatedDetailItem.menuFirstID}>{formData.relatedDetailItem.menuFirstName}</option>
                        ) : (
                            filteredMenu1.length > 0 ? (
                                filteredMenu1.map(item => (
                                    <option value={item.MealID} key={item.MealID}>
                                        {item.MealName}
                                    </option>
                                )
                                ))
                                : (null)
                        )}
                    </select>
                    <br />
                    <select className="font-bodyFont bg-transparent"
                        name="selectedMeal2"
                        value={formData.selectedMeal2}
                        onChange={handleChange}>
                        {filteredMenu2.length > 0 ? (
                            filteredMenu2.map(item => (
                                <option value={item.MealID} key={item.MealID}>
                                    {item.MealName}
                                </option>
                            ))
                        ) : (
                            formData.dessertTypeId === formData.relatedDetailItem.dessertTypeId ? (
                                <option value={formData.relatedDetailItem.menuSecondID}>{formData.relatedDetailItem.menuSecondName}</option>
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
                <input className="focus:text-dark bg-gray-200 rounded-full p-2"
                    type="time"
                    name="departureTime"
                    value={formData.departureTime}
                    onChange={handleChange} />
            ),
        },
    ];
    return { modalItems: modalItemsInSchedule, formData, handleChange };
};

const RouteModalItems = (locationPath, item = null) => {

    // 新拿到的data
    const [getStopsDataFromServer, setGetStopsDataFromServer] = useState([]);

    // 從table那邊拿到的item
    const [formData, setFormData] = useState({
        routeId: item ? item.RouteID : "",
        routeImagePath: item ? item.RouteImagePath : "",
        duration: item ? item.Duration : "",
        description: item ? item.Description : "",
        landScapeImage1: item ? item.LandScapeImage1 : "",
        landScapeImage2: item ? item.LandScapeImage2 : "",
        landScapeImage3: item ? item.LandScapeImage3 : "",
        landScapeDescription: item ? item.LandScapeDescription : "",
        stopStartId: item ? item.StopStartID : "",
        stopStartName: item ? item.StopStartName : "",
        stopEndId: item ? item.StopEndID : "",
        stopEndName: item ? item.StopEndName : "",
        selectedStop1Id: '',
        selectedStop2Id: '',
    });

    // 处理输入变化的统一函数
    const handleChange = (event) => {
        const { name, value } = event.target;

        // 特殊处理：如果选择的 stop1 与 stop2 相同，清空 stop2
        if (name === 'selectedStop1Id' && value === formData.selectedStop2Id) {
            setFormData(prev => ({ ...prev, selectedStop2Id: '' }));
        }

        // 特殊处理：如果选择的 stop2 与 stop1 相同，清空 stop1
        if (name === 'selectedStop2Id' && value === formData.selectedStop1Id) {
            setFormData(prev => ({ ...prev, selectedStop1Id: '' }));
        }

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const modalItemsInRoute = [
        {
            title: "路線ID",
            content: () => (
                <>
                    <DataFetcherStops setDataFromServer={setGetStopsDataFromServer} />
                    {formData.routeId}
                    建立新的路線
                </>
            ),
        },
        {
            title: "起迄站",
            content: () => (
                <>
                    <select
                        className="focus:text-dark bg-gray-200 rounded-full p-2 font-bodyFont"
                        name="selectedStop1Id"
                        value={formData.selectedStop1Id}
                        onChange={handleChange}>
                        {formData.routeId ? (
                            <option value={formData.stopStartId}>{formData.stopStartName}</option>
                        ) : (
                            <>
                                <option value="" disabled hidden>選擇站點</option>
                                {getStopsDataFromServer.map((data) => (
                                    <option key={data.StopID} value={data.StopID}>
                                        {data.StopName}
                                    </option>
                                ))}
                            </>
                        )}
                    </select>
                    &emsp;到&emsp;
                    <select
                        className="focus:text-dark bg-gray-200 rounded-full p-2 font-bodyFont"
                        name="selectedStop2Id"
                        value={formData.selectedStop2Id}
                        onChange={handleChange}>
                        {formData.routeId ? (
                            <option value={formData.stopEndId}>{formData.stopEndName}</option>
                        ) : (
                            <>
                                <option value="" disabled hidden>選擇站點</option>
                                {getStopsDataFromServer.map((data) => (
                                    <option key={data.StopID} value={data.StopID}>
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
                    className="focus:text-lightyellow"
                    value={formData.duration}
                    onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                    readOnly={!!formData.routeId} // 雙重否定
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
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        id="imgInputRoute"
                        onChange={() => { getImgFile(img1_Route) }}
                    />
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        multiple
                        id="imgInputLandScape"
                    />
                </>
            ),
        },
        {
            title: "路線介紹",
            content: () => (
                <textarea
                    type="text"
                    className="w-64 text-ellipsis bg-transparent focus:text-lightyellow"
                    rows="5"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                />
            ),
        },
        {
            title: "風景介紹",
            content: () => (
                <textarea
                    type="text"
                    className="w-64 text-ellipsis bg-transparent focus:text-lightyellow"
                    rows="5"
                    value={formData.landScapeDescription}
                    onChange={(e) => setFormData(prev => ({ ...prev, landScapeDescription: e.target.value }))}
                />
            ),
        },
    ];

    return modalItemsInRoute;
}

const MealModalItems = [
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

// Modal
const ModalOverLay = (props) => {
    const { item, handleSubmit } = props;
    const location = useLocation();

    let modalItems = [];
    let formData = {};
    let handleChange = () => { };

    const handleSubmitClick = () => {
        console.log("modal的data", formData);
        if (handleSubmit) {
            handleSubmit(formData);
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
                        <div key={index} className="
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
