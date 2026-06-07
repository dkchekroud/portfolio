import Navbar from "@/components/Navbar";
import FadeIn from "@/components/FadeIn";
import ScrollToTop from "./ScrollToTop";

export default function Home() {
  return (
    <main className= "pt-28 bg-black text-white min-h-screen relative overflow-hidden">
<div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]" />

<div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px]" />
      <Navbar />

      <section className="h-screen flex flex-col items-center justify-center text-center px-6">

        <p className="text-gray-400 mb-4 tracking-widest">
          FULL STACK DEVELOPER
        </p>

        <h1 className="text-6xl md:text-8xl font-bold">
          Kamelia CHEKROUD 
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl text-lg">
          Passionate Full Stack Developer specialized in modern web
          applications, AI solutions, and scalable educational platforms.
        </p>
        
        <a
  href="/Academic CV - Kamelia Chekroud.pdf"
  className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
>
  Academic CV
</a>
      </section>

<FadeIn>
      <section
  id="about"
  className="min-h-screen px-6 py-32 max-w-7xl mx-auto"
>

  <div className="grid md:grid-cols-2 gap-16 items-center">

    <div>
      <p className="text-gray-400 uppercase tracking-widest mb-4">
        About Me
      </p>

      <h2 className="text-5xl font-bold mb-8">
        Full Stack Developer & AI Researcher
      </h2>

      <p className="text-gray-400 leading-8 text-lg">
        Passionate developer specialized in modern web technologies,
        educational platforms, and artificial intelligence solutions.
        Experienced in building scalable full-stack applications with
        multilingual support, admin dashboards, and responsive interfaces.
      </p>

      <p className="text-gray-400 leading-8 text-lg mt-6">
        Currently working on software engineering and AI projects,
        combining clean UI/UX design with powerful backend architectures.
      </p>

    </div>

    <div className="grid grid-cols-2 gap-6">

      <div className="border border-white/10 p-6 rounded-2xl bg-white/5">
        <h3 className="text-3xl font-bold mb-2">10+</h3>
        <p className="text-gray-400">
          Technologies
        </p>
      </div>

      <div className="border border-white/10 p-6 rounded-2xl bg-white/5">
        <h3 className="text-3xl font-bold mb-2">3+</h3>
        <p className="text-gray-400">
          Major Projects
        </p>
      </div>

      <div className="border border-white/10 p-6 rounded-2xl bg-white/5">
        <h3 className="text-3xl font-bold mb-2">AI</h3>
        <p className="text-gray-400">
          Deep Learning
        </p>
      </div>

      <div className="border border-white/10 p-6 rounded-2xl bg-white/5">
        <h3 className="text-3xl font-bold mb-2">Full</h3>
        <p className="text-gray-400">
          Stack Development
        </p>
      </div>

    </div>

  </div>

</section>
</FadeIn>


<FadeIn>
<section
  id="projects"
  className="px-6 py-32 max-w-7xl mx-auto"
>

  <div className="mb-20">

    <p className="text-gray-400 uppercase tracking-widest mb-4">
      Projects
    </p>

    <h2 className="text-5xl font-bold">
      Featured Projects
    </h2>

  </div>

  <div className="grid md:grid-cols-2 gap-8">

    {/* PROJECT 1 */}

    <div className="group border border-white/10 rounded-3xl overflow-hidden bg-white/5 hover:bg-white/10 hover:-translate-y-2 transition duration-500">

      <div className="h-60 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
        <h3 className="text-3xl font-bold">
          ESSS Platform
        </h3>
      </div>

      <div className="p-8">

        <p className="text-gray-400 leading-7">
          Dynamic multilingual educational platform with admin dashboard,
          e-learning integration, authentication system, and responsive UI.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">

          <span className="px-3 py-1 rounded-full bg-white/10 text-sm">
            Flask
          </span>

          <span className="px-3 py-1 rounded-full bg-white/10 text-sm">
            Tailwind
          </span>

          <span className="px-3 py-1 rounded-full bg-white/10 text-sm">
            SQLite
          </span>

          <span className="px-3 py-1 rounded-full bg-white/10 text-sm">
            Jinja2
          </span>

        </div>

        <div className="flex gap-4 mt-8">

          <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition">
            Live Demo
          </button>

          <button className="border border-white/20 px-5 py-2 rounded-xl hover:bg-white hover:text-black transition">
            GitHub
          </button>

        </div>

      </div>

    </div>

    {/* PROJECT 2 */}

    <div className="group border border-white/10 rounded-3xl overflow-hidden bg-white/5 hover:bg-white/10 hover:-translate-y-2 transition duration-500">

      <div className="h-60 bg-gradient-to-br from-green-500/20 to-cyan-500/20 flex items-center justify-center">
        <h3 className="text-3xl font-bold text-center">
          Medical Data Compression
        </h3>
      </div>

      <div className="p-8">

        <p className="text-gray-400 leading-7">
          Deep learning project for efficient medical dataset compression
          while preserving diagnostic quality using neural networks.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">

          <span className="px-3 py-1 rounded-full bg-white/10 text-sm">
            PyTorch
          </span>

          <span className="px-3 py-1 rounded-full bg-white/10 text-sm">
            CNN
          </span>

          <span className="px-3 py-1 rounded-full bg-white/10 text-sm">
            VQ-VAE
          </span>

          <span className="px-3 py-1 rounded-full bg-white/10 text-sm">
            Python
          </span>

        </div>

        <div className="flex gap-4 mt-8">

          <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition">
            Research
          </button>

          <button className="border border-white/20 px-5 py-2 rounded-xl hover:bg-white hover:text-black transition">
            Details
          </button>

        </div>

      </div>

    </div>

  </div>

