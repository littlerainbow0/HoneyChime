// src/components/CustomTable.jsx
import React, { useState } from 'react';
import { useLocation } from "react-router-dom"
import { navText } from './navbar_admin';
import ModalSchedule from './modal_schedule.jsx';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Accordion,
} from "@nextui-org/react";

import { RiEdit2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const TableDefault = ({ columns, data, columnNames }) => {

  const location = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null); // 新增一個狀態來追踪當前行

  const clickShowModalToEdit = (item) => {
    console.log('Item to edit:', item);
    setCurrentItem(item); // 設定當前編輯的項目
    setShowModal(true);
  };


  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;
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
              {(location.pathname === navText[1].path
                    || location.pathname === navText[3].path
                    || location.pathname === navText[4].path) ? (
              <TableColumn />):(<TableColumn className='hidden' />)}
              {(location.pathname === navText[1].path
                    || location.pathname === navText[2].path
                    || location.pathname === navText[7].path) ? (
              <TableColumn />):(<TableColumn className='hidden' />)}
            </TableHeader>
            <TableBody>
              {currentRows.map((item, index) => (
                <TableRow key={index} className={`
                  transition-all rounded-3xl
                  hover:bg-gray-200 hover:translate-y-1
                  "
                ${index % 2 === 0 ? "bg-lightyellow" : ""}`}>

                  {columns.map((column) => (
                    <TableCell key={column} >
                      <p className="text-dark font-bodyFont text-p-3 mb-1">
                        {item[column]}
                      </p>
                    </TableCell>
                  ))}
                  {(location.pathname === navText[1].path
                    || location.pathname === navText[3].path
                    || location.pathname === navText[4].path) ? (
                    <TableCell>
                      <Button id={item[Object.keys(item)[0]]} className='text-brown bolder border-transparent rounded-full transition-all hover:text-lightyellow hover:shadow-md hover:bg-lightbrown'
                        onClick={() => clickShowModalToEdit(item)}>
                        <RiEdit2Fill />
                      </Button>
                    </TableCell>
                  ) : (<TableCell className='hidden' />)}
                  {(location.pathname === navText[1].path
                    || location.pathname === navText[2].path
                    || location.pathname === navText[7].path) ? (
                    <TableCell>
                      <Button id={item[Object.keys(item)[0]]} className='
                      text-brown bolder border-transparent rounded-full transition-all 
                      hover:text-lightbrown hover:shadow-md'
                        onClick={() => clickShowModalToEdit(item)}>
                        <IoIosArrowDown />
                      </Button>
                    </TableCell>
                  ) : (<TableCell className='hidden' />)}
                </TableRow>               
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      {showModal && <ModalSchedule item={currentItem} onClose={() => setShowModal(false)} />}
      <div className="flex justify-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`font-bodyFont text-p-3 mx-1 rounded-full transition-all 
                hover:text-lightbrown hover:shadow-md hover:font-bold hover:translate-y-1
                ${currentPage === index + 1 ? 'bg-lightbrown rounded-full text-lightyellow shadow-md' : ''}`}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </>
  );
};

export default TableDefault;
