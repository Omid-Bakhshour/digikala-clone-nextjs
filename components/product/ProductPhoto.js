import React from 'react'

import { AiOutlineHeart } from "react-icons/ai";
import { IoMdShare } from "react-icons/io";
import { BiBell } from "react-icons/bi";
import { AiOutlineLineChart } from "react-icons/ai";
import { MdCompare } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";




function ProductPhoto() {
    return (
        <div className='w-[45%] flex flex-col ml-4' >
            <div className='py-2 flex flex-row text-[#e3122f] gap-x-4 text-base font-bold'>
                پیشنهاد شگفت انگیز
                <div>
                    <span className='text-sm' >۰۸ : ۴۸ : ۰۷</span>
                </div>

            </div>

            <div className='w-full flex flex-row ' >

                <div className='flex flex-col gap-y-3 text-[#424750] ml-1' >
                    <AiOutlineHeart className='w-6 h-6' />
                    <IoMdShare className='w-6 h-6 rotate-180' />
                    <BiBell className='w-6 h-6' />
                    <AiOutlineLineChart className='w-6 h-6' />
                    <MdCompare className='w-6 h-6' />
                    <AiOutlineUnorderedList className='w-6 h-6' />
                </div>

                <div className='w-auto h-auto'>
                    <img className='w-full h-auto block' src='/images/product11.jpg' />
                </div>

            </div>

            <div className='w-full flex my-2 flex-row justify-start items-center gap-x-2' >
                <div className='w-20 h-20 border rounded-lg border-[#e0e0e2] p-1 cursor-pointer '>
                    <img src='/images/product11.jpg' />

                </div>

                <div className='w-20 h-20 border rounded-lg border-[#e0e0e2] p-1 cursor-pointer '>
                    <img src='/images/product12.jpg' />

                </div>

            </div>


            <div className='w-full flex flex-row items-center text-[#a1a3a8] mt-2' >
                <div className='flex flex-row items-center gap-x-2' >
                    <BsInfoCircle className='w-[18px] h-[18px] text-[#81858b]' />

                    <span className='font-normal text-xs text-[#81858b]' >گزارش نادرستی مشخصات</span>

                </div>

                <span className='mr-3 text-xs' >DKP-6444812</span>
            </div>



        </div>
    )
}

export default ProductPhoto