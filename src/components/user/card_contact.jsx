import { div } from "framer-motion/client";
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-router-dom"; // 引入 Link 元件

const data = [
    {
        title: "車廂及設施",
        text: "總覽蜂鳴號的車廂及設施。"
    },
    {
        title: "供餐及活動",
        text: "總覽蜂鳴號提供的各式甜點、飲品、活動。"
    },
    {
        title: "行程介紹",
        text: "總覽蜂鳴號為旅客規劃各式的甜點行程。"
    },
    {
        title: "常見問題",
        text: "收錄乘客提出的常見問題，也許對您有幫助。",
        path: "/question"
    },
];

export default function BtnContact() {
    return (
        <div className="ml-24">
            {data.map((elem, index) => (
                <div key={index}>
                    <Link to={elem.path} className="block transition-all duration-300 hover:scale-105 text-dark hover:text-lightbrown">
                        <div className="flex items-end pb-1 justify-between">
                            <div className="pl-5 pt-14 text-left">
                                <h3 className="font-titleFont text-p-1 font-bold pb-8">
                                    {elem.title}
                                </h3>
                                <span className="font-titleFont text-p-2 font-semibold">
                                    {elem.text}
                                </span>
                            </div>
                            <BsChevronDoubleRight className="mb-0.5" color="rgb(138,110,110)" />
                        </div>
                        <hr />
                    </Link>
                </div>
            ))}
        </div>
    );
}
