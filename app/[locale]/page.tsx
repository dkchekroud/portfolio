import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
  <main
  className="pt-28 min-h-screen text-white relative overflow-hidden
  bg-gradient-to-br from-violet-800 via-[#24193d] to-[#101010]"
>

      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-violet-500/40 rounded-full blur-[170px]" />

<div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-500/25 rounded-full blur-[170px]" />

      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      <ScrollToTop />
    </main>
  );
}
