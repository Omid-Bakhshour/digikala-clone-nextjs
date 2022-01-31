import CategorySlider from "../slider/CategorySlider"
import OneSlider from "../slider/OneSlider"
import Slider from "../slider/Slider"
import Banner2 from "./Banner2"
import BannerFour from "./BannerFour"
import BannerWithSildeShow from "./BannerWithSildeShow"
import { slider1 } from "../../data/sliders/data1"


function Index() {

    return (
        <div dir="rtl" className="w-full max-w-[1366px] mt-[120px] flex flex-col mx-auto  " >

            <div className="w-full mb-4 px-4 pt-4 hidden md:flex " >
                <a className=" cursor-pointer" >
                    <img src="/images/gif1.gif" className="w-full h-full  object-cover rounded-2xl shadow-md" />
                </a>
            </div>

            <BannerWithSildeShow />
            <Slider bgColor="#ef394e" sliderImg="/images/sliderbanner1.png" />
            <BannerFour img1={"/images/banner21.jpg"} img2={"/images/banner22.jpg"} img3={"/images/banner23.jpg"} img4={"/images/banner24.jpg"} />
            <Slider bgColor="#6bb927" sliderImg="/images/bannerslider3.png" />
            <Banner2 img1={"/images/banner31.jpg"} img2={"/images/banner32.jpg"} />

            <div className="w-full flex flex-row  px-4 my-4" >
                <CategorySlider title={"پاوربانک (شارژر همراه)"} data={slider1} />
                <div className="w-[20%] xl:w-[17%]  hidden lg:flex  self-stretch" >
                    <OneSlider />
                </div>


            </div>


        </div >
    )
}

export default Index
