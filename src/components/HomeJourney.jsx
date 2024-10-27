import '../assets/css/style.css'


const HomeJourney =()=>{
    return(
        <div className="container flex flex-col mx-auto mt-40 gap sm:gap-10 md:gap-20 lg:gap-30 xl:gap-44 sm:flex-row">
            <div className="relative w-full sm:w-3/5" style={{paddingTop: "50%"}}>
                <img className="absolute top-0 left-0 object-cover w-full h-full" src="../../src/assets/images/people/people_client02.png"/>
            </div>
            <div className="flex-1 sm:mt-5 md:mt-10 lg:mt-10 xl:mt-40">
                <h1 className="text-[#634A34] mb-6 text-center font-titleFont text-h2 font-bold mt-6 sm:mt-0 sm:mx-5">行程導覽</h1>
                <p className="px-12 mb-6 font-normal text-left font-bodyFont text-p-3 text-indent-1 sm:text-p-1 sm:px-6">
                    甜點列車邀您一同探索美食與美景的饗宴！搭乘列車，享受獨特的甜點料理，
                    同時欣賞沿途壯麗風光，感受視覺與味覺的雙重享受。
                </p>
                <div className="text-center">
                    <button className="py-2 px-4 text-base bg-[#B69C7C] border-none cursor-pointer rounded-md">了解更多</button>
                    <button href="*"></button>
                </div>

            </div>
        </div>
    );
};

export default HomeJourney;