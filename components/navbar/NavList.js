
function NavList({ text, image, hovered, id, setOpenNavRow }) {

    const Icon = image
    return (
        <a onMouseEnter={() => setOpenNavRow({ [id]: true })}
            className={` ${hovered ? "bg-[#f9f9f9]   border-[#f0f0f1] " : "border-white "} flex flex-row items-center 
        py-3 px-2 border-t border-b  cursor-pointer transition transform duration-150 ease-in-out `} >
            <span className={` ${hovered ? "text-customRed" : ""} nav_text2 flex-1 text-right mr-2 `} >{text}</span>
            <Icon className={`${hovered ? "text-customRed" : ""}  nav_icon`} />
        </a>
    )
}

export default NavList
