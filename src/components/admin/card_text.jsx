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
        <div>
            {data.map((elem, index) => (
                <Card key={elem.userId} className="my-5 max-w-[340px] mx-1 rounded-lg">
                    <CardHeader className="justify-between bg-darkbrown">
                        <div className="flex gap-5">
                            <div className="flex flex-col gap-1 items-start justify-center  text-p-2 mx-2 text-lightyellow py-2">
                                <h4 className="text-small font-semibold leading-none">
                                    {elem.name}
                                </h4>
                                <span className="text-small tracking-tight text-lightyellow">
                                    {elem.email}
                                </span>
                            </div>
                        </div>
                        <Button
                            className={elem.reply === "Y" ? "font-bodyFont text-xs py-1 text-lightbrown border-2 border-lightbrown" : "text-brown"}
                            color="primary"
                            radius="full"
                            size="sm"
                            variant={elem.reply ? "bordered" : "solid"}
                            onPress={() => {
                                // 在這裡處理 reply 的更新邏輯
                                console.log(`Replying to ${elem.userId}`);
                            }}
                        >
                            {elem.reply === "N" ? "Reply" : "Replied"}
                        </Button>
                    </CardHeader>
                    <CardBody className="px-3 py-0 font-bodyFont text-p-1 bg-lightbrown text-dark">
                        <p>
                            {elem.content}
                        </p>
                        <span className="pt-2">
                            #{elem.type}
                            <span className="py-2" aria-label="computer" role="img">
                                {questionType(elem.type)}
                            </span>
                        </span>
                    </CardBody>
                    <CardFooter className="gap-3 bg-darkbrown flex justify-end">
                        <p className=" text-p-3 text-brown">
                            {elem.time}
                        </p>
                    </CardFooter>
                </Card>
            ))}
        </div>

    );
}
