
import ArrowUp from "@heroicons/react/outline/ChevronUpIcon"
import FooterLinks from "./FooterLinks";
import LawItem from "./LawItem";

import { data } from "../../data/footerLinks/data"
import Glob from "@heroicons/react/outline/GlobeIcon"
import Map from "@heroicons/react/outline/MapIcon"
import Present from "@heroicons/react/outline/PresentationChartBarIcon"
import Qrcode from "@heroicons/react/outline/QrcodeIcon"







function Footer() {

    return (

        <div dir="rtl" className="w-full flex mt-7 border-t border-[#e0e0e2] bg-white  " >
            <footer className=" w-full max-w-[1366px]  mx-auto pt-8 px-5 flex flex-col">

                <div className="flex items-center w-full justify-between" >


                    <img src="/images/digilogo.svg" className="w-[115px] h-8" />
                    <div className="h-10 border border-[#a1a3a8] text-[#a1a3a8] rounded-lg cursor-pointer py-1 px-4 flex
                     flex-row items-center group  " >
                        <span className="text-sm ml-2 font-bold" >بازگشت به بالا</span>
                        <ArrowUp className="w-4 h-4 group-hover:animate-ping " />


                    </div>

                </div>


                {/* phone numbers */}

                <div className="flex flex-row justify-start items-center w-full mt-[10px]">
                    <span className="text-[#424750] text-xs" >تلفن پشتیبانی:</span>
                    <a className="text-[#424750] text-xs mr-2 tracking-[3px]" >۶۱۹۳۰۰۰۰ - ۰۲۱</a>
                    <span className="text-[#dfdfdf] mx-4" >|</span>
                    <a className="text-[#424750] text-xs  tracking-[3px]" >۶۲۹۹۹۹۱۱ - ۰۲۱</a>
                    <span className="text-[#dfdfdf] mx-4" >|</span>
                    <span className="text-[#424750] text-xs" >هفت روز هفته، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم.</span>
                </div>

                {/* laws */}
                <div className="w-full flex items-center justify-around py-8" >

                    <LawItem img={"/images/footer5.svg"} title={"امکان تحویل اکسپرس"} />
                    <LawItem img={"/images/footer4.svg"} title={"امکان پرداخت در محل"} />
                    <LawItem img={"/images/footer3.svg"} title={"۷ روز هفته، ۲۴ ساعته"} />
                    <LawItem img={"/images/footer2.svg"} title={"۷ روز ضمانت بازگشت کالا"} />
                    <LawItem img={"/images/footer1.svg"} title={"ضمانت اصل بودن کالا"} />
                </div>

                <div>

                </div>

                <div className="w-full justify-between flex flex-row mb-8">

                    {data && (data.map(item => (
                        <FooterLinks data={item} />
                    )))

                    }


                    <div className="flex flex-col w-full" >
                        <p className="text-base text-[#42470] font-bold mb-3" >همراه ما باشید!</p>
                        <div className="w-full flex flex-row items-center gap-x-5 ">
                            <Glob className="w-10 h-10 text-[#a1a3a8] cursor-pointer" />
                            <Map className="w-10 h-10 text-[#a1a3a8] cursor-pointer" />
                            <Present className="w-10 h-10 text-[#a1a3a8] cursor-pointer" />
                            <Qrcode className="w-10 h-10 text-[#a1a3a8] cursor-pointer" />

                        </div>

                        <div className="w-full flex flex-col mt-6 ">
                            <h4 className="text-base text-[#42470] font-bold mb-3" >با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</h4>
                            <form className="w-full flex flex-row gap-x-3" >
                                <div className="w-full h-12 flex-grow bg-[#f0f0f1] rounded-lg px-3 py-2 ">
                                    <input placeholder="ایمیل شما" type="email" className="outline-none border-none bg-transparent
                                    w-full h-full text-[#424750] text-sm " />
                                </div>

                                <button className=" rounded-lg bg-[#e0e0e2] text-white py-3 px-4" >ثبت</button>

                            </form>

                        </div>


                    </div>
                </div>


            </footer>

        </div>
    )
}

export default Footer;
