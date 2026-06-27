"use client";

import FadeIn from "./FadeIn";
import { useTranslations } from "next-intl";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiFlask,
  SiNodedotjs,
  SiPhp,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiPytorch,
  SiPython,
  SiNumpy,
  SiTensorflow,
  SiOpencv,
  SiScipy
} from "react-icons/si";


export default function Skills() {
  const t = useTranslations("skills");

  return (
    <FadeIn>
      <section
        id="skills"
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

        <div className="grid md:grid-cols-3 gap-8">

          {/* FRONTEND */}
          <div className="border border-white/10 rounded-3xl p-8 bg-white/5 hover:bg-white/10 transition">
            <h3 className="text-2xl font-bold mb-8">
              {t("frontend")}
            </h3>

           <div className="grid grid-cols-2 gap-4">

<div className="flex items-center gap-3">
<SiReact className="text-cyan-400 text-2xl" />
React
</div>

<div className="flex items-center gap-3">
<SiNextdotjs className="text-white text-2xl" />
Next.js
</div>

<div className="flex items-center gap-3">
<SiTailwindcss className="text-sky-400 text-2xl" />
Tailwind CSS
</div>

<div className="flex items-center gap-3">
<SiHtml5 className="text-orange-500 text-2xl" />
HTML
</div>

<div className="flex items-center gap-3">
<SiCss className="text-blue-500 text-2xl" />
CSS
</div>

<div className="flex items-center gap-3">
<SiJavascript className="text-yellow-400 text-2xl" />
JavaScript
</div>

</div>
          </div>

          {/* BACKEND */}
          <div className="border border-white/10 rounded-3xl p-8 bg-white/5 hover:bg-white/10 transition">
            <h3 className="text-2xl font-bold mb-8">
              {t("backend")}
            </h3>

            <div className="space-y-4">

  <div className="flex items-center gap-3">
    <SiFlask className="text-gray-300 text-2xl" />
    <span>Flask</span>
  </div>

  <div className="flex items-center gap-3">
    <SiNodedotjs className="text-green-500 text-2xl" />
    <span>Node.js</span>
  </div>

  <div className="flex items-center gap-3">
    <SiPhp className="text-indigo-400 text-2xl" />
    <span>PHP</span>
  </div>

  <div className="flex items-center gap-3">
    <SiDjango className="text-green-400 text-2xl" />
    <span>Django</span>
  </div>

  <div className="flex items-center gap-3">
    <SiMysql className="text-blue-500 text-2xl" />
    <span>MySQL</span>
  </div>

  <div className="flex items-center gap-3">
    <SiPostgresql className="text-sky-500 text-2xl" />
    <span>PostgreSQL</span>
  </div>

</div>
          </div>

          {/* AI */}
          <div className="border border-white/10 rounded-3xl p-8 bg-white/5 hover:bg-white/10 transition">
            <h3 className="text-2xl font-bold mb-8">
              {t("ai")}
            </h3>

            <div className="space-y-4">

  <div className="flex items-center gap-3">
    <SiPytorch className="text-orange-500 text-2xl" />
    <span>PyTorch</span>
  </div>

  <div className="flex items-center gap-3">
    <SiPython className="text-yellow-400 text-2xl" />
    <span>Python</span>
  </div>

  <div className="flex items-center gap-3">
    <SiNumpy className="text-blue-400 text-2xl" />
    <span>NumPy</span>
  </div>

  <div className="flex items-center gap-3">
    <SiScipy className="text-blue-500 text-2xl" />
    <span>SciPy</span>
  </div>

  <div className="flex items-center gap-3">
    <SiTensorflow className="text-orange-400 text-2xl" />
    <span>Deep Learning</span>
  </div>

  <div className="flex items-center gap-3">
    <SiOpencv className="text-red-500 text-2xl" />
    <span>Computer Vision</span>
  </div>

</div>
          </div>

        </div>
      </section>
    </FadeIn>
  );
}