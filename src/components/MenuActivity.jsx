import '../assets/css/style.css'


const MenuActivity =()=>{
    return(
        <div>
            <div className="container mx-auto mt-10 sm:mt-28 md:mt-40">{/* <容器  */}
            <ul className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:gap-20 md:gap-30 xl:gap-72 2xl:gap-96"> {/* 格線  */}
                <li className="col-span-1 pl-4"> {/* 列 */}
                    <h1 className="font-titleFont text-h2 text-[#634A34] font-bold mt-28 text-center mb-4">活動</h1> {/* 標題區塊  */}
                </li>
                <li className="col-span-1 pr-4">
                    <p className="px-4 font-normal font-bodyFont text-p-1"> {/* 右側段落文字區 */}
                        甜點列車除了帶來豐富的美食體驗外，還為旅客精心安排了多樣化的互動活動，讓旅程更加豐富有趣。
                        從充滿藝術的現場音樂演奏，到悠閒的手作甜點和工藝品的 DIY 課程，每一個活動都讓旅客在旅途中有著更多美好的回憶。
                        此外，特別設計的品酒會與甜點製作體驗，日與夜的美食與風情為旅客提供了享樂的學習與體驗機會。無論您是在享受甜點手作，
                        還是沉浸在藝術與音樂的氛圍中，甜點列車上的每個活動都能讓您的旅程充滿驚喜與樂趣。
                    </p>
                </li>
            </ul>
            </div>
            <section>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -mx-4 -mb-10 text-left">
                        <div className="px-4 mb-10 sm:w-1/2">
                            <div className="overflow-hidden sm:h-48 md:h-64 lg:h-80 xl:h-125">
                                <img alt="content" className="object-cover object-center w-full h-full" src="../../src/assets/images/people/people_activity01.png"/>
                            </div>
                            <h2 className="mt-6 mb-3 font-semibold text-gray-900 text-h5 font-titleFont">現場演奏</h2>
                            <p className="text-base leading-relaxed font-bodyFont text-indent-1 text-p-1">甜點列車邀請了多位才華橫溢的音樂家，為旅客帶來現場音樂演奏。無論是古典音樂還是輕爵士，都能為您的甜點之旅增添一個優雅的氛圍。
                                隨著悠揚的旋律響起，讓音樂與甜點交織，為您帶來一場視覺與聽覺的雙重盛宴。</p>
                        </div>
                        <div className="px-4 mb-10 sm:w-1/2">
                            <div className="overflow-hidden sm:h-48 md:h-64 lg:h-80 xl:h-125">
                                <img alt="content" className="object-cover object-center w-full h-full" src="../../src/assets/images/people/people_activity02.png"/>
                            </div>
                            <h2 className="mt-6 mb-3 font-semibold text-gray-900 font-titleFont text-h5">手作活動</h2>
                            <p className="text-base leading-relaxed font-bodyFont text-indent-1 text-p-1">在甜點列車上，除了美食與美景，我們還為旅客準備了驚喜的桌邊魔術表演。
                                專業的魔術師將在您身邊進行近距離的表演，讓您在品味甜點的同時，也能享受充滿驚奇與歡樂的時刻。這些趣味十足的表演，將為您的旅程增添無限驚喜。
                            </p>
                    </div>
                </div>
                </div>
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap -mx-4 -mb-10 text-left">
                        <div className="px-4 mb-10 sm:w-1/2">
                            <div className="overflow-hidden sm:h-48 md:h-64 lg:h-80 xl:h-125">
                                <img alt="content" className="object-cover object-center w-full h-full" src="../../src/assets/images/people/people_activity04.png"/>
                            </div>
                            <h2 className="mt-6 mb-3 font-semibold text-gray-900 text-h5 font-titleFont">桌邊魔術</h2>
                            <p className="text-base leading-relaxed font-bodyFont text-indent-1 text-p-1">在甜點列車上，除了美食與美景，我們還為旅客準備了驚喜的桌邊魔術表演。
                                專業的魔術師將在您身邊進行近距離的表演，讓您在品味甜點的同時，也能享受充滿驚奇與歡樂的時刻。這些趣味十足的表演，將為您的旅程增添無限驚喜。</p>    
                        </div>
                        <div className="px-4 mb-10 sm:w-1/2">
                            <div className="overflow-hidden sm:h-48 md:h-64 lg:h-80 xl:h-125">
                                <img alt="content" className="object-cover object-center w-full h-full" src="../../src/assets/images/people/people_activity03.png"/>
                            </div>
                            <h2 className="mt-6 mb-3 font-semibold text-gray-900 font-titleFont text-h5">品酒會</h2>
                            <p className="text-base leading-relaxed font-bodyFont text-indent-1 text-p-1">甜點列車的品酒會邀請專業的品酒師為旅客介紹各類精選葡萄酒。從紅酒到氣泡酒，每一杯都經過嚴選，
                                並與甜點做出精妙搭配，讓您的味覺享受達到極致。參與品酒會，您不僅能品嘗到頂級佳釀，還能學習到更多關於葡萄酒的知識。
                            </p>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default MenuActivity;
