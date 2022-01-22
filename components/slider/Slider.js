
import ArrowLeft from "@heroicons/react/outline/ChevronLeftIcon"
import SliderItem from "./SliderItem";
import ArrowRight from "@heroicons/react/outline/ChevronRightIcon"
import { useState, useRef, useEffect } from "react"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



function Slider({ bgColor, sliderImg }) {


    return (
        <div style={{ backgroundColor: bgColor }} className="my-4 max-w-[1366px] 2xl:mx-4 " >

            <section className="py-9 px-4 flex md:flex-row-reverse items-center justify-center flex-col gap-y-3  " >

                <a className=" flex-col my-0 mx-11 w-[170px] cursor-pointer group "  >
                    <img src={sliderImg} className="w-full h-[calc(100%-41px)]" />

                    <div className=" flex-row items-center justify-center gap-x-2 text-white py-2 px-4
                     rounded-md border border-white hidden sm:flex " >

                        <ArrowLeft className="w-4 h-4 group-hover:animate-bounce" />

                        <span className="text-sm font-bold" >مشاهده همه</span>
                    </div>
                </a>

                {/* slider */}



                <div className="flex flex-1 w-full lg  overflow-hidden   ">

                    <div className=" w-full   transform  relative  "  >


                        <Swiper dir="rtl"
                            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                            spaceBetween={8}
                            navigation
                            breakpoints={{
                                // when window width is >= 640px
                                1200: {

                                    slidesPerView: 4,
                                },
                                // when window width is >= 768px
                                1000: {
                                    slidesPerView: 3,
                                },

                                768: {
                                    slidesPerView: 2,
                                },

                                400: {
                                    slidesPerView: 1,
                                },
                            }}>
                            <SwiperSlide>
                                <SliderItem title="اسپیکر بلوتوثی قابل حمل کینگ استار مدل KBS 250" img="/images/slider21.jpg" price="719000" discount="32" time="2022-01-22 00:00:00" remained="71" />

                            </SwiperSlide>
                            <SwiperSlide>
                                <SliderItem title="اسپیکر بلوتوثی قابل حمل کینگ استار مدل KBS 250" img="/images/slider22.jpg" price="719000" discount="32" time="2022-01-22 00:00:00" remained="71" />

                            </SwiperSlide>
                            <SwiperSlide>
                                <SliderItem title="اسپیکر بلوتوثی قابل حمل کینگ استار مدل KBS 250" img="/images/slider23.jpg" price="719000" discount="32" time="2022-01-22 00:00:00" remained="71" />

                            </SwiperSlide>
                            <SwiperSlide>
                                <SliderItem title="اسپیکر بلوتوثی قابل حمل کینگ استار مدل KBS 250" img="/images/slider24.jpg" price="719000" discount="32" time="2022-01-22 00:00:00" remained="71" />

                            </SwiperSlide>


                            <SwiperSlide>
                                <SliderItem title="اسپیکر بلوتوثی قابل حمل کینگ استار مدل KBS 250" img="/images/slider24.jpg" price="719000" discount="32" time="2022-01-22 00:00:00" remained="71" />

                            </SwiperSlide>

                            <SwiperSlide>
                                <SliderItem title="اسپیکر بلوتوثی قابل حمل کینگ استار مدل KBS 250" img="/images/slider23.jpg" price="719000" discount="32" time="2022-01-22 00:00:00" remained="71" />

                            </SwiperSlide>




                        </Swiper>


                    </div>
                </div>

            </section>

        </div>
    )
}

export default Slider
