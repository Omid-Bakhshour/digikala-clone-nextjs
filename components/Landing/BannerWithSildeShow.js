import ArrowLeft from "@heroicons/react/outline/ChevronLeftIcon"
import ArrowRight from "@heroicons/react/outline/ChevronRightIcon"
import { useEffect, useState } from "react"






function BannerWithSildeShow() {


    const [SliderNum, setSliderNum] = useState(1);
    const [delay, setDelay] = useState(1);
    const [paused, setPaused] = useState(false);


    const [touchStart, setTouchStart] = useState(0);


    function handleTouchStart(e) {
        setTouchStart(e.changedTouches[0].clientX);
    }

    function handleTouchEnd(e) {
        const touchEnd = (e.changedTouches[0].clientX);

        if (touchStart - touchEnd > 100) {
            setSliderNum(SliderNum + 1)
        }

        if (touchStart - touchEnd < -100) {
            setSliderNum(SliderNum - 1)
        }
    }

    const plusSlides = (num) => {
        setSliderNum(num)
    }


    useEffect(() => {
        var slideIndex = SliderNum;
        showSlides(slideIndex);
        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {
                slideIndex = 1;
                setSliderNum(1);
            }
            if (n < 1) {
                slideIndex = slides.length
                setSliderNum(slides.length)

            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }


    }, [SliderNum])



    // automatic change slider
    useEffect(() => {
        function ChangeSlider() {
            setSliderNum(SliderNum + 1);
            setDelay(delay + 1);
        }
        const interval = setInterval(() => ChangeSlider(), 5000)
        return () => {
            if (!paused) {
                clearInterval(interval);

            }
        }
    }, [delay]);



    return (

        <div dir="rtl" className="w-full flex flex-col-reverse items-center  pt-4 md:pt-0 md:flex-row px-4 gap-y-3 md:gap-x-3" >



            {/* right slider */}


            <div className=" w-full md:w-2/3   relative self-stretch  " onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}  >


                <div onTouchStart={(e) => handleTouchStart(e)} onTouchEnd={(e) => handleTouchEnd(e)}
                    className="w-full h-full flex relative  " >


                    <div className="mySlides fade" >
                        <a href="https://google.com" className=" " >
                            <img className="w-full h-full rounded-2xl shadow-md" src="/images/slider11.jpg" />
                        </a>
                    </div>

                    <div className="mySlides fade" >
                        <a href="https://varzesh3.com"  >
                            <img className="w-full h-full rounded-2xl shadow-md" src="/images/slider12.jpg" />
                        </a>
                    </div>

                    <div className="mySlides fade" >
                        <a href="https://tarafdari.com" >
                            <img className="w-full h-full rounded-2xl shadow-md" src="/images/slider13.jpg" />
                        </a>
                    </div>

                </div>



                <ArrowLeft className="prev " onClick={() => plusSlides(SliderNum + 1)} />
                <ArrowRight className="next " onClick={() => plusSlides(SliderNum - 1)} />

                <div className="flex w-full flex-row absolute bottom-4 left-0 right-0 justify-center items-center">
                    <span className="dot " onClick={() => plusSlides(1)} />
                    <span className="dot" onClick={() => plusSlides(2)} />
                    <span className="dot" onClick={() => plusSlides(3)} />


                </div>


            </div>


            {/* end sldier */}

            {/* left */}

            <div className="md:w-1/3 w-full flex flex-col  " >

                <a className="w-full mb-4  " >
                    <img className="rounded-2xl shadow-md" src="/images/bannersecond1.jpg" />
                </a>

                <a className="w-full " >
                    <img className="rounded-2xl shadow-md " src="/images/bannersecond2.jpg" />
                </a>
            </div>


        </div>

    )
}

export default BannerWithSildeShow
