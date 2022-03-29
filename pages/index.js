import Head from 'next/head'
import Header from '../components/header/Header'

import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Landing from "../components/Landing/Index"
import Footer from '../components/footer/Footer';
import { useSelector, useDispatch } from "react-redux"
import { AddDataToBasket } from "../redux/actions/basketActions"

import { useEffect } from "react"


export default function Home() {

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AddDataToBasket({ item: 1 }))
  }, [])






  return (
    <div className='bg-[#fcfcfc] min-h-screen ' >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
      <Navbar setIsNavOpen={setIsNavOpen} />

      <div className={` ${isSearchOpen || isNavOpen ? "block" : "hidden"}   block fixed top-0 bottom-0 right-0 w-full h-full
       bg-[#acacac] opacity-50  z-[49]   `} />

      <Landing />

      <Footer />



    </div>
  )
}
