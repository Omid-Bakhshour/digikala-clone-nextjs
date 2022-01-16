import BannerWithSildeShow from "./BannerWithSildeShow"

function Index() {

    return (
        <div className="w-full max-w-[1366px] mt-[120px]   min-h-screen" >

            <div className="w-full mb-4 px-4 pt-4 hidden md:flex " >
                <a className=" cursor-pointer" >
                    <img src="/images/gif1.gif" className="w-full h-full  object-cover rounded-2xl shadow-md" />
                </a>
            </div>

            <BannerWithSildeShow />

        </div >
    )
}

export default Index
