

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper'
import React, { useRef, useState } from 'react'
import { onSliderData } from "../../data/onSlider/data"
import OnSliderItem from './OnSliderItem';



function OneSlider() {
    SwiperCore.use([Autoplay, Pagination])
    const swiperRef = useRef(null)
    const [animation, setAnimation] = useState(true);

    const handleLoop = (e, type) => {
        e.preventDefault()
        if (type === "stop") {
            swiperRef.current.swiper.autoplay.stop()
            setAnimation(false)
        } else if (type === "start") {
            swiperRef.current.swiper.autoplay.start()
            setAnimation(true)
        }
    }




    return (
        <div className='w-full  flex flex-col rounded-lg border border-[rgba(0,191,214,.3)] overflow-hidden shadow-md bg-white ' >

            <div className={`text-[#6e6e6e] w-[100%-24px] h-[57px] flex justify-center items-center mx-3 font-medium
            text-sm relative before:left-0 before:right-0 before:bottom-0 before:absolute before:h-[1px] before:bg-[#f5f5f5]
            after:left-0 after:bottom-0 after:bg-[linear-gradient(90deg,#ffd3db,#fb3449)] after:h-[1px]  after:absolute
             ${animation ? "after:animate-barFill" : ""}`} >پیشنهادهای لحظه‌ای برای شما</div>

            <div className='w-full h-full flex'
                onMouseEnter={(e) => handleLoop(e, "stop")}
                onMouseLeave={(e) => handleLoop(e, "start")}
            >

                <Swiper
                    ref={swiperRef}
                    autoplay={{ delay: 7000 }}
                    slidesPerView={1}>

                    {onSliderData?.map(item => (
                        <SwiperSlide key={item?.title}>
                            <OnSliderItem img={item.img} title={item.title} price={item.price} discount={item.discount} />

                        </SwiperSlide>
                    ))

                    }

                </Swiper>
            </div>
        </div >
    )
}

export default OneSlider;
