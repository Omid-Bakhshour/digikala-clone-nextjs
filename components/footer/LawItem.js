

function LawItem({ img, title }) {
    return (

        <div className="flex flex-col justify-center items-center text-[#4a5f73] gap-y-2" >
            <img className="w-12 h-12" src={img} />
            <span className="text-xs"  > {title}</span>

        </div>

    )
}

export default LawItem;
