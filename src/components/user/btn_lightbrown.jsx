import { Button, Link } from "@nextui-org/react";
export default function btn_lightbrown({ btnText, onClick }) {
    return (
        <Button
            radius="full"
            className=" border border-lightbrown
            mr-5 text-p-3 font-bodyFont
            hover:bg-lightyellow hover:text-brown hover:border-brown hover:border-2
            text-lightyellow
            bg-lightbrown
            hover:font-bold
            duration-200 transition-all"
            onClick={onClick}>
            {btnText}
        </Button>
    )
}