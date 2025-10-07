import { Link } from "react-scroll";

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
            <div className="flex justify-center items-center gap-2.5 dark:text-white">
                <a href="mailto:danielrezez@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                <a href="https://www.instagram.com/daniel.rezes/" target="_blank"><i class="fa-brands fa-instagram" className="w-30 h-30"></i></a>
                <a href="https://github.com/DanielRezez" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/daniel-rezez-293740207/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </footer>
    )
}

export default Footer;