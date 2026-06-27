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
 <main className="pt-28 bg-black text-white min-h-screen relative overflow-hidden">
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-500/35 rounded-full blur-[160px]" />

<div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-blue-500/25 rounded-full blur-[160px]" />
      <Navbar />

      <Hero />
      <About />
      <Contact />
      <Skills />
      <Projects />
      <Footer />

      <ScrollToTop />
    </main>
  );
}
