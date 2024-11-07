import { Link } from "react-router-dom"; // 使用 react-router-dom 的 Link


export default function UserNavbar({userId}) {
    const navbarUserText = [
        { text: "管理帳戶", route: `/user/info/${userId}` },
        { text: "檢視已預訂旅程", route: `/user/order/${userId}` }
    ];
    return (
        <div>
            <nav className="
            bg-darkbrown  hover:shadow-lg
            flex justify-center p-2
            font-titleFont text-p-1 font-bold text-lightyellow
            transition-all w-full
            ">
                <ul className="p- flex space-x-20">
                    {navbarUserText.map((elem, index) => (
                        <li key={"thisIsUserNavbar" + index}
                            className="hover:scale-105 transition-all hover:text-lightbrown">
                            <Link
                                to={elem.route}
                                >
                                {elem.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
