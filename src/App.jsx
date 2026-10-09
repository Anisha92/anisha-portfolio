import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      {/* Top navigation bar */}
      <Navbar />

      {/* Main content area */}
      <main>
        {/* Home / Hero section */}
        <section id="home">
          <Hero />
        </section>

        {/* About section */}
        <section id="about" className="pt-0">
          <About />
        </section>

        {/* Skills area */}
        <section id="skills" className="pt-0">
          <Skills />
        </section>

        {/* Experience/Internship section */}
        <section id="experience">
          <Experience />
        </section>

        {/* Projects showcase */}
        <section id="projects" className="pt-0">
          <Projects />
        </section>

        {/* Contact form + social links */}
        <section id="contact" className="pt-0">
          <Contact />
        </section>
      </main>

      {/* Footer stays at bottom on all pages */}
      <Footer />
    </>
  );
}

export default App;
