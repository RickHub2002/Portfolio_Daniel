import { Link } from "react-scroll";

function Header_icons() {
    return (
        <nav id="navContent" className="fixed bottom-0 bg-blue-500 shadow-xl-up z-30 w-full flex justify-center items-center p-2 gap-8 text-xl font-regular text-black dark:text-white min-[1000px]:hidden">
            <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200" smooth={true} to="introduction" offset={-300}>
                <span className="hidden max-[1000px]:block"><i className="fa-solid fa-house"></i></span>
            </Link>
            <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200" smooth={true} to="about-me" offset={-150}>
                <span className="hidden max-[1000px]:block"><i className="fa-solid fa-user"></i></span>
            </Link>
            <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200" smooth={true} to="competitions" offset={-150}>
                <span className="hidden max-[1000px]:block"><i className="fa-solid fa-graduation-cap"></i></span>
            </Link>
            <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200" smooth={true} to="projects" offset={-150}>
                <span className="hidden max-[1000px]:block"><i className="fa-solid fa-code"></i></span>
            </Link>
            <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200" smooth={true} to="contact" offset={-150}>
                <span className="hidden max-[1000px]:block"><i className="fa-solid fa-envelope"></i></span>
            </Link>
        </nav>
    )
}

export default Header_icons;