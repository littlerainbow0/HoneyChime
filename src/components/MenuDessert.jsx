import '../assets/css/style.css'
import './menudessert.css'



function startSlideshow(container) {
    let currentIndex=0;
    const images = container.querySelectorAll('.slideshow-image');
    images[currentIndex].classList.add('active');

    container.slideshowInterval = setInterval(() => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length; // 循環切換到下一張圖片
    images[currentIndex].classList.add('active');
  }, 2000); // 每兩秒切換一次
}

function stopSlideshow(container) {
  clearInterval(container.slideshowInterval);
  const images = container.querySelectorAll('.slideshow-image');
  images.forEach((img) => img.classList.remove('active'));

}


const MenuDessert =()=>{
    return(
        <div>
            <div className="container mx-auto mt-20 font-bold text-center text-h2 font-titleFont text-[#634A34]">精選甜點</div>
            <div className="container mx-auto mt-6"> {/* 容器  */}
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "> {/* 格線  */}
                <li className="col-span-1 px-4 mb-6 h-200"> {/* 列  */}
                    <ul className="flex flex-col h-full gap-6 mt-6">  {/* flexbox  */}
                    <li className="h-2/3 image-container" onMouseEnter={(e)=>startSlideshow(e.currentTarget)} onMouseLeave={(e)=>stopSlideshow(e.currentTarget)}>
                        <img className='object-cover w-full h-full' src="../../src/assets/images/dessert/dessert_dessert06.png" alt='日式' />
                        <img className='object-cover w-full h-full slideshow-image' src="../../src/assets/images/dessert/dessert_dessert04.png" alt='日式' />
                        <img className='object-cover w-full h-full slideshow-image' src="../../src/assets/images/dessert/trip_Jp.png" alt='日式' />
                        <img className='object-cover w-full h-full slideshow-image' src="../../src/assets/images/dessert/tripInfo_Jp01.png" alt='日式' />
                        <img className='object-cover w-full h-full slideshow-image' src="../../src/assets/images/dessert/tripInfo_Jp03.png" alt='日式' />
                    </li> 
                    <li className=" h-1/2 image-container" onMouseEnter={(e)=>startSlideshow(e.currentTarget)} onMouseLeave={(e)=>stopSlideshow(e.currentTarget)}>
                        <img className='object-cover w-full h-full ' src="../../src/assets/images/dessert/dessert_dessert07.png" alt='台式' />
                        <img className='object-cover w-full h-full slideshow-image' src="../../src/assets/images/dessert/tripInfo_Tw02.png" alt='台式' />
                        <img className='object-cover w-full h-full slideshow-image' src="../../src/assets/images/dessert/trip_Tw.png" alt='台式' />
                        <img className='object-cover w-full h-full slideshow-image' src="../../src/assets/images/dessert/trip_TwDrink.png" alt='台式' />
                        <img className='object-cover w-full h-full slideshow-image' src="../../src/assets/images/dessert/tripInfo_Tw03.png" alt='台式' />
                    </li>
                    </ul>
                </li>
                <li className="col-span-1 px-4 my-6 h-200 lg:col-span-1"> 
                    <ul className="flex flex-col h-full gap-6 ">
                    <li className="h-full image-container "  onMouseEnter={(e)=>startSlideshow(e.currentTarget)} onMouseLeave={(e)=>stopSlideshow(e.currentTarget)}>
                        <img className='object-cover w-full h-full' src="../../src/assets/images/dessert/dessert_dessert08.png" alt='歐式'/>
                        <img className='object-cover w-full h-full slideshow-image' src="../../src/assets/images/dessert/dessert_newDessert.jpg" alt='歐式'/>
                        <img className='object-cover w-full h-full slideshow-image' src="../../src/assets/images/dessert/trip_Eur.png" alt='歐式'/>
                        <img className='object-cover w-full h-full slideshow-image' src="../../src/assets/images/dessert/trip_EurDrink.png" alt='歐式'/>
                        <img className='object-cover w-full h-full slideshow-image' src="../../src/assets/images/dessert/tripInfo_Eur04.png" alt='歐式'/>
                    </li>
                    </ul>
                </li>
                <li className="flex items-end justify-end col-span-1 px-4 mt-6 h-200 lg:col-span-1 text-end"> 
                    <ul className="flex flex-col h-full gap-6" >
                    <li className="h-1/3 image-container "onMouseEnter={(e)=>startSlideshow(e.currentTarget)} onMouseLeave={(e)=>stopSlideshow(e.currentTarget)}>
                        <img className='object-cover w-full h-full' src="../../src/assets/images/dessert/dessert_dessert09.png" />      
                        <img className='object-cover w-full h-full slideshow-image' src="../../src/assets/images/people/people_staff01-1.png" alt='dessertserver'/>      
                        <img className='object-cover w-full h-full slideshow-image' src="../../src/assets/images/people/people_staff01-2.png" alt='dessertserver'/>      
                        <img className='object-cover w-full h-full slideshow-image' src="../../src/assets/images/people/people_staff01-3.png" alt='dessertserver'/>      
                        <img className='object-cover w-full h-full slideshow-image' src="../../src/assets/images/dessert/dessert_dessert05.png" alt='dessertserver'/>      
                    </li>
                    <li className='w-full px-4 h-2/3'>
                        <p className="font-normal text-p-2 font-bodyFont text-indent-1 lg:text-p-1 lg:mb-4">
                        歐式甜點以細膩的口感與華麗造型聞名，甜點列車帶來多款經典歐式甜點，如法式馬卡龍、義式提拉米蘇及德式黑森林蛋糕等。每道甜點由頂級糕點師傅精心製作，讓旅客感受歐洲甜點的優雅與豐富層次。</p>
                        <p className="font-normal text-p-2 font-bodyFont text-indent-1 lg:text-p-1 lg:mb-4">
                        日式甜點以清新簡約的風味著稱，甜點列車為日式甜點愛好者準備了抹茶蛋糕、大福、和菓子等經典選擇。每款甜點強調自然原味，將四季特色融入其中，帶來如置身日本庭園的愉悅感。</p>
                        <p className="font-normal text-p-2 font-bodyFont text-indent-1 lg:text-p-1 lg:mb-4">
                        台式甜點則展現了台灣特色，如鳳梨酥、豆沙餅和米糕，這些甜點結合了在地食材與傳統工藝。每一口都蘊含著台灣特有的風味，讓旅客在品嚐時感受到台灣的文化底蘊，為旅程增添一份溫暖。</p>
                    </li>

                    </ul>
                </li>
                </ul>
            </div>
        </div>
    );
};

export default MenuDessert;
