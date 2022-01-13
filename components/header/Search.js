import SearchIcon from "@heroicons/react/outline/SearchIcon"
import TrashIcon from "@heroicons/react/outline/TrashIcon"
import ClockIcon from "@heroicons/react/outline/ClockIcon"
import LeftIcon from "@heroicons/react/outline/ChevronLeftIcon"
import FireIcon from "@heroicons/react/outline/FireIcon"



import { useState, useEffect, useRef } from "react"


function Search({ isSearchOpen, setIsSearchOpen }) {

    const searchRef = useRef();


    // function to detect if click is outside and close the search
    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isSearchOpen && searchRef.current && !searchRef.current.contains(e.target)) {
                setIsSearchOpen(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)

        }

    }, [isSearchOpen])

    return (




        <div className="flex relative flex-grow flex-1 flex-shrink mx-4" ref={searchRef} >

            <input dir="rtl" onClick={() => setIsSearchOpen(true)} placeholder="جست و جو در دیجی کالا ..."
                className={` ${isSearchOpen ? "bg-white" : "bg-[#f0f0f1] rounded-lg"} w-full py-[14px] pl-3 pr-11 
                 outline-none text-right text-[#474747] text-xs z-[51] `} />
            <SearchIcon className="w-6 h-6 text-Gray2 absolute top-3 right-3 z-[51]  " />


            <div className={` ${isSearchOpen ? "block" : "hidden"}  absolute top-0 left-0 w-full pt-14 px-3 pb-4 z-[50] bg-white rounded-lg
            shadow-lg  `}>
                <div className="flex flex-col gap-y-3" >

                    <div className="flex flex-row items-center gap-x-3">
                        <TrashIcon className="w-5 h-5 text-Gray2" />
                        <span className="flex-1 text-right text-sm text-textblack font-[]">تاریخچه جستجوهای شما</span>

                        <ClockIcon className="w-5 h-5 text-Gray2" />

                    </div>

                    <div className="w-full flex flex-row-reverse pr-9 pb-4 ">
                        <a className="flex flex-row  py-1 px-3 rounded-xl border items-center h-8 justify-center">

                            <LeftIcon className="w-3 h-3 text-Gray2" />
                            <span className="text-xs text-textBlack2">galaxy note</span>
                        </a>

                    </div>

                    <div className="border-t h-[1px]  mr-9" />


                    <div className="flex flex-row items-center gap-x-3">
                        <span className="flex-1 text-right text-sm text-textblack font-[700]">بیشترین جستجوهای اخیر</span>

                        <FireIcon className="w-5 h-5 text-Gray2" />

                    </div>

                    <div className="w-full flex flex-row-reverse pr-9 pb-4 gap-y-2 gap-x-3 ">
                        <a className="flex flex-row  py-1 px-3 rounded-xl border items-center h-8 justify-center">

                            <span className="text-xs text-textBlack2">galaxy note</span>
                        </a>

                        <a className="flex flex-row  py-1 px-3 rounded-xl border items-center h-8 justify-center">

                            <span className="text-xs text-textBlack2">galaxy note</span>
                        </a>
                        <a className="flex flex-row  py-1 px-3 rounded-xl border items-center h-8 justify-center">

                            <span className="text-xs text-textBlack2">galaxy note</span>
                        </a>
                        <a className="flex flex-row  py-1 px-3 rounded-xl border items-center h-8 justify-center">

                            <span className="text-xs text-textBlack2">galaxy note</span>
                        </a>

                    </div>



                </div>

            </div>





        </div>

    )
}

export default Search
