import Header from "../components/Header";
import Skills from "../components/Skills";

function Pagina_inicial() {
    return(
        <>
            <section className="bg-blue-500 w-full min-h-vh h-dvh">
                <Header />
                <main>
                    <Skills />
                </main>
            </section>     
        </>
    )
}

export default Pagina_inicial;