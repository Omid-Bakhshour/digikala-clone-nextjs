import React from 'react'

import { AiFillStar } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { GiStarShuriken } from 'react-icons/gi';
import { IoIosArrowBack } from 'react-icons/io';

function ShowDetail() {
    return (
        <div className='min-w-[300px] my-2 ml-2 border-t border-[#e0e0e2]' >

            <div className='w-full flex flex-row my-2  items-start pb-3 min-h-[350px]' >

                <div className='flex flex-row items-center'>
                    <AiFillStar className='text-[#ffd700] w-4 h-4' />
                    <p className='text-sm font-normal text-[#0c0c0c]' >۳.۵</p>
                    <p className='text-xs font-normal text-[#c0c2c5] mr-1'>(۲۲)</p>
                </div>

                <div className='flex items-center mx-1'>
                    <BsDot className='text-[#c0c2c5] w-5 h-5' />
                </div>

                <div className='flex items-center cursor-pointer '>
                    <p className='text-sm font-normal text-[#19bfd3]'>۱۵ دیدگاه</p>
                </div>

            </div>

            <div className='w-full flex flex-row gap-x-2 items-center' >
                <HiOutlineInformationCircle className='w-4 h-4 text-[#81858b]' />

                <p className='text-[#424750] text-sm font-normal text-justify' >امکان برگشت کالا در گروه ریمل با دلیل "انصراف از خرید" تنها در صورتی مورد قبول است که پلمپ کالا باز نشده باشد.</p>

            </div>

            <div className='w-full flex my-2' >
                <div className='w-full flex flex-col border rounded-lg border-[#e0e0e2] min-h-[100px] p-3' >

                    <div className='w-full flex flex-row items-center' >
                        <GiStarShuriken className='text-[#a6358a] w-[18px] h-[18px]' />
                        <p className=' flex-1 text-[#424750] text-sm font-bold mr-2' >ویژه اعضای دیجی‌پلاس</p>
                        <IoIosArrowBack className='w-4 h-4 text-[#424750]' />

                    </div>

                    <div className='w-full flex flex-col mt-4' >
                        <div className='w-full flex flex-row items-center'>
                            <div className='flex relative '>
                                <BsDot className='w-6 h-6 text-[#a6358a] -mr-[3px]' />
                                <span className='w-[2px] bg-[#e0e0e2] h-[calc(50%-5px)] top-0 left-1/2 absolute translate-x-1/2' />
                                <span className='w-[2px] bg-[#e0e0e2] h-[calc(50%-5px)] bottom-0 left-1/2 absolute translate-x-1/2' />

                            </div>

                            <h3 className='text-[#81858b] text-xs font-normal mr-2' >ارسال رایگان</h3>
                        </div>

                        <div className='w-full flex flex-row items-center'>
                            <div className='flex relative '>
                                <BsDot className='w-6 h-6 text-[#a6358a] -mr-[3px]' />
                                <span className='w-[2px] bg-[#e0e0e2] h-[calc(50%-5px)] top-0 left-1/2 absolute translate-x-1/2' />

                            </div>

                            <h3 className='text-[#81858b] text-xs font-normal mr-2' >امکان ارسال فوری (شهر تهران)</h3>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ShowDetail