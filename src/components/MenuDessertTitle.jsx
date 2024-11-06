import '../assets/css/style.css'
import '../assets/css/triangle.css'


const MenuDessertTitle =()=>{
    return(
            <div className="container mx-auto mt-10 sm:mt-28 md:mt-40">{/* 容器 */}
                <ul className="grid grid-cols-2 gap-4 sm:gap-20 md:gap-30 xl:gap-72 2xl:gap-96"> {/* 格線 */}
                    <li className="col-span-1 pl-4"> {/* 列 */}
                        <h1 className="font-titleFont text-h2 text-[#634A34] font-bold mb-4 text-center pr-10">甜點饗宴</h1>{/* 標題區塊 */}
                        <div id="triangle"></div>{/* 底部三角形 */}
                    </li>
                    <li className="col-span-1 pr-4">
                        <p className="mt-10 font-normal font-bodyFont text-p-1">
                            甜點列車為旅客精心挑選各式特色甜點，融合歐式、日式、台式等不同文化的精華。
                            我們的甜點不僅在外觀上讓人驚豔，口感也層次豐富，無論是濃郁的巧克力蛋糕，還是清爽的水果塔，
                            每一款甜點都經過嚴選食材與精湛工藝製作，滿足旅客對甜點的嚮往。讓每一次品嚐都成為味蕾的幸福時刻。
                        </p>
                    </li>
                </ul>
            </div>
        
    );
};

export default MenuDessertTitle;
