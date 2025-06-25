import Skills2 from "./Skills2";

function Competitions() {
    return (
        <section id="competitions">
                <h1 className="text-3xl text-left text-black dark:text-white font-semibold mb-8 sm:text-4xl md:text-6xl">Competências</h1>
                <ul className="flex flex-col gap-10 border-b-1 text-black pb-10 list-disc dark:text-white">
                    <li className="">
                        <h2>Tecnólogo em Sistemas para Internet</h2>
                        <p>IFRN – Campus Avançado Zona Leste – Natal/RN</p>
                        <p>2023 – Atualmente</p>
                        <p>Curso de Tecnologia em Sistemas para Internet, com foco no desenvolvimento de soluções para a web, abrangendo áreas como front-end, back-end e banco de dados.</p>
                    </li>
                    <li>
                        <h2>Técnico integrado em eletrônica</h2>
                        <p>IFRN – Campus Natal Zona Norte – Natal/RN</p>
                        <p>2018 - 2022</p>
                        <p><p>Ensino médio integrado ao técnico, com ênfase em eletrônica, abordando fundamentos de circuitos, sistemas digitais, eletrônica analógica e prática em laboratório.</p></p>
                    </li>
                </ul>
            <div className="w-full pt-20">
                <Skills2 />
            </div>
        </section>
    )
};

export default Competitions;