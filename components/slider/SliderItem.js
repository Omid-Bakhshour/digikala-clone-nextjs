
import StarIcon from "@heroicons/react/outline/SparklesIcon"
import ClockIcon from "@heroicons/react/outline/ClockIcon"

function SliderItem({ title, img, price, discount, time, remained }) {
    return (
        <div className="relative w-full  h-full flex bg-white rounded-lg  z-[1] " >
            <a className=" min-h-[444px]  flex flex-col items-center pt-11 px-4 pb-4 w-full " >
                <div className=" pt-2 w-[180px] h-[180px] flex items-center " >
                    <img src={img} />
                </div>
                <div className="text-right mt-[14px] h-11 min-h[50px] w-full text-[#535353] text-xs max-w-[90%] overflow-hidden">{title}</div>

                <div className="flex flex-row w-full text-right items-center mt-[10px]">
                    <StarIcon className="w-[18px] h-[18px] text-[#a63489] " />
                    <span className="text-[#62666d] text-xs mr-2" >۱,۰۰۰ تومان هدیه نقدی</span>
                </div>


                <div className="flex flex-col h-11 mt-[14px] mb-[10px]  w-full gap-y-1" >

                    {/* top */}

                    <div className="flex flex-row gap-x-2 items-center justify-end">
                        <span className="text-[#acacac] line-through text-base font-normal ">{price}</span>

                        <span className="bg-[#fb3449] font-bold text-white py-1 px-[10px] text-base min-w-[43px] h-6 text-center flex items-center
                        rounded-full" >۲۴٪</span>
                    </div>

                    {/* bottom */}

                    <div className="w-full flex flex-row gap-x-1 justify-end text-[#000] text-lg font-bold items-center" >
                        {price}
                        <span className="text-[#000] text-xs font-normal" >تومان</span>

                    </div>



                </div>

                <div className="w-full mt-5 rounded-full h-1 bg-[#e2e2e2] flex justify-end overflow-hidden" >
                    <div className="bg-[linear-gradient(90deg,#ff5b79,#fb3449)] w-[92%] h-full block " />
                </div>



            </a>

        </div>
    )
}

export default SliderItem
