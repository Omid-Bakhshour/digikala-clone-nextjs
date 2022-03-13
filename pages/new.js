import React from 'react'

import { useSelector } from "react-redux"

function Sold() {
    const { basket } = useSelector(state => state.basket)
    console.log(basket);
    return (
        <div>new</div>
    )
}

export default Sold