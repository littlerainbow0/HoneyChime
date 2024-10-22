import { Link } from "react-router-dom"; // 使用 react-router-dom 的 Link

const navbarUserText = [
    { text: "管理帳戶", route: "/user/info/:userId" }, 
    { text: "檢視已預訂旅程", route: "/user/order/:userId" }
];

export default function UserNavbar({ userId }) {
    return (
        <div>
            <h3 className="font-titleFont text-h3 font-bold m-20">
                Hello! 您好
            </h3>
            <nav className="bg-dark flex justify-center">
                <ul className="p-3 flex space-x-20">
                    {navbarUserText.map((elem, index) => (
                        <li key={index}>
                            <Link 
                                to={elem.route.replace(':userId', String(userId))} // 正確使用 to
                                className="
                                font-titleFont text-p-1 font-bold text-lightyellow
                                hover:text-lightbrown transition-all
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
