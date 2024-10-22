import { Fragment, useState } from "react"
import ReactDom from "react-dom"
import classes from "./Modal.module.css"
import { option } from "framer-motion/m"
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import BtnLightbrown from "../user/btn_lightbrown";

let templateContent = {
    theme: [
        {
            themeId: 1,
            themeName: "歐式",
        },
        {
            themeId: 2,
            themeName: "日式",
        },
        {
            themeId: 3,
            themeName: "台式",
        },
    ],
    menu1: [
        {
            themeId: 1,
            menuId: 1,
            menuName: "歐式巧克力",
        },
        {
            themeId: 1,
            menuId: 2,
            menuName: "歐式黑醋栗",
        },
        {
            themeId: 2,
            menuId: 3,
            menuName: "日式和菓子",
        },
        {
            themeId: 2,
            menuId: 4,
            menuName: "日式舒芙蕾",
        },
        {
            themeId: 3,
            menuId: 5,
            menuName: "台式月餅",
        },
        {
            themeId: 3,
            menuId: 6,
            menuName: "台式鳳梨酥",
        },
    ],
    menu2: [
        {
            themeId: 1,
            menuId: 1,
            menuName: "歐式巧克力",
        },
        {
            themeId: 1,
            menuId: 2,
            menuName: "歐式黑醋栗",
        },
        {
            themeId: 2,
            menuId: 3,
            menuName: "日式和菓子",
        },
        {
            themeId: 2,
            menuId: 4,
            menuName: "日式舒芙蕾",
        },
        {
            themeId: 3,
            menuId: 5,
            menuName: "台式月餅",
        },
        {
            themeId: 3,
            menuId: 6,
            menuName: "台式鳳梨酥",
        },
    ],

    route: [
        {
            routeId: 1,
            routeName: "台中高雄"
        },
        {
            routeId: 2,
            routeName: "台北花蓮"
        },
        {
            routeId: 3,
            routeName: "台北台中"
        },
        {
            routeId: 4,
            routeName: "高雄台東"
        },
        {
            routeId: 5,
            routeName: "台中嘉義"
        },
    ],
}

const BackDrop = () => {
    return <div className={classes.backdrop}></div>
}
const ModalOverLay = (props) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const openModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);

    const [selectedTheme, setSelectedTheme] = useState(null);
    const handleThemeChange = (event) => {
        setSelectedTheme(Number(event.target.value));
    }

    const filteredMenu1 = selectedTheme ?
        templateContent.menu1.filter(menu => menu.themeId === selectedTheme) : [];
    const filteredMenu2 = selectedTheme ?
        templateContent.menu2.filter(menu => menu.themeId === selectedTheme) : [];

    return (
        <div className={classes.modal}>
            <Card className="rounded-lg">
                <CardHeader className="justify-between bg-darkbrown">
                    <h3 className="font-titleFont font-bold text-h3 mx-2 text-lightyellow pl-5 py-3">
                        模板新增/修改
                    </h3>
                    <BtnLightbrown btnText="×" onClick={props.onClose} />
                </CardHeader>
                <CardBody className="pl-10 bg-lightyellow">
                    <div className="flex flex-row gap-10">
                        <div>
                            <h3 className="font-titleFont font-bold text-h6 py-2 pl-1">
                                風格
                            </h3>
                            <select name="" id="" className="
                        font-bodyFont font-bold
                        bg-transparent" onChange={handleThemeChange}>
                                {templateContent.theme.map((item) => (
                                    <option value={item.themeId} key={item.themeId}>{item.themeName}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <h3 className="font-titleFont font-bold text-h6 py-2 pl-1">
                                路線
                            </h3>
                            <select name="" id="" className="font-bodyFont
                        bg-transparent">
                                {templateContent.route.map((item) => (
                                    <option value={item.routeId} key={item.routeId}>{item.routeName}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <h3 className="font-titleFont font-bold text-h6 py-2 pl-1">
                                菜單
                            </h3>
                            <div className="flex flex-row gap-2">
                                <div>
                                    <select name="" id="" className="font-bodyFont
                            bg-transparent">
                                        {filteredMenu1 != [] || filteredMenu1 ? (
                                            filteredMenu1.map((item) => (
                                                <option value={item.menuId} key={item.menuId}>{item.menuName}</option>
                                            ))
                                        ) :
                                            (
                                                <option value="">無項目</option>
                                            )}
                                    </select>
                                </div>
                                <div>
                                    <select name="" id="" className="font-bodyFont
                            bg-transparent">
                                        {filteredMenu2 != [] ? (
                                            filteredMenu2.map((item) => (
                                                <option value={item.menuId} key={item.menuId}>{item.menuName}</option>
                                            ))
                                        ) :
                                            (
                                                <option value="">無項目</option>
                                            )}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                    </div>
                </CardBody>
                <CardFooter className="bg-darkbrown py-10 pl-10 items-end justify-between">
                    <input type="text" placeholder="請輸入行程敘述"
                        className="text-lightyellow font-bodyFont card_footer input-large"
                        value={templateContent.description}
                        style={{ width: '65%', boxSizing: 'border-box' }} />
                    <BtnLightbrown btnText="確定送出" />
                    <BtnLightbrown btnText="取消" onClick={props.onClose} />
                </CardFooter>
            </Card>
        </div>
    )
}
const portalElement = document.getElementById("overlay")
const Modal = props => {
    return <Fragment>
        {ReactDom.createPortal(<BackDrop />, portalElement)}
        {ReactDom.createPortal(<ModalOverLay onClose={props.onClose}>{props.children}</ModalOverLay>, portalElement)}

    </Fragment>
}
export default Modal