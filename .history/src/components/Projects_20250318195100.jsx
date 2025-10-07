function Projects() {
    return(
        <section>
            <h1 className="text-3xl text-center text-black dark:text-white font-semibold mb-8 sm:text-4xl md:text-6xl">Meus projetos</h1>
            <p className="text-black dark:text-white text-xl">Quis laboris id non anim dolore in aliqua in dolor id velit mollit. exercitation commodo laboris culpa sit irure aliquip consectetur ipsum esse. Quis excepteur amet exercitation consequat velit velit minim sunt cillum ipsum eiusmod.</p>
            <ul className="flex flex-col gap-5">
                <li className="flex flex-col gap-2">
                    <img src="../src/assets/Logicentro.jpg" />
                    <h4 className="text-[var(--cor-400)]">Logicentro</h4>
                    <p className="text black dark:text-white">Gerenciador de mercadorias</p>
                </li>
                <li>
                    <img src="../src/assets/Portal_dizimista.jpg" />
                    <h4>Portal do Dizimista</h4>
                    <p>Gerenciador de dizimistas</p>
                </li>
            </ul>
        </section>
    )
}

export default Projects;