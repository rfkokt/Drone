import Image from "next/image";
import Logo from "../../assets/icon/Logo.svg";
import Nav from "./Nav";
import Search from "./Search";
import Link from "next/link"
import {useState} from "react";

export default function NavBar() {
    const [open, setOpen] = useState(false)
    const openDropDown = () => {
        setOpen(!open)
    }
    // const closeDropDown = (e) => {
    //     console.log('debug', e)
    //     setOpen(e)
    // }
    return (
        <>
            <div className={"flex items-center"}>
                <div className={"md:w-3/12 w-6/12 mt-10 md:mt-0 sm:py-11 px-10 md:px-0"}>
                    <Link href={"/"}>
                        <a>
                            <Image src={Logo}/>
                        </a>
                    </Link>
                </div>
                <div className={"md:w-6/12  hidden md:block"}>
                    <Nav/>
                </div>
                <div
                    className={"md:w-3/12 hidden md:block"}
                >
                    <Search/>
                </div>
                {/*Mobile */}
                <div className={"text-right w-6/12 text-white mt-10 px-10 md:px-0 md:hidden"}>
                    <button className={"mobile-menu-button"} onClick={openDropDown}>
                        {open ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20"
                                     fill="currentColor">
                            <path fill-rule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clip-rule="evenodd"/>
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20"
                                      fill="currentColor">
                            <path fill-rule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clip-rule="evenodd"/>
                        </svg>}
                    </button>
                </div>
            </div>


            {/*Mobile*/}
            {open ?
                <div className="md:hidden z-50" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {/*Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"*/}
                        <Link href="#"><a
                            onClick={openDropDown}
                            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                            aria-current="page">Home</a>
                        </Link>
                        <a href="#"
                           onClick={openDropDown}
                           className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Gallery</a>

                        <a href="#"
                           onClick={openDropDown}
                           className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Products</a>

                        <a href="#"
                           onClick={openDropDown}
                           className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Review</a>
                        <a href="#"
                           onClick={openDropDown}
                           className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Support</a>
                    </div>
                </div>
                : null}

        </>
    )
}