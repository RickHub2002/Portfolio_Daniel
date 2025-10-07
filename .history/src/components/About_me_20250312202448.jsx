import Profile from "./Profile";
import Skills from "./Skills";

function About_me() {
    return (
        <section className="flex gap-10 pb-10 bg-red-500">
            <div className="max-w-[50%] bg-orange-500">
                <h1 className="text-3xl text-black dark:text-white font-bold mb-8 sm:text-4xl md:text-6xl max-lg:text-center">Sobre mim</h1>
                <p>Sint duis exercitation ad labore consequat voluptate. Nisi magna aute dolor id reprehenderit in non non nostrud amet. Mollit adipisicing adipisicing do amet et pariatur sint velit. Laboris voluptate anim adipisicing Lorem officia ea eu cillum nisi voluptate proident cupidatat velit irure. Id laboris in ex Lorem enim enim deserunt dolor sit minim non non velit eu.</p>
            </div>
            <div className="bg-blue-500 w-full pt-20.25">
                <Skills name="HTML" level={70} />
                <Skills name="CSS" level={70} />
                <Skills name="PYTHON" level={60} />
                <Skills name="DJANGO" level={60} />
                <Skills name="VUE.JS" level={40} />
                <Skills name="TAILWINDCSS" level={40} />
                <Skills name="JAVASCRIPT" level={40} />
                <Skills name="HTMLREACT.JS" level={30} />
                <Skills name="JAVA" level={20} />
            </div>
        </section>
    )
};

export default About_me;