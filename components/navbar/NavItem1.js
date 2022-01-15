

function NavItem1({ text }) {
    return (
        <li className="w-3/12 flex items-center justify-start relative before:absolute before:top-2 before:right-0
        before:w-[2px] before:h-[14px] before:bg-customRed  h-[30px] cursor-default " >
            <a className="text-textBlack3 text-[1rem] font-bold mr-2 hover:text-customRed cursor-pointer" >
                <span  >{text}</span>
            </a>
        </li>
    )
}

export default NavItem1
