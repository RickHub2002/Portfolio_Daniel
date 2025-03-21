import Header from "../components/Header";

function Pagina_inicial() {
    return(
        <>
            <section className="bg-blue-500 w-full min-h-vh h-dvh">
                <Header />
                <main>
                    <section>
                        <div>
                            <h2>Olá! Eu sou</h2>
                            <h2>Daniel Rezes</h2>
                            <div>
                                <h1>DESENVOLVEDOR</h1>
                                <h1>BACK-END</h1>
                            </div>
                            <p></p>
                        </div>
                    </section>
                </main>
            </section>
                
        </>
    )
}

export default Pagina_inicial;