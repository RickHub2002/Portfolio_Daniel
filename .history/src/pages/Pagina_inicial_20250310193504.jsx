import Header from "../components/Header";
import Introduction from "../components/Introduction";

function Pagina_inicial() {
    return(
        <>
            <section className="bg-blue-500 w-full min-h-vh h-dvh">
                <Header />
                <main className="pt-40">
                    <Introduction />
                </main>
            </section>     
        </>
    )
}

export default Pagina_inicial;