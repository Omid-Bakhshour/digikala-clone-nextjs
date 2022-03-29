
import React from 'react'
import Header from "../../components/header/Header"
import NavBar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import Products from "../../components/product/index"
import { useState } from 'react';



function Product() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <div className='bg-white min-h-screen ' >
            <Header isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
            <NavBar setIsNavOpen={setIsNavOpen} />
            <div className={` ${isSearchOpen || isNavOpen ? "block" : "hidden"}   block fixed top-0 bottom-0 right-0 w-full h-full
                 bg-[#acacac] opacity-50  z-[49]   `} />

            <Products />
            <Footer />

        </div>
    )
}

export default Product