import '../assets/css/style.css'


const MenuDrink =()=>{
    return(
        <div>
            <div className="container mx-auto mt-6">
                <h1 className="text-[#634A34] mb-6 text-center font-titleFont text-h2 font-bold">特調飲品</h1>
            
                <div className="container grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 xl:grid-cols-4">
                     {/* 咖啡  */}
                    <div className="relative max-w-[400px] max-h-[530px] overflow-hidden cursor-pointer drink-item group col-span-1">
                        <img className="object-cover w-full h-full
                        transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:blur-[3px]" 
                        src="../../src/assets/images/dessert/dessert_coffee01.jpg" alt="咖啡"/>
                            {/* 小標題 (咖啡)  */}
                            <p className="font-titleFont absolute px-3 py-1 text-h6 text-white transition-opacity duration-300 ease-in-out transform -translate-x-1/2 bg-[#634A34]  bg-opacity-50 rounded opacity-0 top-4 left-1/2 group-hover:opacity-100 font-semibold">
                                咖啡</p>
                            {/* 詳細描述  */}
                            <p className="w-4/5 h-4/6 absolute px-1 py-1 text-white transition-opacity duration-300 ease-in-out transform -translate-x-1/2 bg-[#634A34] bg-opacity-50 rounded opacity-0  bottom-2.5 left-1/2 group-hover:opacity-100 font-bodyFont text-p-3 overflow-y-auto  text-indent-1">
                                甜點列車的咖啡專區帶來來自世界各地的精品咖啡豆，每一杯咖啡都經過精心挑選與手工沖煮，讓旅客感受到咖啡的獨特風味。無論是經典的義式濃縮咖啡、絲滑的拿鐵，還是香濃的卡布奇諾，都能滿足咖啡愛好者對咖啡品質的期待。
                            </p>     
                    </div>
            
                     {/* 茶  */}
                    <div className="relative max-w-[400px] max-h-[530px] overflow-hidden cursor-pointer drink-item group col-span-1">
                        <img className="object-cover w-full h-full
                        transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:blur-[3px]" 
                        src="../../src/assets/images/dessert/dessert_tea.png" alt="tea"/>
                             {/* 小標題  */}
                            <p className="font-titleFont absolute px-3 py-1 text-h6 text-white transition-opacity duration-300 ease-in-out transform -translate-x-1/2 bg-[#634A34]  bg-opacity-50 rounded opacity-0 top-4 left-1/2 group-hover:opacity-100 font-semibold">
                                茗茶</p>
                             {/* 詳細描述  */}
                            <p className="w-4/5 h-4/6 absolute px-1 py-1 text-white transition-opacity duration-300 ease-in-out transform -translate-x-1/2 bg-[#634A34] bg-opacity-50 rounded opacity-0  bottom-2.5 left-1/2 group-hover:opacity-100 font-bodyFont text-p-3 overflow-y-auto text-indent-1">
                                從東方到西方，甜點列車精選了多款高品質的茶葉，讓每一口都充滿天然的香氣。無論是來自台灣的高山茶、日本的抹茶，還是英式紅茶，每一杯茶都經過細心沖泡，帶來平靜舒緩的品茗時刻，讓旅客在旅程中找到片刻的悠閒。
                            </p>     
                    </div>

            
                     {/* 果汁  */}
                    <div className="relative max-w-[400px] max-h-[530px] overflow-hidden cursor-pointer drink-item group col-span-1">
                        <img className="object-cover w-full h-full
                        transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:blur-[3px]" 
                        src="../../src/assets/images/dessert/dessert_juice.jpg" alt="juice"/>
                             {/* 小標題  */}
                            <p className="font-titleFont absolute px-3 py-1 text-h6 text-white transition-opacity duration-300 ease-in-out transform -translate-x-1/2 bg-[#634A34]  bg-opacity-50 rounded opacity-0 top-4 left-1/2 group-hover:opacity-100 font-semibold">
                                果汁</p>
                             {/* 詳細描述  */}
                            <p className="w-4/5 h-4/6 absolute px-1 py-1 text-white transition-opacity duration-300 ease-in-out transform -translate-x-1/2 bg-[#634A34] bg-opacity-50 rounded opacity-0 bottom-2.5 left-1/2 group-hover:opacity-100 font-bodyFont text-p-3 overflow-y-auto text-indent-1">
                                甜點列車精心挑選當季新鮮水果，製作各式果汁，讓旅客感受到大自然的甜美與清爽。每杯果汁都是純天然無添加的健康飲品，無論是鮮榨橙汁、混合果汁，還是熱帶水果特調，都能為旅客帶來一抹清新，補充活力。
                            </p>     
                    </div>
            
                     {/* 雞尾酒  */}
                    <div className="relative max-w-[400px] max-h-[530px] overflow-hidden cursor-pointer drink-item group col-span-1">
                        <img className="object-cover w-full h-full
                        transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:blur-[3px]" 
                        src="../../src/assets/images/dessert/dessert_cocktail.png" alt="cocktail"/>
                             {/* 小標題  */}
                            <p className="font-titleFont absolute px-3 py-1 text-h6 text-white transition-opacity duration-300 ease-in-out transform -translate-x-1/2 bg-[#634A34]  bg-opacity-50 rounded opacity-0 top-4 left-1/2 group-hover:opacity-100 font-semibold">
                                調酒</p>
                            {/* 詳細描述  */}
                            <p className="w-4/5 h-4/6 absolute px-1 py-1 text-white transition-opacity duration-300 ease-in-out transform -translate-x-1/2 bg-[#634A34] bg-opacity-50 rounded opacity-0  bottom-2.5 left-1/2 group-hover:opacity-100 font-bodyFont text-p-3 overflow-y-auto text-indent-1">
                                夜晚降臨時，甜點列車的酒吧區開啟了奢華的雞尾酒時刻。專業調酒師以創意混合各種烈酒與新鮮水果，打造出多款獨特的雞尾酒。從經典的馬天尼到清爽的莫希托，每一杯雞尾酒都散發著迷人的氣息，為旅程增添一份神秘與愉悅。
                            </p>     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuDrink;