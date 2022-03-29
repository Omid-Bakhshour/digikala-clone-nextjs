import React from 'react'

import { useSelector } from "react-redux"

function Sold({ users }) {
    const { basket } = useSelector(state => state.basket)
    console.log(basket);
    console.log(users.data);
    return (
        <div>new</div>
    )
}

export default Sold


export async function getServerSideProps({ params, req, res, query, preview, previewData, resolvedUrl, locale, locales, defaultLocale }) {

    const users = { data: "omid" }
    return { props: { users } }
}