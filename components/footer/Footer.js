
import ArrowUp from "@heroicons/react/outline/ChevronUpIcon"
import LawItem from "./LawItem";



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
                <div className="w-full flex items-center justify-around py-7" >

                    <LawItem img={"/images/footer5.svg"} title={"امکان تحویل اکسپرس"} />
                    <LawItem img={"/images/footer4.svg"} title={"امکان پرداخت در محل"} />
                    <LawItem img={"/images/footer3.svg"} title={"۷ روز هفته، ۲۴ ساعته"} />
                    <LawItem img={"/images/footer2.svg"} title={"۷ روز ضمانت بازگشت کالا"} />
                    <LawItem img={"/images/footer1.svg"} title={"ضمانت اصل بودن کالا"} />



                </div>

            </footer>

        </div>
    )
}

export default Footer;
