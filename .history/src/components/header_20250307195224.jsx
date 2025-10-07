import { Link } from "react-scroll";

function Header() {
    return(
        <header id="headerContent" className="w-full flex justify-center items-start bg-red-500 h-dvh">
            <nav id="navContent" className="w-full flex justify-center items-center gap-8 text-xl font-regular bg-blue-400">
                <Link className="hover:cursor-pointer hover:text-2xl ease-in-out duration-200">
                Home
                <i class="fa-solid fa-house" className="hidden bg-blue-500"></i>
                </Link>
                <Link className="hover:cursor-pointer">
                    Sobre mim
                <p className="max-[550px]:block hidden">Verdade</p>
                </Link>

                <Link className="hover:cursor-pointer">Projetos</Link>
                <Link className="hover:cursor-pointer">Competências</Link>
                <Link className="hover:cursor-pointer">Contato</Link>
                <button id="cvButton" className="cursor-pointer bg-[var(--cor-50)] h-[52px] w-[188px] rounded-md">Download CV</button>
                <button>Iscuro</button>
            </nav>
        </header>
    )
}

export default Header;