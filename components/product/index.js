
import React from 'react'
import Navbar from './Navbar'
import ProductDetail from './ProductDetail'

function index() {
    return (
        <div dir="rtl" className="w-full max-w-[1366px] mt-[120px] px-5 2xl:px-0 flex flex-col mx-auto  " >

            <Navbar />
            <ProductDetail />

        </div>
    )
}

export default index