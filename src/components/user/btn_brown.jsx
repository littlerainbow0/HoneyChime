import { Button, Link } from "@nextui-org/react";
export default function btnBrown({ btnText,onClick }) {
    return (
        <Button
            radius="full"
            className=" border border-brown
            mr-5 text-p-3 font-bodyFont
            bg-brown text-dark
            hover:bg-lightbrown
            hover:underline
            hover:font-bold
            hover:border-dark
            duration-200 transition-all"
            onClick={onClick}>
            {btnText}
        </Button>
    )
}