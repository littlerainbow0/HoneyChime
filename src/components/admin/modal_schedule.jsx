import { Fragment, useState } from "react";
import ReactDom from "react-dom";
import { useLocation } from "react-router-dom";

import { navText } from "./navbar_admin.jsx";

import classes from "./Modal.module.css";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import BtnLightbrown from "../user/btn_lightbrown.jsx";

let meal = {
    theme: [
        { themeId: 1, themeName: "歐式" },
        { themeId: 2, themeName: "日式" },
        { themeId: 3, themeName: "台式" },
    ],
    menu1: [
        { themeId: 1, menuId: 1, menuName: "歐式巧克力" },
        { themeId: 1, menuId: 2, menuName: "歐式黑醋栗" },
        { themeId: 2, menuId: 3, menuName: "日式和菓子" },
        { themeId: 2, menuId: 4, menuName: "日式舒芙蕾" },
        { themeId: 3, menuId: 5, menuName: "台式月餅" },
        { themeId: 3, menuId: 6, menuName: "台式鳳梨酥" },
    ],
    menu2: [
        { themeId: 1, menuId: 1, menuName: "歐式巧克力" },
        { themeId: 1, menuId: 2, menuName: "歐式黑醋栗" },
        { themeId: 2, menuId: 3, menuName: "日式和菓子" },
        { themeId: 2, menuId: 4, menuName: "日式舒芙蕾" },
        { themeId: 3, menuId: 5, menuName: "台式月餅" },
        { themeId: 3, menuId: 6, menuName: "台式鳳梨酥" },
    ],
};

const BackDrop = () => {
    return <div className={classes.backdrop}></div>;
};

const ModalOverLay = (props) => {
    const { item } = props;
    const location = useLocation();

    const [selectedTheme, setSelectedTheme] = useState(null);

    const handleThemeChange = (event) => {
        setSelectedTheme(Number(event.target.value));
    };

    // 根據選擇的主題過濾菜單
    const filteredMenu1 = selectedTheme
        ? meal.menu1.filter((menu) => menu.themeId === selectedTheme)
        : [];
    const filteredMenu2 = selectedTheme
        ? meal.menu2.filter((menu) => menu.themeId === selectedTheme)
        : [];

    const modalItemsInSchedule = [
        {
            title: "出發日期",
            content: () => <input type="date" />,
        },
        {
            title: "出發時間",
            content: () => <input type="time" />,
        },
        {
            title: "模板",
            content: () => <input type="text" />,
        },
        {
            title: "路線",
            content: () => <input type="text" />,
        },
        {
            title: "甜點風格",
            content: () => (
                <select className="font-bold bg-transparent font-bodyFont" onChange={handleThemeChange}>
                    <option value="">選擇甜點風格</option>
                    {meal.theme.map((theme) => (
                        <option value={theme.themeId} key={theme.themeId}>
                            {theme.themeName}
                        </option>
                    ))}
                </select>
            ),
        },
        {
            title: "供餐",
            content: () => (
                <>
                    <select className="bg-transparent font-bodyFont">
                        {filteredMenu1.length > 0 ? (
                            filteredMenu1.map((item) => (
                                <option value={item.menuId} key={item.menuId}>
                                    {item.menuName}
                                </option>
                            ))
                        ) : (
                            <option value="">無項目</option>
                        )}
                    </select>
                    <select className="bg-transparent font-bodyFont">
                        {filteredMenu2.length > 0 ? (
                            filteredMenu2.map((item) => (
                                <option value={item.menuId} key={item.menuId}>
                                    {item.menuName}
                                </option>
                            ))
                        ) : (
                            <option value="">無項目</option>
                        )}
                    </select>
                </>
            ),
        },
        {
            title: "找不到模板?　新建一個！",
            content: null,
        },
    ];

    const modalItemsInRoute = [
        {
            title:"餐點ID",
            content:()=>(
                ""
            ),
        },
        {
            title:"餐點名稱",
            content:()=>(
                ""
            ),
        },
        {
            title:"餐點圖片",
            content:()=>(
                ""
            ),
        },
        {
            title:"餐點內容",
            content:()=>(
                ""
            ),
        },
        {
            title:"餐點描述",
            content:()=>(
                ""
            ),
        },
    ]

    const modalItemsInMeal = [
        {
            title:"餐點ID",
            content:()=>(
                ""
            ),
        },
        {
            title:"餐點名稱",
            content:()=>(
                ""
            ),
        },
        {
            title:"餐點圖片",
            content:()=>(
                ""
            ),
        },
        {
            title:"餐點內容",
            content:()=>(
                ""
            ),
        },
        {
            title:"餐點描述",
            content:()=>(
                ""
            ),
        },
    ]

    const modalItems = () => {
        // 旅程管理
        if (location.pathname === navText[1].path) {
            return modalItemsInSchedule;
        } 
        // 路線管理
        // 餐點管理
        if (location.pathname === navText[4].path) {
            return modalItemsInMeal;
        }
    };

    return (
        <div className={classes.modal}>
            <Card className="transition-all rounded-lg">
                <CardHeader className="justify-between bg-darkbrown">
                    <h3 className="py-3 pl-5 mx-2 font-bold font-titleFont text-h3 text-lightyellow">
                        模板新增/修改
                    </h3>
                    <BtnLightbrown btnText="×" onClick={props.onClose} />
                </CardHeader>
                <CardBody className="pl-10 bg-lightyellow ">
                    {modalItems().map((elem, index) => (
                        <div key={index}>
                            <h3 className="">{elem.title}</h3>
                            {elem.content && elem.content()}
                        </div>
                    ))}
                </CardBody>
                <CardFooter className="items-end justify-end bg-darkbrown">
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