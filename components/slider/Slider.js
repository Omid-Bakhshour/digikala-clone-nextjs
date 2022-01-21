
import ArrowLeft from "@heroicons/react/outline/ChevronLeftIcon"
import SliderItem from "./SliderItem";
import ArrowRight from "@heroicons/react/outline/ChevronRightIcon"

import { useState, useRef, useEffect } from "react"

function Slider({ bgColor, sliderImg }) {


    // count scroll next
    const [countNavigation, setCountNavigation] = useState(0);
    const [translateX, setTranslateX] = useState(0);

    // allow number to scroll next
    const [countSlider, setCountSlider] = useState(0);
    const ElementRef = useRef(null)


    const styles = {
        transform: `translate3d(${translateX}px, 0,0)`
    };

    useEffect(() => {
        const Elementcount = ElementRef.current.childNodes.length;
        setCountSlider((Elementcount / 4) - 1);

    }, [])


    useEffect(() => {
        const setNavigation = () => {

            var sliderIndex = countNavigation;

            if (sliderIndex > countSlider) {
                sliderIndex = 0
                setCountNavigation(0)
            }

            if (sliderIndex < 0) {
                sliderIndex = countSlider
                setCountNavigation(countSlider)

            }


            setTranslateX(countNavigation * 4 * 267)
        }
        setNavigation()
    }, [countNavigation])


    return (
        <div style={{ backgroundColor: bgColor }} className="my-4 max-w-[1366px] 2xl:mx-4 " >

            <section className="py-9 px-4 flex flex-row-reverse items-center justify-center   " >

                <a className=" flex-col my-0 mx-11 w-[170px] cursor-pointer group hidden sm:flex"  >
                    <img src={sliderImg} className="w-full h-[calc(100%-41px)]" />

                    <div className="flex flex-row items-center justify-center gap-x-2 text-white py-2 px-4
                     rounded-md border border-white " >

                        <ArrowLeft className="w-4 h-4 group-hover:animate-bounce" />

                        <span className="text-sm font-bold" >مشاهده همه</span>
                    </div>
                </a>

                {/* slider */}

                <div className="flex flex-1 w-[calc(267px-8px)] max-w-[calc(267px-8px)] md:w-[calc(534px-8px)] md:max-w-[calc(534px-8px)] lg:w-[calc(801px-8px)] lg:max-w-[calc(801px-8px)]
                xl:w-[calc(100%)] rounded-lg xl:max-w-[calc(100%)]   overflow-hidden   ">

                    <div className=" w-full   transform  relative  "  >

                        <div style={styles} className=" w-full slider-type1 transition-all duration-1000 ease-in-out 
                     flex-row-reverse flex  justify-start gap-x-2   " ref={ElementRef} >

                            <SliderItem title="اسپیکر بلوتوثی قابل حمل کینگ استار مدل KBS 250" img="/images/slider21.jpg" price="719000" discount="32" time="2022-01-22 00:00:00" remained="71" />
                            <SliderItem title="اسپیکر بلوتوثی قابل حمل کینگ استار مدل KBS 250" img="/images/slider22.jpg" price="719000" discount="32" time="2022-01-22 00:00:00" remained="71" />
                            <SliderItem title="اسپیکر بلوتوثی قابل حمل کینگ استار مدل KBS 250" img="/images/slider23.jpg" price="719000" discount="32" time="2022-01-22 00:00:00" remained="71" />
                            <SliderItem title="اسپیکر بلوتوثی قابل حمل کینگ استار مدل KBS 250" img="/images/slider24.jpg" price="719000" discount="32" time="2022-01-22 00:00:00" remained="71" />
                            <SliderItem title="اسپیکر بلوتوثی قابل حمل کینگ استار مدل KBS 250" img="/images/slider24.jpg" price="719000" discount="32" time="2022-01-22 00:00:00" remained="71" />
                            <SliderItem title="اسپیکر بلوتوثی قابل حمل کینگ استار مدل KBS 250" img="/images/slider23.jpg" price="719000" discount="32" time="2022-01-22 00:00:00" remained="71" />
                            <SliderItem title="اسپیکر بلوتوثی قابل حمل کینگ استار مدل KBS 250" img="/images/slider22.jpg" price="719000" discount="32" time="2022-01-22 00:00:00" remained="71" />
                            <SliderItem title="اسپیکر بلوتوثی قابل حمل کینگ استار مدل KBS 250" img="/images/slider21.jpg" price="719000" discount="32" time="2022-01-22 00:00:00" remained="71" />
                            <SliderItem title="اسپیکر بلوتوثی قابل حمل کینگ استار مدل KBS 250" img="/images/slider21.jpg" price="719000" discount="32" time="2022-01-22 00:00:00" remained="71" />


                            <SliderItem title="اسپیکر بلوتوثی قابل حمل کینگ استار مدل KBS 250" img="/images/slider21.jpg" price="719000" discount="32" time="2022-01-22 00:00:00" remained="71" />
                            <SliderItem title="اسپیکر بلوتوثی قابل حمل کینگ استار مدل KBS 250" img="/images/slider21.jpg" price="719000" discount="32" time="2022-01-22 00:00:00" remained="71" />
                            <SliderItem title="اسپیکر بلوتوثی قابل حمل کینگ استار مدل KBS 250" img="/images/slider21.jpg" price="719000" discount="32" time="2022-01-22 00:00:00" remained="71" />





                        </div>

                        <ArrowLeft className="next1  " onClick={() => setCountNavigation(countNavigation + 1)} />
                        <ArrowRight className="prev1 " onClick={() => setCountNavigation(countNavigation - 1)} />


                    </div>
                </div>










            </section>

        </div>
    )
}

export default Slider