</section>
</FadeIn>

<FadeIn>
<section
  id="skills"
  className="px-6 py-32 max-w-7xl mx-auto"
>

  <div className="mb-20">

    <p className="text-gray-400 uppercase tracking-widest mb-4">
      Skills
    </p>

    <h2 className="text-5xl font-bold">
      Technologies I Use
    </h2>

  </div>

  <div className="grid md:grid-cols-3 gap-8">

    {/* FRONTEND */}

    <div className="border border-white/10 rounded-3xl p-8 bg-white/5 hover:bg-white/10 transition">

      <h3 className="text-2xl font-bold mb-8">
        Frontend
      </h3>

      <div className="flex flex-wrap gap-3">

        <span className="px-4 py-2 rounded-full bg-white/10">
          React
        </span>

        <span className="px-4 py-2 rounded-full bg-white/10">
          Next.js
        </span>

        <span className="px-4 py-2 rounded-full bg-white/10">
          Tailwind CSS
        </span>

        <span className="px-4 py-2 rounded-full bg-white/10">
          HTML
        </span>

        <span className="px-4 py-2 rounded-full bg-white/10">
          CSS
        </span>

        <span className="px-4 py-2 rounded-full bg-white/10">
          JavaScript
        </span>

      </div>

    </div>

    {/* BACKEND */}

    <div className="border border-white/10 rounded-3xl p-8 bg-white/5 hover:bg-white/10 transition">

      <h3 className="text-2xl font-bold mb-8">
        Backend
      </h3>

      <div className="flex flex-wrap gap-3">

        <span className="px-4 py-2 rounded-full bg-white/10">
          Flask
        </span>

        <span className="px-4 py-2 rounded-full bg-white/10">
          Node.js
        </span>

        <span className="px-4 py-2 rounded-full bg-white/10">
          PHP
        </span>

        <span className="px-4 py-2 rounded-full bg-white/10">
          Django
        </span>

        <span className="px-4 py-2 rounded-full bg-white/10">
          MySQL
        </span>

        <span className="px-4 py-2 rounded-full bg-white/10">
          PostgreSQL
        </span>

      </div>

    </div>

    {/* AI */}

    <div className="border border-white/10 rounded-3xl p-8 bg-white/5 hover:bg-white/10 transition">

      <h3 className="text-2xl font-bold mb-8">
        AI & Data
      </h3>

      <div className="flex flex-wrap gap-3">

        <span className="px-4 py-2 rounded-full bg-white/10">
          PyTorch
        </span>

        <span className="px-4 py-2 rounded-full bg-white/10">
          CNN
        </span>

        <span className="px-4 py-2 rounded-full bg-white/10">
          NumPy
        </span>

        <span className="px-4 py-2 rounded-full bg-white/10">
          SciPy
        </span>

        <span className="px-4 py-2 rounded-full bg-white/10">
          Deep Learning
        </span>

        <span className="px-4 py-2 rounded-full bg-white/10">
          Python
        </span>

      </div>

    </div>

  </div>

</section>
</FadeIn>

<section
  id="contact"
  className="px-6 py-32 max-w-5xl mx-auto text-center"
>

  <p className="text-gray-400 uppercase tracking-widest mb-4">
    Contact
  </p>

  <h2 className="text-5xl font-bold mb-8">
    Let’s Work Together
  </h2>

  <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-8">
    Interested in collaborating, building innovative projects,
    or discussing opportunities in Full Stack Development
    and Artificial Intelligence.
  </p>

  <div className="flex flex-wrap justify-center gap-6 mt-12">

    
<a
  href="mailto:chekroud.kamiii@gmail.com?subject=Contact Portfolio&body=Bonjour,"
  className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
>
  📧 Email Me
</a>

<a
      href="https://wa.me/qr/JXDQSSGKT4UOL1"
      target="_blank"
      className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
    >
      WhatsApp
    </a>

    <a
      href="https://github.com/dkchekroud"
      target="_blank"
      className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
    >
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/kameliachekroud/"
      target="_blank"
      className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
    >
      LinkedIn
    </a>
    

    <a
      href="https://www.facebook.com/chekroud.kamelia/"
      target="_blank"
      className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
    >
      Facebook
    </a>
  </div>

</section>

<footer className="border-t border-white/10 py-8 text-center text-gray-500">
  © 2026 Kamelia Chekroud — Full Stack Developer
</footer>

<ScrollToTop />

    </main>
  );

  
}

