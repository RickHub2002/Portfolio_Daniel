import Header from "../components/Header";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import About_me from "../components/About_me";
import Projects from "../components/Projects";
import Competitions from "../components/Competitions";
import Contact from "../components/Contact";
import Header_icons from "../components/Header_icons";


function Pagina_inicial() {
    return (
        <section className="bg-white w-full min-h-dvh h-vh dark:bg-[var(--black-500)]">
            <Header />
            <Header_icons />
            <main className="pt-40 px-[13%]">
                <Introduction />
                <About_me />
                <Competitions />
                <Projects />
                <Contact />
            </main>
            <Footer/>
        </section>
    )
}

export default Pagina_inicial;