
function NavCategory({ showsubMenu }) {
    return (
        <div className={`${showsubMenu ? "flex" : "hidden"} fixed top-full right-0 min-w-[1000px] max-w-[1650] mx-4 w-[calc(100%-2rem)]
            h-11 bg-gray-800 `} >

        </div>
    )
}

export default NavCategory
