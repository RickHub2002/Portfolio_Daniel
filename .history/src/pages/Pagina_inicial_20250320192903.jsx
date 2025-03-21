import Header from "../components/Header";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import About_me from "../components/About_me";
import Projects from "../components/Projects";


function Pagina_inicial() {
    return (
        <section className="bg-white dark:bg-[var(--black-500)] w-full min-h-dvh h-vh">
            <Header />
            <main className="pt-40 px-[13%]">
                <Introduction />
                <About_me />
                <Projects />
            </main>
            <Footer className="lg:hidden" />
        </section>
    )
}

export default Pagina_inicial;