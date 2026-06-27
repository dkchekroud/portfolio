"use client";

import FadeIn from "./FadeIn";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <FadeIn>
      <section
        id="projects"
        className="px-6 py-32 max-w-7xl mx-auto"
      >
        <div className="mb-20">
          <p className="text-gray-400 uppercase tracking-widest mb-4">
            {t("subtitle")}
          </p>

          <h2 className="text-5xl font-bold">
            {t("title")}
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
                {t("project1.description")}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">

                <span className="px-3 py-1 rounded-full bg-white/10">
                  Flask
                </span>

                <span className="px-3 py-1 rounded-full bg-white/10">
                  Tailwind
                </span>

                <span className="px-3 py-1 rounded-full bg-white/10">
                  SQLite
                </span>

                <span className="px-3 py-1 rounded-full bg-white/10">
                  Jinja2
                </span>

              </div>

              <div className="flex gap-4 mt-8">

                <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition">
                  {t("live")}
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
                {t("project2.description")}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">

                <span className="px-3 py-1 rounded-full bg-white/10">
                  PyTorch
                </span>

                <span className="px-3 py-1 rounded-full bg-white/10">
                  CNN
                </span>

                <span className="px-3 py-1 rounded-full bg-white/10">
                  VQ-VAE
                </span>

                <span className="px-3 py-1 rounded-full bg-white/10">
                  Python
                </span>

              </div>

              <div className="flex gap-4 mt-8">

                <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition">
                  {t("research")}
                </button>

                <button className="border border-white/20 px-5 py-2 rounded-xl hover:bg-white hover:text-black transition">
                  {t("details")}
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>
    </FadeIn>
  );
}