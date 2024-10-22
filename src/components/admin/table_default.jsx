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

const TableDefault = ({ columns, data, columnNames }) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7; // 每頁顯示的行數

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(data.length / rowsPerPage); // 取正整數

  return (
    <div className="my-5" style={{ width: '100%' }}>
      <Table className="bg-dark text-center" style={{ width: '100%' }}>
        <TableHeader className="flex-col">
          {columns.map((column) => (
            <TableColumn key={column}>
              <p className="text-lightbrown font-bodyFont text-p-2 m-1">
              {columnNames[column] || column}
              </p>
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {currentRows.map((item, index) => (
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
      <div className="flex justify-center mt-4">
        {/* Array.from(refArray, function) 當function為箭頭func 就等同進行map
        設定新陣列 : 長度="總頁數"，
        _表當前元素的別名目前沒用到，index，index從0開始所以+1 */}
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 ${currentPage === index + 1 ? 'bg-lightbrown' : ''}`}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>

  );
};

export default TableDefault;
