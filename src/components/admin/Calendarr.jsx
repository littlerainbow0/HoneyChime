// eslint-disable-next-line no-unused-vars
import React,{useState, useEffect} from "react";
import axios from 'axios';
import {Card,CardBody}from'@nextui-org/react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';//樣式
import './CalendarStyles.css'; // 自定義樣式

const Calendarr =()=>{
    const [value,setValue]=useState(new Date()); // 當前選中的日期-------------------------------------
    const [highlightDates, setHighlightDates] = useState([]); // 高亮日期-----------------------------
    const [selectedDate, setSelectedDate] = useState(""); // 選中的日期，用於顯示在 Input 框-------------
    // 計算上個月和下個月基於當前選中的日期（動態調整）
    //const previousMonth=new Date(value.getFullYear(),value.getMonth()-1);  // 上個月old
    //const nextMonth=new Date(value.getFullYear(),value.getMonth()+1);      // 下個月old
    const [activeStartDate, setActiveStartDate] = useState(new Date()); // 控制三個日曆的當前月份

    // 從 API Ｇet sql現有的資料 第一步驟＋第二步驟，並解析日期 
    useEffect(() => {
        axios
            .get('http://localhost:8000/getSchedules') // 調用後端的 GET API
            .then(response =>{
                const dates=response.data.map(item =>new Date(item.DepartureDate));//只抓取 DepartureDate 並轉換為 Date 對象
                //console.log(dates)
                setHighlightDates(dates); //高亮化資料庫返回日期
                
            })
            .catch(error => console.error(error));
    }, []);
    
    //第五步驟： 處理日期的函數，將點擊的日期顯示在 Input 框中
    const handleDateClick = (date) => {
            // 使用 toLocaleDateString 將日期格式化為 YYYY/MM/DD
            const formattedDate = date.toLocaleDateString('zh-TW'); // 'zh-TW' 是台灣的日期格式 YYYY/MM/DD
            setSelectedDate(formattedDate); // 更新選中的日期
        };
    
    //第三步驟：自定義顯示樣式 添亮返回日期
    const tileContent =({date,view})=>{
        if(view === 'month' && highlightDates.some(d=> isSameDay(d,date))){
            return <div className="highlight"></div>; //添加高亮樣式
        }
        return null;
    };
    
    //第四步驟：禁用非高亮日期
    const tileDisabled =({date,view}) =>{
        return view ==='month' && !highlightDates.some(d => isSameDay(d,date));
    };

    // 輔助函數，用於比較兩個日期is same? 
    //isSameDay 函數的目的是忽略時間部分，只關注日期部分（年、月、日）。通過比較日期的年份、月份和日期來判斷兩個日期是否是同一天。
    const isSameDay = (date1, date2) => {
        return  date1.getFullYear() === date2.getFullYear() &&
                date1.getMonth() === date2.getMonth() &&
                date1.getDate() === date2.getDate();
        };
    
    // 處理三個日曆的同步切換，當導航按鈕改變月份時更新所有日曆
    const handleDateChange = ({ activeStartDate }) => {
        setActiveStartDate(activeStartDate); // 更新所有日曆的月份
    };

    
    
    return(
        <Card>
            <CardBody>
                <div className="flex flex-wrap space-x-4">
                
                    <Calendar   
                                value={new Date(activeStartDate.getFullYear(), activeStartDate.getMonth() - 1)} // 顯示上個月
                                onActiveStartDateChange={handleDateChange} // 同步月份
                                tileContent={tileContent}
                                tileDisabled={tileDisabled}
                                
                                />
                    
                    <Calendar   onClickDay={handleDateClick} // 點擊某天時觸發事件
                                onChange={setValue}
                                value={value}
                                activeStartDate={activeStartDate} // 中間的日曆顯示當前月份
                                onActiveStartDateChange={handleDateChange} // 同步月份
                                tileContent={tileContent}
                                tileDisabled={tileDisabled}
                    />
                 
                    <Calendar   value={new Date(activeStartDate.getFullYear(), activeStartDate.getMonth() + 1)} // 顯示下個月
                                onActiveStartDateChange={handleDateChange} // 同步月份
                                tileContent={tileContent}
                                tileDisabled={tileDisabled}
                    />
                    
                </div>
                {/* Input框顯示選中的日期 */}
                <div className="mt-4">
                    <label htmlFor="selectedDate" className="font-bold">
                        選擇的日期：
                    </label>
                    <input  type="text"
                            id="selectedDate"
                            value={selectedDate} // 綁定選中的日期
                            readOnly
                            className="w-full p-2 mt-2 border"
                    />
                    
                </div>
            </CardBody>
        </Card>
    );
};

export default Calendarr;
