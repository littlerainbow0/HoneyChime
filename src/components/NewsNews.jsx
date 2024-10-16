import '../assets/css/style.css'

const NewsNews =()=>{
    return(
        <div>
                <div className="container flex p-5 mx-auto mt-6 border">
                {/* 左側標題與全部資訊  */}
                <div className="w-1/4 pr-5">
                    <h1 className="text-h2 font-bold font-titleFont mb-5 text-[#634A34]">最新消息</h1>
                    <a className="hidden pt-5 font-medium text-gray-600 no-underline pl-14 text-h4 font-bodyFont sm:block">全部資訊 &#9651;</a>
                </div>
                {/* 右側消息區塊  */}
        <div className="flex-1 border border-dashed border-[#4a3f35] p-5 overflow-y-auto max-h-[500px] mt-20">
                {/* 右側內容  */}
            <div className="mb-5">
                <p className="text-p-1 leading-relaxed text-[#4a3f35] font-bodyFont">2024.09.17. &#x2022; icon 員工部落格<br/>員工部落格已更新</p>
            </div>
            <div className="mb-5">
                <p className="text-p-1 leading-relaxed text-[#4a3f35] font-bodyFont">2024.08.29. &#x2022; icon 營運資訊 旅遊諮詢台信息<br/>關於因10號颱風逼近「九州七星」營運計畫後續及旅遊諮詢台暫時關閉的通知</p>
            </div>
            <div className="mb-5">
                <p className="text-p-1 leading-relaxed text-[#4a3f35] font-bodyFont">2024.08.17. &#x2022; icon 員工部落格<br/>員工部落格已更新</p>
            </div>
            <div className="mb-5">
                <p className="text-p-1 leading-relaxed text-[#4a3f35] font-bodyFont">2024.09.17. &#x2022; icon 員工部落格<br/>員工部落格已更新</p>
            </div>
            <div className="mb-5">
                <p className="text-p-1 leading-relaxed text-[#4a3f35] font-bodyFont">2024.08.29. &#x2022; icon 營運資訊 旅遊諮詢台信息<br/>關於因10號颱風逼近「九州七星」營運計畫（後續）及旅遊諮詢台暫時關閉的通知</p>
            </div>
            <div className="mb-5">
                <p className="text-p-1 leading-relaxed text-[#4a3f35] font-bodyFont">2024.08.17. &#x2022; icon 員工部落格<br/>員工部落格已更新</p>
            </div>
            <div className="mb-5">
                <p className="text-p-1 leading-relaxed text-[#4a3f35] font-bodyFont">2024.09.17. &#x2022; icon 員工部落格<br/>員工部落格已更新</p>
            </div>
            <div className="mb-5">
                <p className="text-p-1 leading-relaxed text-[#4a3f35] font-bodyFont">2024.08.29. &#x2022; icon 營運資訊 旅遊諮詢台信息<br/>關於因10號颱風逼近「九州七星」營運計畫（後續）及旅遊諮詢台暫時關閉的通知</p>
            </div>
            <div className="mb-5">
                <p className="text-p-1 leading-relaxed text-[#4a3f35] font-bodyFont">2024.08.17. &#x2022; icon 員工部落格<br/>員工部落格已更新</p>
            </div>
            <div className="mb-5">
                <p className="text-p-1 leading-relaxed text-[#4a3f35] font-bodyFont">2024.09.17. &#x2022; icon 員工部落格<br/>員工部落格已更新</p>
            </div>
            <div className="mb-5">
                <p className="text-p-1 leading-relaxed text-[#4a3f35] font-bodyFont">2024.08.29. &#x2022; icon 營運資訊 旅遊諮詢台信息<br/>關於因10號颱風逼近「九州七星」營運計畫（後續）及旅遊諮詢台暫時關閉的通知</p>
            </div>
            <div className="mb-5">
                <p className="text-p-1 leading-relaxed text-[#4a3f35] font-bodyFont">2024.08.17. &#x2022; icon 員工部落格<br/>員工部落格已更新</p>
            </div>
             {/* 滾動提示  */}
             {/* <p className="scroll-hint absolute bottom-2 right-5 text-[14px] text-[#4a3f35] italic">滾動查看更多資訊</p>  */}
        </div>
    </div>
    <span className="mt-5">
        <img src="../../src/assets/img/icon/icon_polygonLine.png" alt="navbar"/>
    </span>
        </div>
    )

}
export default NewsNews;