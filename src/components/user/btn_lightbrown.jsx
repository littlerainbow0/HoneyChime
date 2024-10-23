import { Button } from "@nextui-org/react";
export default function btn_lightbrown({ btnText, onClick }) {
    return (
        <Button
            radius="full"
            className="mr-5 transition-all duration-200 border border-red text-p-3 font-bodyFont hover:bg-lightbrown hover:text-dark text-brown bg-lightyellow hover:border-darkbrown hover:border hover:font-bold"
            onClick={onClick}>
            {btnText}
        </Button>
    )
}