import Home from "./home/page";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Experience from "./experience/page";
import Contact from "./contact/page";

export default function MainPage() {
  return (
    <div className="relative">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
