
import StarIcon from "@heroicons/react/outline/SparklesIcon"
import ClockIcon from "@heroicons/react/outline/ClockIcon"

import Dynamicfun from "../functions/Functions"
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

function SliderItem({ title, img, price, discount, time, remained }) {



    const [showDiscount, setShowDiscount] = useState(false);
    const [finalPrice, setPrice] = useState(null);





    useEffect(() => {
        if (discount > 0) {
            let DiscountPrice = (discount * price) / 100;
            setPrice(price - DiscountPrice);
            setShowDiscount(true)
        } else {
            setPrice(price);
            setShowDiscount(false)
        }

    }, [discount, price]);


    const [hasRemained, setHasRemained] = useState(false);

    useEffect(() => {
        if (remained > 0) {
            setHasRemained(true)
            console.log("bigger")
        } else {
            setHasRemained(false)
            console.log("false")

        }

    }, [remained]);

    const [timeLeft, setTimeLeft] = useState(null);



    const calculateTimeLeft = () => {
        const endDate = (new Date(time));
        const startDate = (new Date());

        let difference = endDate - startDate;
        let timeLeft = {};

        if (difference > 0) {
            setTimeLeft(`${parseInt(Math.abs(difference) / (1000 * 60 * 60)).toString().padStart(2, "0")}:${parseInt(Math.abs(difference) / (1000 * 60) % 60).toString().padStart(2, "0")}:${parseInt(Math.abs((difference)) / (1000) % 60).toString().padStart(2, "0")}`);


        } else {
            setTimeLeft(null)
        }
    }



    function refreshClock() {
        calculateTimeLeft()

    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, [timeLeft, time]);




    return (
        <div className="relative w-full  h-full flex bg-white rounded-lg  z-[1] cursor-pointer group " >
            <a className=" min-h-[444px]  flex flex-col items-center pt-11 px-4 pb-4 w-full " >
                <div className=" pt-2 w-[180px] h-[180px] flex items-center " >
                    <img className="group-hover:scale-110 transition transform duration-500 ease-in-out" src={img} />
                </div>
                <div className="text-right mt-[14px] h-11 min-h[50px] w-full text-[#535353] text-xs max-w-[90%] overflow-hidden">{title}</div>

                <div className="flex flex-row w-full text-right items-center mt-[10px]">
                    <StarIcon className="w-[18px] h-[18px] text-[#a63489] " />
                    <span className="text-[#62666d] text-xs mr-2" >۱,۰۰۰ تومان هدیه نقدی</span>
                </div>


                <div className="flex flex-col h-11 mt-[14px] mb-[10px]  w-full gap-y-1" >

                    {/* top */}

                    <div className={`${setShowDiscount ? "opacity-100" : "opacity-0"} flex  flex-row gap-x-2 items-center justify-end`}>
                        <span className="text-[#acacac] line-through text-base font-normal ">{Dynamicfun.FinalNumber(price)}</span>

                        <span className="bg-[#fb3449] font-bold text-white py-1 px-[10px] text-base min-w-[43px] h-6 text-center flex items-center
                        rounded-full" >{Dynamicfun.convertToPersianNumber(discount)}٪</span>
                    </div>

                    {/* bottom */}

                    <div className="w-full flex flex-row gap-x-1 justify-end text-[#000] text-lg font-bold items-center" >
                        {Dynamicfun.FinalNumber(finalPrice)}
                        <span className="text-[#000] text-xs font-normal" >تومان</span>

                    </div>



                </div>

                <div className={`  ${hasRemained ? "opacity-100" : "opacity-0"} w-full mt-5 rounded-full h-1 bg-[#e2e2e2] flex justify-end overflow-hidden`} >
                    <div style={{ width: `${remained}%` }} className="bg-[linear-gradient(90deg,#ff5b79,#fb3449)]  h-full block " />
                </div>


                <div className="flex mt-3 w-full justify-between items-center" >

                    {/* remained */}
                    <div className={` ${hasRemained ? "opacity-100" : "opacity-0"} flex gap-x-1 items-center`} >
                        <span className="flex gap-x-[2px]] text-[#fb3449] text-sm items-center font-normal">
                            {remained ? Dynamicfun.convertToPersianNumber(remained) : ""}
                            %
                        </span>
                        <span className="text-[#737373] font-normal text-xs" >فروش رفته</span>

                    </div>

                    {/* timer */}



                    <div className={` ${timeLeft ? "opacity-100" : "opacity-0"} flex gap-x-1 items-center`}>
                        <span className="text-sm text-[#737373]" >{(timeLeft ? Dynamicfun.convertToPersianNumber(timeLeft) : "")}</span>
                        <ClockIcon className="w-4 h-4 text-[#737373]" />
                    </div>

                </div>



            </a>

        </div>
    )
}

export default SliderItem
