import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
    <Nav/>
    <Hero/>
    <About/>
    <Services/>
    <Experience/>
    <Contact/>
    <Footer/>
    </>
  );
}
