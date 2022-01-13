
import ShoppingCartIcon from "@heroicons/react/outline/ShoppingCartIcon"
import UserIcon from "@heroicons/react/outline/UserIcon"

import Search from "./Search"


function Header({ isSearchOpen, setIsSearchOpen }) {
    return (
        <header className="flex fixed top-0 right-0 left-0 flex-row  px-4 py-4 bg-white z-[100]  min-w-[1000px] max-w-[1650px] ">


            {/* left */}

            <div className="flex w-[360px] flex-row items-center max-w-[360px] relative ">
                <div className="mr-4 ">
                    <ShoppingCartIcon className="w-7 h-7 text-[#4a5f73] " />
                </div>

                <div className="px-3 border-l border-borderGray">
                    <div className="flex justify-center py-[10px] px-3 items-center border rounded-lg border-borderGray cursor-pointer  ">
                        <span className="text-xs text-textGray mr-2" >ورود به حساب کاربری</span>
                        <UserIcon className="w-6 h-6 text-textGray" />


                    </div>

                </div>


            </div>


            {/* right */}

            <div className="flex flex-row flex-1 ">

                {/* icon */}

                <a href="/" className="mr-2 flex">
                    <img src="/images/img1.png" className="max-w-[132px]" />

                </a>

                {/* search input */}

                <Search isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />

                {/* logo */}

                <div className="flex items-center relative z-[239]" >

                    <a href="/" className="h-[30px]" >
                        <img src="/images/logo.svg" />

                    </a>


                </div>

            </div>

        </header>
    )
}

export default Header
