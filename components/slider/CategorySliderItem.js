

import PriceWithDiscount from "./PriceWithDiscount";
import SliderImg from "./SliderImg";
import SliderTitle from "./SliderTitle";


function CategorySliderItem({ img, title, price, discount }) {
    return (

        <div className="w-full flex px-2 ">
            <div dir="rtl" className="flex flex-col w-full my-2 py-3 px-4 items-center rounded-lg transform transition-all duration-200 ease-in 
         hover:shadow-[0_0px_10px_0px_rgba(0,0,0,.1)] " >
                {img && (
                    <SliderImg img={img} />

                )

                }
                {title && (
                    <SliderTitle title={title} />

                )

                }
                {price && (
                    <PriceWithDiscount price={price} discount={discount} />

                )

                }
            </div>
        </div>

    )
}

export default CategorySliderItem;
