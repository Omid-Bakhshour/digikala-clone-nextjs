

function SliderImg({ img }) {


    return (


        <div className="w-full flex items-center justify-center pt-2">
            <a className="w-[180px] block h-[180px] mx-auto cursor-pointer ">
                {img && (
                    <img src={img} className="w-full h-full group-hover:scale-110 flex items-center justify-center object-contain transition transition
    transform duration-[400ms] ease-in" />
                )

                }

            </a>
        </div>
    )
}

export default SliderImg;
