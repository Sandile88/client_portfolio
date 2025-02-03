import About from "./components/About";
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
    </>
  );
}
