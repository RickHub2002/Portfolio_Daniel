import { Link } from "react-scroll";

function Header() {
    return(
        <header id="headerContent" className="w-full mx-auto text-center">
            <nav id="navContent">
                <Link className="links">Home</Link>
                <Link className="links">Sobre mim</Link>
                <Link className="links">Serviços</Link>
                <Link className="links">Projetos</Link>
                <Link className="links">Contato</Link>
                <button id="cvButton" className="cursor-pointer bg-[--rosa-50]">Download CV</button>
            </nav>
        </header>
    )
}

export default Header;