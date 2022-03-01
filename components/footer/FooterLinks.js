


function FooterLinks({ data }) {
    console.log(data?.title);
    const childs = data?.childs;
    return (

        <div className="w-full flex flex-col" >
            {data?.title && (
                <p className="text-base text-[#42470] font-bold mb-3" >{data?.title}</p>

            )

            }
            {childs && (childs.map(item => (
                <a className="text-[#81858b] text-sm font-normal mb-4 cursor-pointer hover:text-[#4e5052] transform transition duration-150
                ease-in" >{item?.title}</a>

            )))

            }



        </div>

    )
}

export default FooterLinks