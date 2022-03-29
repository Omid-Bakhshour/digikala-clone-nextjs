import React from 'react'
import { BsShop } from 'react-icons/bs';
import { GrShieldSecurity } from 'react-icons/gr';
import { CgBox } from 'react-icons/cg';
import { GoPrimitiveDot } from 'react-icons/go';
import { BsTruck } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';







GrShieldSecurity
function ProductBuy() {
    return (
        <div className='w-full flex flex-col' >


            <div className='w-full flex-col rounded-lg border border-[#e0e0e2] bg-[#f0f0f0] my-2  px-5' >

                <div className='w-full flex flex-row  justify-between py-3' >
                    <p className='text-[#0c0c0c] text-lg font-bold' >فروشنده</p>

                    <span className='text-[#19bfd3] text-sm  '>۱ فروشنده دیگر</span>

                </div>

                <div className='w-full flex flex-row py-3' >

                    <div className='flex justify-start ml-5' >

                        <BsShop className='text-[#424750] w-6 h-6 ' />

                    </div>

                    <div className='w-full flex flex-col mt-2'>


                        <div className='w-full flex items-end mb-4'>
                            <span className='text-[#424750] text-base font-bold' >دلموناکو</span>

                        </div>

                        <div className='w-full flex flex-row mr-2' >
                            <span className='text-[#81858b] text-sm font-normal' >عملکرد</span>
                            <span className='text-[#00a049] text-sm font-normal'>عالی</span>


                        </div>

                    </div>

                </div>


                <div className='w-full flex flex-row py-3 border-t items-center border-b border-[#e0e0e2]' >

                    <div className='flex justify-start ml-5' >

                        <GrShieldSecurity className='text-[#424750] w-6 h-6 ' />

                    </div>


                    <div className='w-full flex flex-col '>


                        <div className='w-full flex items-center '>
                            <span className='text-[#424750] text-sm font-bold' >گارانتی اصالت و سلامت فیزیکی کالا</span>

                        </div>



                    </div>

                </div>


                <div className='w-full flex flex-col py-3  items-center ' >

                    <div className='w-full flex flex-row'>
                        <div className='flex justify-start ml-5' >

                            <CgBox className='text-[#424750] w-6 h-6 ' />

                        </div>


                        <div className='w-full flex-1 flex-col '>


                            <div className='w-full flex items-center '>
                                <span className='text-[#424750] text-base font-bold' >موجود در انبار فروشنده</span>

                            </div>

                        </div>

                        <IoIosArrowBack className='text-[#a1a3a8] w-5 h-5' />
                    </div>

                    <div className='w-full flex flex-row mt-3' >

                        <div className=' relative w-6 h-6 flex items-center justify-center ml-5 '>
                            <GoPrimitiveDot className='w-3 h-3 text-[#a1a3a8] ' />
                            <span className='w-[2px] bg-[#e0e0e2] h-[calc(50%-5px)] top-0 right-1/2  absolute translate-x-1/2' />

                        </div>

                        <div className='flex flex-row items-center gap-x-3' >
                            <BsTruck className=' w-4 h-4 text-[#424750] ' />
                            <span className='text-[#81858b] font-normal text-sm' >ارسال دیجی‌کالا از ۱ روز کاری دیگر</span>

                        </div>

                    </div>



                </div>

            </div>

            {/* part 2 */}

            {/* part 3 */}

        </div>
    )
}

export default ProductBuy