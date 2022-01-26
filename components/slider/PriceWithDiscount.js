

import Dynamicfun from "../functions/Functions"
import { useEffect, useState } from "react";

function PriceWithDiscount({ price, discount }) {

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


    return (
        <div className="flex flex-col h-11 mt-[14px] mb-[10px]  w-full gap-y-1" >

            {/* top */}

            <div className={`${showDiscount ? "opacity-100" : "opacity-0"} flex  flex-row gap-x-2 items-center justify-end`}>
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
    )
}

export default PriceWithDiscount;
