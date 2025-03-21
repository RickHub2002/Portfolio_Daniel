import Profile from "./Profile";

function Introduction() {
    return (
        <section>
            <div>
                <h3 className="text-black dark:text-white text-[text-2xl] font-semibold">Olá! Eu sou</h3>
                <h3 className="text-[var(--cor-200)] text-3xl font-semibold">Daniel Rezes</h3>
                <div className="text-4xl font-bold">
                    <h1 className="text-black dark:text-white">DESENVOLVEDOR</h1>
                    <h1 className="ml-10">BACK-END</h1>
                </div>
                <p>Dolore fugiat in esse qui do voluptate Lorem aliquip est est amet labore officia. Nisi proident Lorem qui mollit laborum dolore. Proident incididunt do deserunt velit pariatur et aute non laboris commodo tempor cupidatat laborum sit. Sunt non elit excepteur elit. Proident deserunt deserunt ipsum ut nostrud sunt commodo aute.</p>
                <button>Download CV</button>
            </div>
            <Profile />
        </section>
    )
}

export default Introduction;