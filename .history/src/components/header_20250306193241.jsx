import { Link } from "react-scroll";

function Header() {
    return(
        <header id="headerContent">
            <nav id="navContent">
                <Link className="links">Home</Link>
                <Link className="links">Sobre mim</Link>
                <Link className="links">Serviços</Link>
                <Link className="links">Projetos</Link>
                <Link className="links">Contato</Link>
                <button id="cvButton">Download CV</button>
            </nav>
        </header>
    )
}

export default Header;