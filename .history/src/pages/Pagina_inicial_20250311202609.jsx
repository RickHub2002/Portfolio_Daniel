import Header from "../components/Header";
import Introduction from "../components/Introduction";

function Pagina_inicial() {
    return (
        <section className="bg-white dark:bg-[var(--black-500)] w-full min-h-dvh h-vh">
            <Header />
            <main className="pt-40 px-[13%]">
                <Introduction />
            </main>
        </section>
    )
}

export default Pagina_inicial;