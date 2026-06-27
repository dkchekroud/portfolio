"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("navbar");

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-white text-2xl font-bold">
          My Portfolio
        </h1>

        {/* Desktop Menu */}

        
        <div className="hidden md:flex gap-8 rtl:flex-row-reverse text-white">
          
           <a
  href="mailto:chekroud.kamiii@gmail.com?subject=Contact Portfolio&body=Bonjour,"
  className="hover:text-cyan-400 transition"
>
  {t("email")}
</a>

<a
      href="https://github.com/dkchekroud"
      className="hover:text-cyan-400 transition"
    >
      GitHub
    </a>
          
          <a href="#about" className="hover:text-cyan-400 transition">
            {t("about")}
          </a>
 <a href="#skills" onClick={() => setMenuOpen(false)}>
            {t("skills")}
          </a>
          
          <a href="#projects" className="hover:text-cyan-400 transition">
            {t("projects")}
          </a>
          
         
          
          <a href="#contact" className="hover:text-cyan-400 transition">
            {t("contact")}
          </a>
        </div>

        
       
{/* Mobile Button */}
<LanguageSwitcher />
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-start text-white">
      
      

          <a
  href="mailto:chekroud.kamiii@gmail.com?subject=Contact Portfolio&body=Bonjour,"
  className="hover:text-cyan-400 transition"
>
  {t("email")}
</a>

<a
      href="https://github.com/dkchekroud"
      className="hover:text-cyan-400 transition"
    >
      GitHub
    </a>
          
          <a href="#about" onClick={() => setMenuOpen(false)}>
            {t("about")}
          </a>

<a href="#skills" onClick={() => setMenuOpen(false)}>
            {t("skills")}
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            {t("projects")}
          </a>

    

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            {t("contact")}
          </a>
        </div>
      )}
    </nav>
  );
}