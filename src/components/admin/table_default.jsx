import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/react";


import Modal from './modal.jsx';

import { navText } from './navbar_admin.jsx';

import { RiEdit2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { div } from 'framer-motion/m';


const TableDefault = ({ columns, columnNames, data1, detailColumns, detailColumnNames, data2, handleSubmit }) => {


  const location = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [expandedRow, setExpandedRow] = useState(null);  // 調整打開哪一列的detailData

  const clickShowModalToEdit = (item) => {
    const relatedDetailItem = data2.filter(subItem => subItem[data2Id] === item[data2Id]);
    setCurrentItem({ ...item, relatedDetailItem });  // 將 data2 的相關數據合併到 currentItem 中
    // console.log({ ...item, relatedDetailItem });
    
    setShowModal(true);
};


  // 一個路由有兩個Id
  let data1Id, data2Id;
  // navText = [{訂位},{旅程},{訂單},{路線},{餐點},{消息},{會員},{會員信}]
  if (location.pathname === navText[1].path) {
    data1Id = "ScheduleID";
    data2Id = "TemplateID";
  } else if (location.pathname === navText[2].path) {
    data1Id = "OrderID";
    data2Id = "UserID";
  } else if (location.pathname === navText[6].path) {
    data1Id = "UserID";
    data2Id = "UserID";
  }

  console.log("1&2:",data1,data2);
  

  const toggleRow = (data1Value, data2Value) => {
    setExpandedRow(prev => (prev === data1Value ? null : data1Value));
  };

  // */ 頁數
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data1.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(data1.length / rowsPerPage);
  // --- 頁數 /*

  return (
    <>
      <div className="my-5" style={{ width: '100%', maxHeight: '500px', overflow: 'auto' }}>
        <div style={{ overflowY: 'auto', height: '100%' }}>
          <table className="text-center bg-gray-50 rounded-3xl" style={{ width: '100%', tableLayout: 'fixed' }}>
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th key={'colName'+column+index} className='py-2'>
                    <p className="text-lightbrown font-bodyFont text-p-2 m-1">{columnNames[column] || column}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentRows.map((item, index) => (
                <React.Fragment key={'thisRowIs'+item.ScheduleID}>
                  <tr className={`
                    transition-all rounded-3xl
                  hover:bg-gray-200 hover:translate-y-1 ${index % 2 === 0 ? "bg-lightyellow" : ""}`}>
                    {columns.map((column, colIndex) => (
                      <td key={'toMatchEachTableHead'+colIndex} className="">
                        {column.includes('Image')? (
                            <div className=''>
                              <img
                                src={item[column]}
                                className="pt-2 lg:w-12 w-5 lg:h-10 h-5 rounded-md"
                                style={{objectFit: 'cover', display: 'block', margin: 'auto' }}
                              />
                            </div>
                          ) : (
                            <p className="text-dark font-bodyFont text-p-3 max-w-sm line-clamp-2" style={{ margin: 0 }}>
                              {item[column]}
                            </p>
                          )}
                      </td>
                    ))}
                    {(location.pathname === navText[1].path) ? (
                      <td>
                        <Button className='text-brown bolder border-transparent rounded-full transition-all hover:text-lightyellow hover:shadow-md hover:bg-lightbrown' onClick={() => clickShowModalToEdit(item)}>
                          <RiEdit2Fill />
                        </Button>
                      </td>
                    ) : (<td className='hidden' />)}
                    {(location.pathname === navText[1].path
                      || location.pathname === navText[2].path
                      || location.pathname === navText[6].path) ? (
                      <td>
                        <Button className='text-brown bolder border-transparent rounded-full transition-all hover:text-darkbrown hover:shadow-md m-1'
                          onClick={() => toggleRow(item[data1Id], item[data2Id])}>
                          {expandedRow !== item[data1Id] ? <IoIosArrowDown /> : <IoIosArrowUp />}
                        </Button>
                      </td>
                    ) : (<td className='hidden' />)}
                  </tr>
                  {expandedRow === item[data1Id] && (
                    <tr>
                      <td colSpan={columns.length}>
                        <div className={`mb-1 p-1 rounded-b-full bg-gray-200`}>
                          <table className="text-center scale-85" style={{ width: '100%', tableLayout: 'fixed' }}>
                            <thead>
                              <tr>
                                {detailColumns.map((column, index) => (
                                  <th key={'detailColName'+column}>
                                    <p className="text-gray-500 mx-10 py-1 bg-gray-300 rounded-full font-bodyFont text-p-3 m-1">
                                      {detailColumnNames[column] || column}                                     </p>
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {data2
                                .filter(subItem => subItem[data2Id] === item[data2Id]) // 仅显示与当前行的 TemplateID 匹配的数据
                                .map((subItem, subIndex) => (
                                  <tr key={'thisDetailRowIs'+subIndex}>
                                    {detailColumns.map((column) => (
                                      <td key={'data2'+column} className='rounded-full'>
                                        <p className="text-gray-500 font-bodyFont text-p-3 mb-1">{subItem[column]}</p>
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
              <tr>
                <td>
                  <span className='bg-gray-100 text-gray-100'>123</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {showModal && 
      
      <Modal 
      item={currentItem} 
      data2={currentItem.relatedData2} 
      onClose={() => setShowModal(false)}
      handleSubmit={handleSubmit} />       }
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
