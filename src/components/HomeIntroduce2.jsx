import '../assets/css/style.css'

const HomeIntroduce2=()=>{
        
        return(
            <div className="mx-auto mt-40 mb-10 containerF sm:containerF"> 
            <h1 className="text-[#634A34] mb-6 text-center font-titleFont text-h2 font-bold">設施介紹</h1>
        
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0.5">
                {/* 商店  */}
                <div className="relative max-w-[720px] max-h-[900px] overflow-hidden cursor-pointer drink-item group" >
                    <img className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:brightness-50" 
                    src="../../src/assets/images/train_interior/train_interior_shop02.png" alt="shop"/>
                         {/* 小標題 (咖啡)  */}
                        <p className="font-titleFont absolute px-3 py-1 text-h6 text-white transition-opacity duration-300 ease-in-out transform -translate-x-1/2 bg-[#634A34]  bg-opacity-50 rounded opacity-0 top-4 left-1/2 group-hover:opacity-100 font-semibold">
                            紀念品店</p>
                         {/* 詳細描述  */}
                        <p className="w-4/5 h-4/6 absolute px-1 py-1 text-white transition-opacity duration-300 ease-in-out transform -translate-x-1/2 bg-[#634A34] bg-opacity-50 rounded opacity-0 label bottom-2.5 left-1/2 group-hover:opacity-100 font-bodyFont text-p-3 overflow-y-auto  text-indent-1">
                            紀念品店是甜點列車旅程中的必訪之處，為您提供豐富且獨具特色的商品，讓每位乘客都能帶走一份屬於這段美好旅程的回憶。店內擺滿了各式各樣的紀念品，從精美的台灣特色甜點模型，到充滿創意的車廂擺件，應有盡有。無論是為自己留作紀念，還是為家人朋友挑選伴手禮，這裡都能滿足您的需求。每件商品都蘊含了台灣的文化特色，將這段甜美旅程永存心中。
                        </p>     
                </div>
        
                 {/* 走道  */}
                <div className="relative max-w-[720px] max-h-[900px] overflow-hidden cursor-pointer drink-item group" >
                    <img className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:brightness-75" 
                    src="../../src/assets/images/train_interior/train_interior_sidewalk.png" alt="sidewalk"/>
                         {/* 小標題  */}
                        <p className="font-titleFont absolute px-3 py-1 text-h6 text-white transition-opacity duration-300 ease-in-out transform -translate-x-1/2 bg-[#634A34]  bg-opacity-50 rounded opacity-0 top-4 left-1/2 group-hover:opacity-100 font-semibold">
                            走道</p>
                         {/* 詳細描述  */}
                        <p className="w-4/5 h-4/6 absolute px-1 py-1 text-white transition-opacity duration-300 ease-in-out transform -translate-x-1/2 bg-[#634A34] bg-opacity-50 rounded opacity-0 label bottom-2.5 left-1/2 group-hover:opacity-100 font-bodyFont text-p-3 overflow-y-auto text-indent-1">
                            酒吧是甜點列車上最具氛圍的場所，專為喜愛品味美酒與甜點搭配的乘客設計。在這裡，您可以選擇各式經典與創新調酒，搭配特製的甜點，為您的味蕾帶來無限的驚喜。酒吧區的設計散發著優雅與溫暖的氛圍，配以柔和的燈光與舒適的座椅，讓您在悠閒的氛圍中享受一杯好酒，與同行的旅伴一同分享這段難忘的時光。無論是白天還是夜晚，酒吧總是洋溢著輕鬆愉悅的氣氛，是旅程中的完美休息站。
                        </p>     
                </div>
    
        
                 {/* 酒吧 */}
                <div className="relative max-w-[720px] max-h-[900px] overflow-hidden cursor-pointer drink-item group" >
                    <img className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:brightness-50" 
                    src="../../src/assets/images/train_interior/train_interior_bar.png" alt="bar"/>
                         {/* 小標題  */}
                        <p className="font-titleFont absolute px-3 py-1 text-h6 text-white transition-opacity duration-300 ease-in-out transform -translate-x-1/2 bg-[#634A34]  bg-opacity-50 rounded opacity-0 top-4 left-1/2 group-hover:opacity-100 font-semibold">
                            酒吧</p>
                         {/* 詳細描述  */}
                        <p className="w-4/5 h-4/6 absolute px-1 py-1 text-white transition-opacity duration-300 ease-in-out transform -translate-x-1/2 bg-[#634A34] bg-opacity-50 rounded opacity-0 label bottom-2.5 left-1/2 group-hover:opacity-100 font-bodyFont text-p-3 overflow-y-auto text-indent-1">
                            酒吧是甜點列車上最具氛圍的場所，專為喜愛品味美酒與甜點搭配的乘客設計。在這裡，您可以選擇各式經典與創新調酒，搭配特製的甜點，為您的味蕾帶來無限的驚喜。酒吧區的設計散發著優雅與溫暖的氛圍，配以柔和的燈光與舒適的座椅，讓您在悠閒的氛圍中享受一杯好酒，與同行的旅伴一同分享這段難忘的時光。無論是白天還是夜晚，酒吧總是洋溢著輕鬆愉悅的氣氛，是旅程中的完美休息站。
                        </p>     
                </div>
    
            </div>
        </div>
                
            );
    };

export default HomeIntroduce2