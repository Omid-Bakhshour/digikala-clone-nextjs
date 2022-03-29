
import { BiHomeSmile } from "react-icons/bi";
import { HiOutlineSpeakerphone } from "react-icons/hi";

function Navbar() {

    return (
        <div className="w-full flex flex-row justify-between my-4" >

            {/* right */}
            <div className="w-full flex flex-1 flex-row text-[#81858b] text-sm font-normal" >
                <a className="flex flex-row cursor-pointer" >
                    دیجی کالا
                    <span className="mx-3">/</span>
                </a>
                <a className="flex flex-row cursor-pointer" >
                    خانه و آشپزخانه
                    <span className="mx-3">/</span>
                </a>

                <a className="flex flex-row cursor-pointer" >
                    خواب
                    <span className="mx-3">/</span>
                </a>

                <a className="flex flex-row cursor-pointer" >
                    سرویس خواب
                    <span className="mx-3">/</span>
                </a>
            </div>

            {/* left */}

            <div className="flex items-center flex-row text-[#a1a3a8] gap-x-4 cursor-pointer" >
                <div className="flex flex-row items-center gap-x-2" >

                    <a className="flex flex-row items-center gap-x-2" >
                        <span className="text-xs" >ثبت آگهی در پیندو</span>

                        <HiOutlineSpeakerphone className="w-4 h-4" />

                    </a>
                    <a className="flex flex-row items-center gap-x-2 cursor-pointer" >
                        <span className="text-xs" >فروش در دیجی‌کالا</span>

                        <BiHomeSmile className="w-4 h-4" />
                    </a>


                </div>



            </div>

        </div>
    )
}

export default Navbar
