
function NavItem2({ text, customCss }) {
    return (
        <div className={` ${customCss} flex items-center justify-start h-[30px]  cursor-default`} >
            <a className="text-xs text-[#81858b] hover:text-customRed cursor-pointer  " >{text}</a>
        </div>

    )
}

export default NavItem2
