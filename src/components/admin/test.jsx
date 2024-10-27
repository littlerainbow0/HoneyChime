import React, { useState } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Accordion,
  AccordionItem,
  Button,
} from '@nextui-org/react';

const TableWithAccordion = ({ columns, data }) => {
  return (
    <Table aria-label="Example table" css={{ height: "auto", minWidth: "100%" }}>
      <TableHeader>
        {columns.map((column) => (
          <TableColumn key={column}>{column}</TableColumn>
        ))}
        <TableColumn>Details</TableColumn>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            {columns.map((column) => (
              <TableCell key={column}>{item[column]}</TableCell>
            ))}
            <TableCell>
              <Accordion>
                <AccordionItem title="Details">
                  {/* 在这里填充你要显示的详细数据 */}
                  <Table aria-label="Nested table" css={{ height: "auto", minWidth: "100%" }}>
                    <TableHeader>
                      <TableColumn>Detail Column 1</TableColumn>
                      <TableColumn>Detail Column 2</TableColumn>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>{item.detail1}</TableCell>
                        <TableCell>{item.detail2}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </AccordionItem>
              </Accordion>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

// 示例数据
const columns = ['Name', 'Age', 'Country'];
const data = [
  { Name: 'Alice', Age: 25, Country: 'USA', detail1: 'Detail A1', detail2: 'Detail A2' },
  { Name: 'Bob', Age: 30, Country: 'UK', detail1: 'Detail B1', detail2: 'Detail B2' },
  // 其他数据...
];

const App = () => {
  return <TableWithAccordion columns={columns} data={data} />;
};

export default App;
