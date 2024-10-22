import { Button, Link } from "@nextui-org/react";
import BtnLightbrown from '../../components/user/btn_lightbrown'

export default function orderTable({ data }) {
    return (
        <div className="flex flex-col items-center pt-10">
            {data.map((elem, index) => (
                <div key={index} className=
                    {index % 2 === 0 ? "p-5" : "p-5 bg-lightyellow"}>
                    <div id="" className="flex px-5 ">
                        <div>
                            <div className="flex pb-4 font-titleFont text-h6 font-bold justify-between pr-5">
                                <h3>{elem.templateTitle}
                                </h3>
                                <div>
                                    <span>TWD $ </span>
                                    <span>{elem.totalAmount}</span>
                                </div>
                            </div>
                            <div className="items-end flex font-bodyFont text-p-2 text-dark  justify-between">
                                <div>
                                    {elem.routeName}
                                </div>
                                <div className="px-5">
                                    <label htmlFor="userPWD">
                                        {elem.people}人
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="userPWDverify">{elem.date}</label>
                                </div>
                                <div className="px-5">
                                    <span>發車時間</span>
                                    <select name="" id="" className="bg-transparent
                                    hover:bg-lightbrown
                                     hover:text-lightyellow">
                                        <option value="">09:00</option>
                                        <option value="">14:00</option>
                                    </select>
                                </div>
                                <div>
                                    <span>{elem.menuName1}</span>
                                    <select name="" id="" className="bg-transparent">
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                    </select>
                                </div>
                                <div className="px-5">
                                    <span>{elem.menuName2}</span>
                                    <select name="" id="" className="bg-transparent">
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                    </select>
                                </div>
                                <div>
                                    <BtnLightbrown btnText="儲存修改" />
                                    <BtnLightbrown btnText="取消訂單" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    )
}