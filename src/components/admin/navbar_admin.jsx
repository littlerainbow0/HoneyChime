import React, { useState } from "react";
import { useLocation } from "react-router-dom"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";

// /* icons: https://react-icons.github.io/react-icons/icons/bs/
import { BsCalendar2Range } from "react-icons/bs";
import { BsCalendar2Week } from "react-icons/bs";
import { BsJournals } from "react-icons/bs";
import { BsWindowPlus } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsEnvelopeAt } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";

// -- icons /*

// /* icon指定統一格式
import { IconContext } from "react-icons";
// -- icon指定統一格式 */

// /* LOGO
import Logo from "../../honeyChimeLogo.jsx"
// -- LOGO /*

// tailwind設定: https://www.creative-tim.com/twcomponents/cheatsheet/
// flex-col = flex-direction: column;

export const navText = [
  {
    icon: <BsCalendar2Week />,
    item: "訂位狀態",
    path: "",
  },
  {
    icon: <BsCalendar2Range />,
    item: "旅程管理",
    path: "/admin/schedule",
  },
  {
    icon: <BsJournals />,
    item: "訂單管理",
    path: ""
  },
  {
    icon: <ImSpoonKnife />,
    item: "路線管理",
    path: "/admin/menu",
  },
  {
    icon: <ImSpoonKnife />,
    item: "餐點管理",
    path: "/admin/menu",
  },
  {
    icon: <BsWindowPlus />,
    item: "最新消息",
    path: "",
  },
  {
    icon: <BsFillPeopleFill />,
    item: "會員管理",
    path: "/admin/member",
  },
  {
    icon: <BsEnvelopeAt />,
    item: "會員諮詢",
    path: "/admin/question",
  },
]

// 側邊欄內容

const Sidebar = () => {

  const location = useLocation();

  const [isRoute, setIsRoute] = useState(false);

  const handleRoute = () => {
    setIsRoute(!isRoute);
  }

  return (
    <>

      <div className={`flex-col justify-center px-5 py-40
        bg-gradient-to-br from-gray-200 to-transparent
        overflow-y-auto text-clip min-w-[170px] 
        absolute top-0 left-0 h-screen 
        w-0 md:w-64 transition-all duration-300 rounded-r-full`}>
        <Link href="/admin">
          <div className="mb-10 p-5">
            <Logo color="rgb(32,30,30)"></Logo>
            <h2 className="font-titleFont text-h3 font-bold mt-10 mb-2 text-darkbrown">
              後臺管理
            </h2>
            <p className="text-brown text-p-3 font-bodyFont">
              推薦使用電腦版
            </p>
          </div>
        </Link>
        <div className="font-titleFont flex flex-col md:pl-14 pl-4">
          {navText.map((elem, index) => (
            <div className="flex items-center md:my-2 my-1  md:text-h6 text-p-1
            font-semibold text-brown
            hover:text-lightbrown gap-2 transition-all" key={index}>
                {location.pathname === elem.path && 
                <div className="bg-lightbrown w-1 h-8 mr-2" />}
              {elem.icon}
              <Link href={elem.path} className="">
                {elem.item}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
