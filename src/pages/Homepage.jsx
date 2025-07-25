import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Project";
import Footer from "../components/Footer";
import Cerification from "../components/Cerification";
import "../index.css";

function Homepage() {
  return (
    <div className="bg-gray-900 w-100% overflow-hidden">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Cerification />
      <Footer />
    </div>
  );
}

export default Homepage;
