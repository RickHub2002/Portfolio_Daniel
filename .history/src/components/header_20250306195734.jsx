import { Link } from "react-scroll";

function Header() {
    return(
        <header id="headerContent" className="w-full mx-auto text-center">
            <nav id="navContent" className="flex gap-8 justify-center items-center text-xl font-regular bg-blue-500">
                <Link className="hover:cursor-pointer">Home</Link>
                <Link className="hover:cursor-pointer">Sobre mim</Link>
                <Link className="hover:cursor-pointer">Serviços</Link>
                <Link className="hover:cursor-pointer">Projetos</Link>
                <Link className="hover:cursor-pointer">Contato</Link>
                <button id="cvButton" className="cursor-pointer bg-[var(--cor-50)] h-[52px] w-[188px] rounded-md">Download CV</button>
                <button>Iscuro</button>
            </nav>
        </header>
    )
}

export default Header;