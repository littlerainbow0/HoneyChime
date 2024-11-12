import { Card, CardHeader, CardBody, CardFooter, Image, Button, button } from "@nextui-org/react";

export default function App({ data, onFilterSelect }) {
    const handleFilterSelect = (selectedFilter) => {
        onFilterSelect(prevFilter => {
            // 如果當前選擇的篩選條件已經在篩選條件中，則移除它
            if (prevFilter === selectedFilter) {
                return "";  // 重置篩選條件
            } else {
                // 否則，選擇此篩選條件
                return selectedFilter;
            }
        });
    };
    
    return (
        <div className="lg:my-5 my-2 flex flex-wrap justify-center md:gap-10 gap-5">
            {data.map((elem, index) => (
                <button
                    key={index}
                    className="flex-1 hover:opacity-80 transition-all
                    lg:text-h5 text-h6 text-lightyellow hover:text-dark hover:scale-105" // 使用 flex-grow 使按鈕能自動調整大小
                    style={{ minWidth: '150px' }}
                    onClick={() => handleFilterSelect(elem.filter)}
                >
                    <Card
                        className="flex-auto h-[60px] font-bold rounded-full
                        lg:h-[120px] pt-2 lg:pt-1"
                        style={{
                            backgroundImage: `url(${elem.imgSrc})`,
                            boxShadow: '0 0 8px #B1B1B1'
                        }}
                    >
                        <CardBody className="flex-col justify-center items-center">
                            <h4
                                className="font-titleFont px-2 lg:p-4"
                                style={{
                                    borderRadius: '3rem',
                                    backdropFilter: 'blur(16px)',
                                }}
                            >
                                {elem.type}
                            </h4>
                        </CardBody>
                    </Card>
                </button>
            ))}
        </div>

    );
}