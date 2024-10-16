// src/components/CustomTable.jsx
import React from 'react';
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
  button,
} from "@nextui-org/react";
import { capitalize } from "./utils";
import { div } from "framer-motion/client";

import { BsCaretDown } from "react-icons/bs";
import { BsCaretUpFill } from "react-icons/bs";


const CustomTable = ({ columns, data }) => {
  const [iconType, setIconType] = React.useState(true); // true表示BsCaretDown，false表示BsCaretUpFill

  const iconCollapse = () => {
    return iconType ? <BsCaretDown /> : <BsCaretUpFill />;
  };

  const iconCollapseClick = () => {
    setIconType(prev => !prev); // 切換iconType的狀態
  };
  return (
    <div className="my-5" style={{ width: '100%' }}>
      <Table className="bg-dark text-center" style={{ width: '100%' }}>
        <TableHeader className="flex-col">
          {columns.map((column) => (
            <TableColumn key={column}>
              <p className="text-lightbrown font-bodyFont text-p-2 m-1">
                {column}
              </p>
            </TableColumn>
          ))}
          <TableColumn>
            <p></p>
          </TableColumn>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={item}>
              {columns.map((column, index) => (
                  <TableCell key={column}>
                    <p className="text-lightyellow font-bodyFont text-p-3 mx-5 mb-2">
                      {item[column]}
                    </p>
                  </TableCell>
              ))}
              <TableCell>
                <button key={`${index+item}`} onClick={iconCollapseClick}>
                  {iconCollapse()}
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

};

export default CustomTable;
