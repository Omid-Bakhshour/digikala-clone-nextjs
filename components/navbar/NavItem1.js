

function NavItem1({ text, customCss }) {
    return (
        <div className={` ${customCss} flex items-center justify-start relative after:absolute after:top-2 after:right-0
        after:w-[2px] after:h-[14px] after:bg-customRed  h-[30px] cursor-default`} >
            <a className="text-textBlack3 text-[0.85rem] font-semibold mr-2 hover:text-customRed cursor-pointer" >
                <span>{text}</span>
            </a>
        </div>
    )
}

export default NavItem1
