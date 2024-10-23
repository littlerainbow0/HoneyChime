// src/components/CustomTable.jsx
import React, { useState } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";
import { MdEdit } from "react-icons/md";


const TableDefault = ({ columns, data, columnNames }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7; // 每页显示的行数

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <>
      <div className="my-5" style={{ width: '100%', maxHeight: '500px', overflow: 'auto' }}>
        <div style={{ overflowY: 'auto', height: '100%' }}>
          <Table className="text-center bg-gray-50 rounded-3xl" style={{ width: '100%', tableLayout: 'fixed' }}>
            <TableHeader>
              {columns.map((column) => (
                <TableColumn key={column}>
                  <p className="text-lightbrown font-bodyFont text-p-2 m-1">
                    {columnNames[column] || column}
                  </p>
                </TableColumn>
              ))}
              <TableColumn></TableColumn>
            </TableHeader>
            <TableBody>
              {currentRows.map((item, index) => (
                <TableRow key={index}>

                  {columns.map((column) => (
                    <TableCell key={column} className={`rounded-3xl" ${index % 2 === 0 ? "bg-lightyellow" : ""}`}>
                      <p className="text-dark font-bodyFont text-p-3 mb-1">
                        {item[column]}
                      </p>
                    </TableCell>
                  ))}
                  <TableCell>
                    <Button id={item[Object.keys(item)[0]]} className='text-brown'>
                      <MdEdit />{item[Object.keys(item)[0]]}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="mt-4 border-t pt-2"> {/* 添加分隔线 */}
        <div className="flex justify-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`font-bodyFont text-p-3 mx-1 rounded-full transition-all 
                hover:text-lightbrown hover:shadow-md hover:font-bold
                ${currentPage === index + 1 ? 'bg-lightbrown rounded-full text-lightyellow shadow-md' : ''}`}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default TableDefault;
