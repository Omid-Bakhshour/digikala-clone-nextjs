
import ShoppingCartIcon from "@heroicons/react/outline/ShoppingCartIcon"
import UserIcon from "@heroicons/react/outline/UserIcon"
import Search from "./Search"


function Header() {
    return (
        <div className="flex flex-row  px-2 py-4 bg-white">


            {/* left */}

            <div className="flex w-[360px] flex-row items-center max-w-[360px] ">
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

            <div className="flex flex-row flex-1 justify-between">

                {/* icon */}

                <a href="/" className="mr-2">
                    <img src="/images/img1.png" className="max-w-[132px]" />

                </a>

                {/* search input */}

                <Search />

                {/* logo */}

                <div className="flex items-center" >

                    <a href="/" className="h-[30px]" >
                        <img src="/images/logo.svg" />

                    </a>


                </div>

            </div>

        </div>
    )
}

export default Header
