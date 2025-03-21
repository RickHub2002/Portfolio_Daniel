import Header from "../components/Header";

function Pagina_inicial() {
    return(
        <>
            <section className="bg-blue-500 w-full min-h-vh h-dvh">
                <Header />
                <main>
                    <section>
                        <div>
                            <h3>Olá! Eu sou</h3>
                            <h3>Daniel Rezes</h3>
                            <div>
                                <h1>DESENVOLVEDOR</h1>
                                <h1>BACK-END</h1>
                            </div>
                            <p>Dolore fugiat in esse qui do voluptate Lorem aliquip est est amet labore officia. Nisi proident Lorem qui mollit laborum dolore. Proident incididunt do deserunt velit pariatur et aute non laboris commodo tempor cupidatat laborum sit. Sunt non elit excepteur elit. Proident deserunt deserunt ipsum ut nostrud sunt commodo aute.</p>
                            <button>Download CV</button>
                        </div>
                    </section>
                    <section>
                        <h2>Sobre Mim</h2>
                    </section>
                </main>
            </section>
                
        </>
    )
}

export default Pagina_inicial;