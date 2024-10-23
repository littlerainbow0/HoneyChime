// eslint-disable-next-line no-unused-vars
import React,{useState} from "react";
import {Card,CardBody}from'@nextui-org/react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';//樣式

const Calendarr =()=>{
    const [value,setValue]=useState(new Date());
    const previousMonth=new Date(value.getFullYear(),value.getMonth()-1);
    const nextMonth=new Date(value.getFullYear(),value.getMonth()+1);

    return(
        <Card>
            <CardBody>
                <div className="flex flex-wrap space-x-4">
                <Calendar value={previousMonth} />
                <Calendar onChange={setValue} value={value} />
                <Calendar value={nextMonth} />
                </div>
            </CardBody>
        </Card>
    );
};
export default Calendarr;
