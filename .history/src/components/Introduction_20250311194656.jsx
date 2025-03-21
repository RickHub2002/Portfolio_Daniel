import Profile from "./Profile";

function Introduction() {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-center gap-15">
            <div className="lg:flex-grow lg:max-w-[70%]">
                <h3 className="text-black dark:text-white text-1xl font-semibold mb-2 sm:text-2xl">Olá! Eu sou</h3>
                <h3 className="text-[var(--cor-200)] text-2xl font-semibold mb-2 sm:text-3xl">Daniel Rezes</h3>
                <div className="text-3xl text-black dark:text-white font-bold mb-8 sm:text-4xl md:text-6xl">
                    <h1 className="">DESENVOLVEDOR</h1>
                    <h1 className="ml-20">BACK-END</h1>
                </div>
                <p className="text-black mb-6 dark:text-white">Dolore fugiat in esse qui do voluptate Lorem aliquip est est amet labore officia. Nisi proident Lorem qui mollit laborum dolore. Proident incididunt do deserunt velit pariatur et aute non laboris commodo tempor cupidatat laborum sit. Sunt non elit excepteur elit. Proident deserunt deserunt ipsum ut nostrud sunt commodo aute.</p>
                <button className="bg-[var(--cor-400)] w-40 h-12 hover:bg-inherit hover:border-1 hover:border-[var(--cor-400)] hover:rounded-sm ease-in-out duration-300 dark:hover:text-white">Download CV</button>
            </div>
            <Profile />
        </section>
    )
}

export default Introduction;