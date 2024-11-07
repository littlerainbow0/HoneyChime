import { Button, Link } from "@nextui-org/react";
import { BsFillSendFill } from "react-icons/bs";
import BtnLightbrown from '../../components/user/btn_lightbrown'

export default function RadiusCard({ data, handleOnChange, handleSubmit }) {
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
                            cardElem.disabled ? (
                                <input
                                    id={`${cardElem + cardIndex}`}
                                    type={cardElem.inputType}
                                    name={cardElem.subtitle}
                                    value={cardElem.value}
                                    placeholder={cardElem.placeholderWords}
                                    disabled={cardElem.disabled}
                                    onChange={handleOnChange}
                                    className={`font-bodyFont text-p-3 my-1 text-dark ${cardElem.subtitle === "問題描述" ? "input-large" : ""}`} // 添加条件类名
                                />
                            ) :
                                (
                                    <input
                                        id={`${cardElem + cardIndex}`}
                                        type={cardElem.inputType}
                                        name={cardElem.subtitle}
                                        defaultValue={cardElem.value || ""}
                                        placeholder={cardElem.placeholderWords}
                                        disabled={cardElem.disabled}
                                        onChange={handleOnChange}
                                        className={`font-bodyFont text-p-3 my-1 text-dark ${cardElem.subtitle === "問題描述" ? "input-large" : ""}`} // 添加条件类名
                                    />
                                )
                        ) : cardElem.tag === "radio" ? (
                            cardElem.options.map((option, optionIndex) => (
                                <div key={optionIndex} className="inline-block">
                                    <input
                                        type="radio"
                                        id={option.value}
                                        name={cardElem.subtitle}
                                        value={option.value}
                                        defaultChecked={option.value === cardElem.selectedValue}
                                        disabled={cardElem.disabled}
                                        onChange={handleOnChange}
                                    />
                                    <label htmlFor={option.value} className="font-bodyFont text-p-3 my-1">
                                        {option.label}
                                    </label>
                                    &emsp;
                                </div>
                            ))
                        ) : cardElem.tag === "select" ? (
                            <select
                                name={cardElem.subtitle}
                                id="contactClass"
                                className="font-bodyFont text-p-3 my-1"
                                onChange={handleOnChange}
                            >
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
                <div className="flex justify-center">
                    {data.title !== "註冊會員" && (
                        <BtnLightbrown
                            onClick={handleSubmit}
                            btnText={
                                data.title === "會員登入" ? "登入" :
                                    data.title === "建立個人資訊" ? "加入會員" :
                                        data.title === "修改密碼" || data.title === "基本資料" ? "儲存資料" :
                                            data.title === "郵件聯繫" ? <BsFillSendFill /> : null
                            } />
                    )}
                    {data.title === "會員登入" ? (
                        <Link href="#" className="font-bodyFont text-p-3 underline">
                            註冊會員
                        </Link>
                    )
                        : data.title === "註冊會員" ? (
                            <Link href="#" className="font-bodyFont text-p-3 underline">
                                已有會員？
                            </Link>
                        ) :
                            null
                    }
                </div>
            </div>
        </div >
    )
}