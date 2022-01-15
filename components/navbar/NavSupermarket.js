import NavItem1 from "./NavItem1"
import NavItem2 from "./NavItem2"
import ArrowLeft from "@heroicons/react/outline/ArrowLeftIcon"

function NavSupermarket({ showsubMenu }) {
    return (
        <div className={`${showsubMenu ? "flex" : "hidden"} bg-white w-[610px] min-h-[310px] rounded-b-lg h-5 absolute top-full right-0
        overflow-hidden flex-row-reverse   `} >

            {/* right */}

            <div dir="rtl" className="flex flex-col p-4 flex-1" >

                <div className="w-full pb-2 border-b border-[#f0f5f1] " >
                    <NavItem1 customCss={"w-full"} text="شگفت‌انگیز سوپرمارکتی" />

                </div>

                <div className="w-full pt-2  " >
                    <NavItem1 customCss={"w-full"} text="شگفت‌انگیز سوپرمارکتی" />
                    <NavItem2 customCss={"w-full"} text="تنقلات" />
                    <NavItem2 customCss={"w-full"} text="صبحانه" />
                    <NavItem2 customCss={"w-full"} text="نوشیدنی" />
                    <NavItem2 customCss={"w-full"} text="کالاهای اساسی و خوار و بار" />
                    <NavItem2 customCss={"w-full"} text="خشکبار و شیرینی" />
                </div>

            </div>

            {/* left */}

            <a dir="rtl" className="flex w-[344px] bg-[#f2f2f2] flex-col py-4 px-3" >

                <img src="/images/banner1.png" className="min-w-[320px] w-full rounded-lg " />

                <div className="w-full mt-2 flex flex-row gap-x-2" >

                    <img src="/images/jet.svg" className="w-12 h-12 rounded-lg " />

                    <div className="w-full flex flex-col justify-center" >
                        <span className="text-sm w-full font-bold text-textBlack3 text-right flex flex-row gap-x-1" >
                            دیجی‌کالا جت
                            <span className="text-[#e6123d] rounded-full px-[6px] bg-[rgba(230,18,61,.08)] text-[0.6rem] flex items-center " >جدید</span>
                        </span>

                        <span className="text-right w-full text-[#81858b] text-[0.7rem] font-normal flex flex-row gap-x-1 " >
                            کالاهای سوپرمارکتی با
                            <span className="text-[#029d53] font-extrabold text-[0.75rem]" >ارسال رایگان</span>
                            زیر ۳۰ دقیقه
                        </span>

                    </div>

                    <div className="flex justify-start" >
                        <ArrowLeft className="w-6 h-6 text-textBlack3" />

                    </div>



                </div>


            </a>

        </div>
    )
}

export default NavSupermarket
