import { Link } from "react-router-dom"; // 使用 react-router-dom 的 Link

const navbarUserText = [
    { text: "管理帳戶", route: "/user/info/:userId" }, 
    { text: "檢視已預訂旅程", route: "/user/order/:userId" }
];

export default function UserNavbar() {
    return (
        <div>
            <nav className="bg-dark flex justify-center">
                <ul className="p- flex space-x-20">
                    {navbarUserText.map((elem, index) => (
                        <li key={index}>
                            <Link 
                                to=""
                                className="
                                font-titleFont text-p-1 font-bold text-lightyellow
                                hover:text-lightbrown transition-all w-full
                                ">
                                {elem.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
