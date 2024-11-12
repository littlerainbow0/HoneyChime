import { Button, Link } from "@nextui-org/react";
import { BsFillSendFill } from "react-icons/bs";
import BtnLightbrown from './btn_lightbrown'

export default function RadiusCard({ data }) {
    return (
        <div>
            <div id="title">
                <div id="mainbody">
                    <h3 className="text-h5 font-titleFont font-bold">{data.title}</h3>
                </div>
                {data.items.map((cardElem, cardIndex) => (
                    <div key={cardIndex} className="my-3 text-left">
                        <label htmlFor={`${cardElem + cardIndex}`} className="text-p-2 font-titleFont font-semibold text-darkbrown">
                            {cardElem.subtitle}
                        </label>
                        <br />
                        {cardElem.tag === "input" ? (
                            <input
                                id={`${cardElem + cardIndex}`}
                                type={cardElem.inputType}
                                value={cardElem.value}
                                placeholder={cardElem.placeholderWords}
                                readOnly={cardElem.readOnly}
                                className={`font-bodyFont text-p-3 my-1 text-dark ${cardElem.subtitle === "問題描述" ? "input-large" : ""}`} // 添加条件类名
                                onChange={(e) => cardElem.onChange(e.target.value)} // 使用 onChange

                            />
                        ) : cardElem.tag === "radio" ? (
                            cardElem.options.map((option, optionIndex) => (
                                <div key={optionIndex} className="inline-block">
                                    <input
                                        type="radio"
                                        id={option.value}
                                        name="gender"
                                        value={option.value}
                                        defaultChecked={option.value === cardElem.value}
                                        readOnly={cardElem.readOnly}
                                        onChange={(e) => cardElem.onChange(e.target.value)} // 使用 onChange
                                    />
                                    <label htmlFor={option.value} className="font-bodyFont text-p-3 my-1">
                                        {option.label}
                                    </label>
                                    &emsp;
                                </div>
                            ))
                        ) : cardElem.tag === "select" ? (
                            <select name="" id="contactClass" className="font-bodyFont text-p-3 my-1">
                                {cardElem.options.map((elem, index) => (
                                    <option key={index} value={index}>
                                        {elem}
                                    </option>
                                ))}
                            </select>
                        ) : null}
                        <hr />
                    </div>
                ))}
                <div className="flex justify-center mt-5">
                    {data.title !== "註冊會員" && (
                        data.title === "輸入驗證碼" ? null :
                            <BtnLightbrown btnText={
                                data.title === "會員登入" ? "登入" :
                                    data.title === "重設密碼" ? "確認" :
                                        data.title === "忘記密碼" ? "發送驗證信" :
                                            data.title === "建立個人資訊" ? "加入會員" :
                                                data.title === "修改密碼" || data.title === "基本資料" ? "儲存資料" :
                                                    data.title === "郵件聯繫" ? <BsFillSendFill /> : null
                            }
                                onClick={data.handleSubmit} />
                    )}
                    {data.title === "會員登入" ? (
                        <Link href="/signin" className="font-bodyFont text-p-3 underline">
                            註冊會員
                        </Link>

                    )
                        : data.title === "註冊會員" ? (
                            <Link href="/login" className="font-bodyFont text-p-3 underline">
                                已有會員？
                            </Link>
                        ) :
                            null
                    }
                </div>
                {data.title === "會員登入" ? (
                    <Link href="/validate" className="font-bodyFont text-p-3 underline mt-10 ">
                        忘記密碼？
                    </Link>) : null
                }
                {
                    data.title === "忘記密碼" ? (
                        <Link href="/login" className="font-bodyFont text-p-3 underline mt-20">
                            已有會員？
                        </Link>
                    ) :
                        null
                }
            </div>
        </div >
    )
}