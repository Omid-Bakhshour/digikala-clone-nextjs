import Slider from "../slider/Slider"
import BannerWithSildeShow from "./BannerWithSildeShow"


function Index() {

    return (
        <div className="w-full max-w-[1366px] mt-[120px] flex flex-col mx-auto  " >

            <div className="w-full mb-4 px-4 pt-4 hidden md:flex " >
                <a className=" cursor-pointer" >
                    <img src="/images/gif1.gif" className="w-full h-full  object-cover rounded-2xl shadow-md" />
                </a>
            </div>

            <BannerWithSildeShow />
            <Slider bgColor="#ef394e" sliderImg="/images/sliderbanner1.png" />


        </div >
    )
}

export default Index
