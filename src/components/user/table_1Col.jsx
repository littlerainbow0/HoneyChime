// src/components/CustomTable.jsx
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Input,
    Button,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Chip,
    User,
    Pagination,
} from "@nextui-org/react";

const CustomTable = ({ data }) => {

    // NextUI: 需要用TableHeader指定列數，很嚴謹不設header做不出來
    return (
        <Table className="container text-left">
            <TableHeader>
                <TableColumn>
                    <h1 className="text-h3 font-titleFont p-10">
                        常見問題
                    </h1>
                    <hr />
                </TableColumn>
            </TableHeader>
            <TableBody>
                {data.map((elem, index) => (
                    <TableRow key={index}>
                        <TableCell className=" hover:scale-105 transition-all">
                            <div className="pl-10 pt-5">
                                <h6 className="text-h6 font-titleFont font-semibold">
                                    {elem.q}
                                </h6>
                                <br />
                                <p className="text-p-2 font-bodyFont pb-5">
                                    {elem.a}
                                </p>
                            </div>
                            <hr />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default CustomTable;
