

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import CategorySliderItem from './CategorySliderItem';



function CategorySlider({ data, title }) {
    console.log(data);
    return (
        <div className="w-full lg:w-[80%] xl:w-[83%]  flex lg:pl-5 self-stretch" >
            <section className="h-full max-w-full pt-2 pb-3 flex flex-col bg-white shadow-md shadow-[rgba(0,0,0,0.1)] rounded-lg w-full" >

                {/* title */}
                <div className="w-full pr-8 flex" >
                    <div className="mb-[6px] ml-8 w-full min-h-[49px] flex items-center justify-between relative
                after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:absolute after:bg-[#ef5661] md:after:bg-[#dfdfdf] z-[3] md:z-0  " >

                        <span className="min-h-[49px] py-3 flex flex-col text-[#515151] gap-y-2 relative
                      before:absolute before:bottom-0 before:h-[1px] before:bg-[#ef5661] before:right-0 left:0 md:before:-left-10 before:z-[2]
                      after:absolute after:bottom-0 after:h-[1px] after:bg-white after:right-0 after:-left-14 md:after:z-[1] " >
                            <span className="font-bold text-lg" >{title}</span>
                            <span className="font-normal text-xs mr-1">بر اساس بازدیدهای شما</span>
                        </span>

                    </div>
                </div>

                {/* slider */}

                <div className="w-full  flex  " >

                    <Swiper dir="rtl"
                        modules={[Navigation]}
                        navigation

                        spaceBetween={8}
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

                        {data?.map(item => (
                            <SwiperSlide>
                                <CategorySliderItem img={item.img} title={item.title} price={item.price} discount={item.discount} />

                            </SwiperSlide>
                        ))

                        }



                    </Swiper>


                </div>

            </section>

        </div>
    )
}

export default CategorySlider;
