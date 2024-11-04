import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import { div } from "framer-motion/m";

export const questionType = function (elem) {

    switch (elem) {
        case "訂單/取消":
            return "🎫";
            break;
        case "付款/退款":
            return "💵";
            break;
        case "車廂/設備":
            return "🚂";
            break;
        case "旅程相關":
            return "🗺️";
            break;
        case "菜單成分或內容":
            return "📄";
            break;

        default:
            return "***";
            break;
    }
};

export default function App({ columns, data }) {

    // 訂單/取消, 付款/退款, 車廂/設備, 旅程相關, 菜單成分或內容

    return (
        <div className="flex flex-wrap">
            {data.map((elem, index) => (
                <Card key={elem.QAID} className={
                    `my-5 max-w-[340px] mx-1 rounded-lg ${elem.Reply === "N" ? "" : "opacity-60"}`
                }>
                    <CardHeader className="justify-between bg-brown">
                        <div className="flex gap-5">
                            <div className="flex flex-col gap-1 items-start justify-center  text-p-2 mx-2 text-lightyellow py-2">
                                <h4 className="text-p-1 font-semibold leading-none font-bodyFont">
                                    {elem.UserName}
                                </h4>
                                <span className="text-p-3 tracking-tight text-lightyellow font-bodyFont">
                                    {elem.UserMail}
                                </span>
                            </div>
                        </div>
                        <Button
                            className={elem.Reply === "Y" ? "font-bodyFont py-1 text-lightbrown border-2 border-lightbrown" : "bg-lightyellow border text-brown"}
                            radius="full"
                            size="sm"
                            variant={elem.Reply ? "bordered" : "solid"}
                            onPress={() => {
                                // 在這裡處理 reply 的更新邏輯
                                console.log(`Replying to ${elem.userId}`);
                            }}
                        >
                            <p className="font-bodyFont text-p-3">
                            {elem.Reply === "N" ? "Reply" : "Replied"}
                            </p>
                        </Button>
                    </CardHeader>
                    <CardBody className="px-3 py-2 font-bodyFont bg-lightyellow">
                        <p className="bg-transparent text-p-1 text-dark" rows={2}>
                            {elem.Content}
                        </p>
                        <span className="pt-2 text-p-2 text-brown">
                            #{elem.Type}
                            <span className="py-2" aria-label="computer" role="img">
                                {questionType(elem.Type)}
                            </span>
                        </span>
                    </CardBody>
                    <CardFooter className="gap-3 bg-darkbrown flex justify-end">
                        <p className=" text-p-3 text-brown font-bodyFont">
                            {elem.Time}
                        </p>
                    </CardFooter>
                </Card>
            ))}
        </div>

    );
}
