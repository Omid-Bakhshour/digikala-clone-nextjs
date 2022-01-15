import { data } from "../../data/category/data"
import NavList from "./NavList"
import { useState, useEffect } from "react"

import LeftIcon from "@heroicons/react/outline/ChevronLeftIcon"
import NavItem1 from "./NavItem1";
import NavItem2 from "./NavItem2";

function NavCategory({ showsubMenu }) {

    const [openNavRow, setOpenNavRow] = useState({
        idcategory1: true,


    })
    return (
        <div className={`${showsubMenu ? "flex" : "hidden"} fixed top-full right-0 min-w-[1000px] max-w-[1650] mx-4 w-[calc(100%-2rem)]
            bg-white rounded-b-lg flex flex-row-reverse overflow-hidden `} >

            {/* right */}

            <div className="max-w-[230px] w-[20%] py-2 border-l border-[#f0f0f1]" >
                {data?.map((item) => {

                    return (
                        <NavList key={`${item.name}098249084290-`} text={item.name} image={item.image}
                            hovered={openNavRow[`idcategory${item.id}`]} setOpenNavRow={setOpenNavRow} id={`idcategory${item.id}`} />
                    )
                })

                }

            </div>

            {/* left */}

            {data.map(item => {

                const opened = openNavRow[`idcategory${item.id}`]
                return (
                    <div id={`idcategory${item.id}`} dir="rtl" key={`${item.name}9280294274029294092`}
                        className={` ${opened ? "flex" : "hidden"}  w-full p-3  flex-col cursor-default  `}>
                        <div className="flex w-full flex-row pt-2 pb-4 items-center  " >

                            {/* title */}


                            <a className="text-textBlack2 cursor-pointer text-xs font-bold" >{`همه دسته بندی های ${item.name}`}</a>
                            <LeftIcon className="w-4 h-4 text-textBlack2 mr-1 " />
                        </div>
                        <ul className="w-full flex flex-col max-h-[417px] flex-wrap  " >

                            {item?.childs?.map(item1 => {

                                const hasChild = item1.hasChild;
                                if (hasChild === "yes") {
                                    return (
                                        <>
                                            <NavItem1 customCss={"w-3/12"} key={`${item1.name}oqiepoqipeoiqpoeiqoi`} text={item1.name} />

                                            {item1?.childs?.map(item2 => {

                                                return (
                                                    <NavItem2 customCss={"w-3/12"} key={`${item2.name};aakd;lpoimx.sjdklsjk`} text={item2?.name} />
                                                )
                                            })

                                            }

                                        </>
                                    )
                                } else {
                                    return (
                                        <NavItem1 customCss={"w-3/12"} key={`${item1.name}a'dalkoeimbskjhfj`} text={item1?.name} />

                                    )
                                }
                            })

                            }


                        </ul>

                    </div>
                )

            })
            }



        </div>
    )
}

export default NavCategory
