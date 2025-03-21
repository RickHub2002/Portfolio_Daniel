import { Link } from "react-scroll";

function Footer() {
    return (
        <header className="fixed w-full flex justify-center pt-8 bg-white dark:bg-[var(--black-500)] shadow-sm">
            <nav id="navContent" className="w-full flex justify-center items-center p-2 gap-8 text-xl font-regular text-black dark:text-white">
                <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200">
                    <span className="max-[1000px]:hidden">Daniel</span>
                    <span className="hidden max-[1000px]:block"><i className="fa-solid fa-house"></i></span>
                </Link>
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
                <button
                    id="themeToggle"
                    className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 transition"
                    onClick={toggleTheme}
                >
                    {/* Exibe o ícone de lua se o modo não for escuro, e sol se for escuro */}
                    <i className={`fa-solid fa-moon ${!darkMode ? '' : 'hidden'}`}></i>
                    <i className={`fa-solid fa-sun ${darkMode ? '' : 'hidden'}`}></i>
                </button>
            </nav>
        </header>
    )
}

export default Footer;