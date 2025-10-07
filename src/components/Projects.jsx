import logicentroImg from '../assets/Logicentro.jpg';
import dizimistaImg from '../assets/Portal_dizimista.jpg';

function Projects() {
    return (
        <section id="projects" className="my-30">
            <h1 className="text-3xl text-center text-black dark:text-white font-semibold mb-8 sm:text-4xl md:text-6xl">Meus projetos</h1>
            <ul className="flex flex-col gap-5 mt-15 min-md:flex-row">
                <li className="flex flex-col gap-2 duration-400 ease hover:brightness-80">
                    <a href="https://github.com/mikaelacduarte/logicentro" target="_blank">
                        <img src={logicentroImg} alt="Logicentro" />
                        <h4 className="text-[var(--cor-500)] dark:text-[var(--cor-400)]">Logicentro</h4>
                        <p className="text black dark:text-white">Gerenciador de mercadorias</p>
                    </a>
                </li>
                <li className="flex flex-col gap-2 duration-400 ease hover:brightness-80">
                    <a href="https://github.com/DanielRezez/projeto-dizimista" target="_blank">
                        <img src={dizimistaImg} alt="Portal do Dizimista" />
                        <h4 className="text-[var(--cor-500)] dark:text-[var(--cor-400)]">Portal do Dizimista</h4>
                        <p className="text black dark:text-white">Gerenciador de dizimistas</p>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Projects;
