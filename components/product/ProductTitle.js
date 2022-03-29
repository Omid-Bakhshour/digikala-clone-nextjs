import React from 'react'

function ProductTitle() {
    return (
        <div className='w-full flex flex-col ' >
            <div className='w-full flex'>
                <nav className='flex items-center flex-row gap-x-2'>
                    <a className='text-[#19bfd3] font-bold text-sm cursor-pointer ' >
                        <span>دل موناکو</span>
                    </a>

                    <a className='flex flex-row items-center gap-x-2 text-[#19bfd3] font-bold text-sm cursor-pointer' >
                        <span className='text-[#c0c2c5] text-xs' >/</span>
                        <span>ریمل دل موناکو</span>
                    </a>
                </nav>

            </div>

            <h1 className='text-[#0c0c0c] text-lg font-bold mt-2' >ریمل حجم دهنده دل موناکو کد FP124-83</h1>

        </div>
    )
}

export default ProductTitle