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
} from "@nextui-org/react";
import { capitalize } from "./utils";
import { div } from "framer-motion/client";

const CustomTable = ({ columns, data }) => {
  return (
    <div className="my-5" style={{width: '100%'}}>
      <Table className="bg-dark text-center" style={{width: '100%'}}>
        <TableHeader className="flex-col">
          {columns.map((column) => (
            <TableColumn key={column}>
              <p className="text-lightbrown font-bodyFont text-p-2 m-1">
                {column}
              </p>
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column}>
                  <p className="text-lightyellow font-bodyFont text-p-3 mx-5 mb-2">
                    {item[column]}
                  </p>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>

  );
};

export default CustomTable;