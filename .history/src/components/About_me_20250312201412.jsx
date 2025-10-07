import Profile from "./Profile";
import Skills from "./Skills";

function About_me() {
    return(
        <section className="pb-10">
            <Profile />
            <div>
                <h1>Sobre mim</h1>
                <p>Sint duis exercitation ad labore consequat voluptate. Nisi magna aute dolor id reprehenderit in non non nostrud amet. Mollit adipisicing adipisicing do amet et pariatur sint velit. Laboris voluptate anim adipisicing Lorem officia ea eu cillum nisi voluptate proident cupidatat velit irure. Id laboris in ex Lorem enim enim deserunt dolor sit minim non non velit eu.</p>
                <Skills name="HTML" level={80}/>
                <Skills name="HTML" level={80}/>
                <Skills name="HTML" level={80}/>
                <Skills name="HTML" level={80}/>
                <Skills name="HTML" level={80}/>
                <Skills name="HTML" level={80}/>
                <Skills name="HTML" level={80}/>
            </div>
        </section>
    )
};

export default About_me;