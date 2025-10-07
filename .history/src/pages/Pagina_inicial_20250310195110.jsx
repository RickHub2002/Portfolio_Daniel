import Header from "../components/Header";
import Introduction from "../components/Introduction";

function Pagina_inicial() {
    return (
        <section className="bg-[var(--black-500)] w-full min-h-vh h-dvh">
            <Header />
            <main className="pt-40 max-w-[70%]">
                <Introduction />
            </main>
        </section>
    )
}

export default Pagina_inicial;