import Profile from "./Profile";
import Skills from "./Skills";

function About_me() {
    return (
        <section id="about-me">
            <div className="w-full my-20">
                <h1 className="text-3xl text-left text-black dark:text-white font-semibold mb-8 sm:text-4xl md:text-6xl">Sobre mim</h1>
                <p className="text-black dark:text-white text-xl">Escatologia é uma área que explora o estudo das substâncias excretadas pelo corpo, e eu, particularmente, me fascino pela relação entre o ser humano e o processo digestivo. A textura das fezes, em particular, oferece uma reflexão sobre nossa saúde e os mistérios do corpo. Alguns até dizem que apreciar certos aspectos da natureza humana é um exercício filosófico, mas é claro, isso pode ser... um tanto inusitado para alguns.</p>
            </div>
        </section>
    )
};

export default About_me;