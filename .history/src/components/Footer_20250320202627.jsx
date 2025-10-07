import { Link } from "react-scroll";
import Social_medias from "./Social_medias";

function Footer() {
    return (
        <footer className="w-full flex flex-col justify-center gap-8 bg-white dark:bg-[var(--black-500)] shadow-sm">
            <nav id="navContent" className="w-full flex justify-center items-center p-2 gap-8 text-xl font-regular text-black dark:text-white">
                <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200">
                    <span className="hidden max-[1000px]:block"><i className="fa-solid fa-house"></i></span>
                </Link>
                <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200">
                    <span className="hidden max-[1000px]:block"><i className="fa-solid fa-house"></i></span>
                </Link>
                <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200">
                    <span className="hidden max-[1000px]:block"><i className="fa-solid fa-user"></i></span>
                </Link>
                <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200">
                    <span className="hidden max-[1000px]:block"><i className="fa-solid fa-folder"></i></span>
                </Link>
                <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200">

                    <span className="hidden max-[1000px]:block"><i className="fa-solid fa-code"></i></span>
                </Link>
                <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200">
                    <span className="hidden max-[1000px]:block"><i className="fa-solid fa-envelope"></i></span>
                </Link>
            </nav>
            <Social_medias />
            <div className="w-full bg-black p-4 align-center">
                <i class="fas fa-copyright text-black dark:text-white text-xl"></i>
            </div>
        </footer>
    )
}

export default Footer;