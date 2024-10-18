import React from "react";
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
import { BsJournalBookmarkFill } from "react-icons/bs";
import { BsWindowPlus } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsEnvelopeAt } from "react-icons/bs";
// -- icons /*

// /* icon指定統一格式
import { IconContext } from "react-icons";
// -- icon指定統一格式 */

// /* LOGO
import Logo from "../../honeyChimeLogo.jsx"
// -- LOGO /*

// tailwind設定: https://www.creative-tim.com/twcomponents/cheatsheet/
// flex-col = flex-direction: column;

const navText = [
  {
    icon: <BsCalendar2Range />,
    item: "訂單管理"
  },
  {
    icon: <BsCalendar2Week />,
    item: "訂位狀態"
  },
  {
    icon: <BsJournals />,
    item: "旅程管理"
  },
  {
    icon: <BsJournalBookmarkFill />,
    item: "旅程範本"
  },
  {
    icon: <BsWindowPlus />,
    item: "最新消息"
  },
  {
    icon: <BsFillPeopleFill />,
    item: "會員管理"
  },
  {
    icon: <BsEnvelopeAt />,
    item: "會員諮詢"
  },
]

// 側邊欄內容
const Sidebar = () => {
  return (
    <div className="flex-col justify-center w-64 p-5 h-screen bg-dark overflow-y-auto text-clip min-w-[170px]">
      <Link href="#">
        <div className="mb-10 p-5">
          <Logo color="rgb(255,245,245)"></Logo>
          <h2 className="font-titleFont text-h3 font-bold mt-10 mb-2 text-lightyellow">
            後臺管理
          </h2>
          <p className="text-brown text-p-3 font-bodyFont">
            推薦使用電腦版
          </p>
        </div>
      </Link>
      <div className="font-titleFont flex flex-col text-lightbrown items-center">
        {/* function() => () 這個等於有callback
            = function() {return} */}
        {navText.map((elem, index) => (
          <div className="flex items-center mb-5" key={index}>
            {elem.icon}
            <Link href="#" className="ml-2 text-h6 font-semibold ">
              {elem.item}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

};

export default function App() {
  return (
    <Sidebar />
  );
}
