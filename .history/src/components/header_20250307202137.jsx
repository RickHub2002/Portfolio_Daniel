import { Link } from "react-scroll";

function Header() {
    return (
        <header id="headerContent" className="w-full flex justify-center items-start">
            <nav id="navContent" className="w-full h-10 flex justify-center items-center p-24 gap-8 text-xl font-regular bg-blue-400">
                <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200">
                    <span className="max-[1000px]:hidden">Home</span>
                    <span className="hidden max-[1000px]:block"><i className="fa-solid fa-house"></i></span>
                </Link>

                <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200">
                    <span className="max-[1000px]:hidden">Sobre mim</span>
                    <span className="hidden max-[1000px]:block"><i className="fa-solid fa-user"></i></span>
                </Link>

                <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200">
                    <span className="max-[1000px]:hidden">Projetos</span>
                    <span className="hidden max-[1000px]:block"><i className="fa-solid fa-folder"></i></span>
                </Link>

                <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200">
                    <span className="max-[1000px]:hidden">Competências</span>
                    <span className="hidden max-[1000px]:block"><i className="fa-solid fa-code"></i></span>
                </Link>

                <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200">
                    <span className="max-[1000px]:hidden">Contato</span>
                    <span className="hidden max-[1000px]:block"><i className="fa-solid fa-envelope"></i></span>
                </Link>
                <button id="themeToggle" className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 transition">
                    <i className="fa-solid fa-moon dark:hidden"></i>
                    <i className="fa-solid fa-sun hidden dark:block"></i>
                </button>

            </nav>
        </header>
    )
}

export default Header;