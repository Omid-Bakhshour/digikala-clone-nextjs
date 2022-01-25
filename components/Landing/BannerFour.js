


function BannerFour({ img1, img2, img3, img4 }) {
    return (
        <div className="w-full max-w-[1366px] grid grid-cols-2 gap-y-4 md:grid-cols-4 my-5 gap-x-4 px-4 " >

            <a className="banner_four col-span-1  ">
                <img src={img1} />
            </a>

            <a className="banner_four col-span-1 " >
                <img src={img2} />
            </a>

            <a className="banner_four col-span-1 " >
                <img src={img3} />
            </a>

            <a className="banner_four col-span-1 " >
                <img src={img4} />
            </a>



        </div>
    )
}

export default BannerFour;
