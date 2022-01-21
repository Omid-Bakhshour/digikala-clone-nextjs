

function SliderItem({ title, img, price, discount, time, remained }) {
    return (
        <div className="relative w-[259px] min-w-[259px] h-full flex bg-white rounded-lg  z-[1] " >
            <a className=" min-h-[444px]  flex flex-col items-center pt-11 px-4 pb-4 w-full " >
                <div className=" pt-2 w-[180px] h-[180px] flex items-center " >
                    <img src={img} />
                </div>

            </a>

        </div>
    )
}

export default SliderItem
