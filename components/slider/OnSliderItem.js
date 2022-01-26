
import PriceWithDiscount from "./PriceWithDiscount";
import SliderImg from "./SliderImg";
import SliderTitle from "./SliderTitle";

function OnSliderItem({ img, title, price, discount }) {
    return (

        <div dir="rtl" className="flex flex-col w-full py-2 px-4 items-center" >
            <SliderImg img={img} />
            <SliderTitle title={title} />
            <PriceWithDiscount price={price} discount={discount} />
        </div>
    )
}

export default OnSliderItem;
