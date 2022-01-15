

import { useState, useEffect } from "react"
import LocationIcon from "@heroicons/react/outline/LocationMarkerIcon"
import MenuIcon from "@heroicons/react/outline/MenuAlt3Icon"
import BagIcon from "@heroicons/react/outline/ShoppingBagIcon"
import DisIcon from "@heroicons/react/outline/ReceiptTaxIcon"
import BadgeIcon from "@heroicons/react/outline/BadgeCheckIcon"
import CheckIcon from "@heroicons/react/outline/CheckCircleIcon"
import GiftIcon from "@heroicons/react/outline/GiftIcon"

import NavCategory from "./NavCategory"
import NavSupermarket from "./NavSupermarket"

function Navbar({ setIsNavOpen }) {
    const [show, handleShow] = useState(true);
    const [y, setY] = useState(0);
    const handleNavigation = () => {
        if (y > window.scrollY) {
            handleShow(true)

        } else if (y < window.scrollY) {
            if (window.scrollY > 200) {
                handleShow(false)
            } else {
                handleShow(true)
            }
        }
        setY(window.scrollY);

    }

    const [subMenu, setSubMenu] = useState(null)

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);
        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [y]);

    const OpenNav = (type, value) => {
        if (type === "category") {
            setSubMenu({ category: value });
            setIsNavOpen(value);

        } else if (type === "supermarket") {
            setSubMenu({ supermarket: value });
            setIsNavOpen(value);

        }

    }

    return (
        <div className={`${show ? "translate-y-0" : "-translate-y-[90%]"} z-[99]   bg-white shadow-md flex flex-row w-full fixed
         top-[75px] min-w-[1000px] max-w-[1650px] px-4 transition duration-500 transform ease-out  `}>

            {/* left */}

            <div className="flex flex-row py-2 items-center">
                <LocationIcon className="w-4 h-4 text-textBlack2 " />

                <span className="nav_text ml-2 " >همدان، پرلوک</span>
                <span className="nav_text" >ارسال به </span>

            </div>


            {/* right */}

            <ul className="flex flex-row-reverse  items-center flex-1 gap-x-2" >

                <li onMouseEnter={() => OpenNav("category", true)} onMouseLeave={() => OpenNav("category", false)}
                    className="nav_row ml-5 pr-0 ">
                    <span className="nav_text2" >دسته‌بندی کالاها</span>
                    <MenuIcon className="w-5 h-5 text-textBlack2 " />
                    <NavCategory showsubMenu={subMenu?.category} />

                </li>

                <li onMouseEnter={() => OpenNav("supermarket", true)} onMouseLeave={() => OpenNav("supermarket", false)}
                    className="nav_row nav_border ">
                    <span className="nav_text2" >سوپرمارکت</span>
                    <BagIcon className="nav_icon" />
                    <NavSupermarket showsubMenu={subMenu?.supermarket} />
                </li>


                <li className="nav_row">
                    <span className="nav_text2" >تخفیف‌ها و پیشنهادها</span>
                    <DisIcon className="nav_icon" />


                </li>

                <li className="nav_row">
                    <span className="nav_text2" >دیجی‌کالای من</span>

                    <BadgeIcon className="nav_icon" />


                </li>



                <li className="nav_row">
                    <span className="nav_text2" >دیجی‌پلاس</span>

                    <CheckIcon className="nav_icon" />


                </li>


                <li className="nav_row">
                    <span className="nav_text2" >دیجی‌کلاب</span>

                    <GiftIcon className="nav_icon" />


                </li>



            </ul>


        </div >
    )
}

export default Navbar
