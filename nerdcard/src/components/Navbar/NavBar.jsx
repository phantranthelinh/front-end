import {IoSunnySharp} from "react-icons/io5";
import {HiOutlineMenu} from "react-icons/hi";
import {MdOutlineClose} from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";
import useDarkMode from "../../useDarkMode";
const NavBar = (props) => {
    const {isMobile} = props;
    const [openMenu,setOpenMenu] = useState(false);
    const handleMenu  = () => {
        setOpenMenu(!openMenu)
    };
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    return (  
        <nav className="flex items-center ">
            <div className="flex items-center">
                <div className="text-32 font-bold cursor-pointer">
                    NerdCard
                </div>
                {isDarkMode ? (
                    <IoSunnySharp size={"24px"} color="#e9c46a" className="ml-4 cursor-pointer"
                    onClick={() => toggleDarkMode(!isDarkMode)}/>

                ):(
                    <FaMoon size={"24px"} color="#e9c46a" className="ml-4 cursor-pointer"
                    onClick={() => toggleDarkMode(!isDarkMode)}/>
                )}
            </div>
            <ul className="md:flex md:gap-10  ml-auto text-16 font-semibold">
                {openMenu && isMobile ?(
                    <MdOutlineClose size={"24px"} 
                    className="cursor-pointer" 
                    onClick={handleMenu} />
                ): !openMenu && isMobile?(
                <HiOutlineMenu size={"24px"} 
                className="cursor-pointer"
                 onClick={handleMenu}/>
                ):(
                    <>
                        <li className="nav-item">Features</li>
                        <li className="nav-item">Menu</li>
                        <li className="nav-item">Our Story</li>
                        <li className="nav-item ml-28">Contact</li>
                    </>
                )}
                {openMenu && (
                    <div className="absolute right-6 z-10 bg-white p-8 text-center text-black text-13">
                        <li className="cursor-pointer">Features</li>
                        <li className="cursor-pointer">Menu</li>
                        <li className="cursor-pointer">Our Story</li>
                        <li className="cursor-pointer">Contact</li>
                    </div>
                )}
            </ul>
        </nav>
    );
}
export default NavBar;