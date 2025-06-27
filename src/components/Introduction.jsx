import Profile from "./Profile";

function Introduction() {
    return (
        <section id="introduction" className="flex flex-col gap-5 my-10 lg:flex-row lg:items-center lg:justify-between lg:gap-25">
            <div className="lg:flex-grow lg:max-w-[60%]">
                <h3 className="text-black dark:text-white text-1xl font-semibold mb-2 sm:text-2xl">Olá! Eu sou</h3>
                <h3 className="text-[var(--cor-500)] text-2xl font-semibold mb-2 sm:text-3xl dark:text-[var(--cor-200)]">Daniel Rezes</h3>
                <div className="text-3xl text-black dark:text-white font-bold mb-8 sm:text-4xl md:text-6xl">
                    <h1 className="">DESENVOLVEDOR</h1>
                    <h1 className="lg:ml-20">BACK-END</h1>
                </div>
                <p className="text-black mb-6 dark:text-white">
                    Desenvolvedor focado em back-end, sempre buscando aprender mais e resolver problemas de forma prática. Gosto de escrever código limpo e pensar em soluções que funcionem de verdade, sem enrolação.
                </p>

                <a href="https://drive.google.com/file/d/1S2p5CS-8cHLl3y5fsJDfFtnqftpoDBMf/view?usp=sharing" target="_blank"><button className="bg-[var(--cor-400)] w-40 h-12 ease-in duration-300 cursor-pointer  hover:bg-inherit hover:border-1 hover:border-[var(--cor-400)] hover:rounded-sm dark:hover:text-white">Download CV</button></a>
            </div>
            <Profile />
        </section>
    )
}

export default Introduction;