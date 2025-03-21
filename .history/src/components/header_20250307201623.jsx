import { Link } from "react-scroll";

function Header() {
    return (
        <header id="headerContent" className="w-full flex justify-center items-start bg-red-500 h-dvh">
            <nav id="navContent" className="w-full flex justify-center items-center gap-8 text-xl font-regular bg-blue-400">
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
                    id="cvButton"
                    className="cursor-pointer bg-[var(--cor-50)] text-white font-medium h-[52px] w-[188px] rounded-md flex items-center justify-center gap-2 hover:opacity-80 transition">
                    <i className="fa-solid fa-download"></i>
                    Download CV
                </button>

                <button>Iscuro</button>
            </nav>
        </header>
    )
}

export default Header;