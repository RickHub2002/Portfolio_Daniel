import Profile from "./Profile";

function Introduction() {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="max-w-[50%]">
                <h3 className="text-black dark:text-white text-1xl font-semibold sm:text-2xl">Olá! Eu sou</h3>
                <h3 className="text-[var(--cor-200)] text-2xl font-semibold sm:text-3xl">Daniel Rezes</h3>
                <div className="text-3xl text-black dark:text-white font-bold sm:text-4xl md:text-6xl lg:text-8xl">
                    <h1 className="">DESENVOLVEDOR</h1>
                    <h1 className="ml-20">BACK-END</h1>
                </div>
                <p>Dolore fugiat in esse qui do voluptate Lorem aliquip est est amet labore officia. Nisi proident Lorem qui mollit laborum dolore. Proident incididunt do deserunt velit pariatur et aute non laboris commodo tempor cupidatat laborum sit. Sunt non elit excepteur elit. Proident deserunt deserunt ipsum ut nostrud sunt commodo aute.</p>
                <button>Download CV</button>
            </div>
            <Profile />
        </section>
    )
}

export default Introduction;