import React from 'react'
import ProductBuy from './ProductBuy'
import ProductPhoto from './ProductPhoto'
import ProductTitle from './ProductTitle'
import ShowDetail from './ShowDetail'

function ProductDetail() {
    return (
        <div className='w-full flex flex-row' >
            <ProductPhoto />

            <div className='w-full flex flex-col' >
                <ProductTitle />
                <div className='w-full flex flex-row'>
                    <ShowDetail />
                    <ProductBuy />
                </div>

            </div>



        </div>
    )
}

export default ProductDetail