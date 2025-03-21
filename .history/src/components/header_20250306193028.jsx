import { Link } from "react-scroll";

function Header() {
    return(
        <header>
            <nav>
                <Link>Home</Link>
                <Link>Sobre mim</Link>
                <Link>Serviços</Link>
                <Link>Projetos</Link>
                <Link>Contato</Link>
                <button>Download CV</button>
            </nav>
        </header>
    )
}

export default Header;