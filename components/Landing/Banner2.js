


function Banner2({ img1, img2 }) {
    return (
        <div className="w-full max-w-[1366px] flex flex-col md:flex-row my-5 gap-x-4 px-4 gap-y-3 " >
            <a className="banner_two   ">
                <img src={img1} />
            </a>

            <a className="banner_two " >
                <img src={img2} />
            </a>


        </div>
    )
}

export default Banner2;
