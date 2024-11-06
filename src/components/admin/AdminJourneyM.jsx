// eslint-disable-next-line no-unused-vars
import React,{useState,useEffect} from "react";

import Sidebar from "./navbar_admin";
import Calendarr from "./Calendarr";

const AdminJourneyM=()=>{
    
    return(
        <div className="grid grid-cols-4 ">
            <div className="col-span-1">
                <Sidebar />
            </div>
            <div className="col-span-3">
                {/* <div className="container flex flex-col items-center p-4 mx-auto"> */}
                    {/* <h1 className="mb-4 text-2xl font-bold text-center">我的日曆</h1> */}
                    <Calendarr/>
                {/* </div> */}
                <h1>旅程管理</h1>
                {/*  */}
                <div>
                    
                </div>
                {/* */}
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default AdminJourneyM;