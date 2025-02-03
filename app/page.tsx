import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
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
    </>
  );
}
