"use client";

import FadeIn from "./FadeIn";
import { useTranslations } from "next-intl";
import {
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <FadeIn>
      <section
        id="contact"
        className="px-6 py-32 max-w-5xl mx-auto text-center"
      >
        <p className="text-gray-400 uppercase tracking-widest mb-4 ">
          {t("subtitle")}
        </p>

        <h2 className="text-5xl font-bold mb-8 ">
          {t("title")}
        </h2>

        <p className="text-gray-400 text-lg text-start max-w-2xl mx-auto leading-8 ">
          {t("description")}
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-12">

          <a
  href="mailto:chekroud.kamiii@gmail.com?subject=Contact Portfolio&body=Bonjour,"
  className="flex items-center gap-3 border border-white/20 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
>
  <FaEnvelope className="text-xl" />
  <span>{t("email")}</span>
</a>

          <a
  href="https://wa.me/qr/JXDQSSGKT4UOL1"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 border border-white/20 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
>
  <FaWhatsapp className="text-green-500 text-xl" />
  <span>WhatsApp</span>
</a>

          <a
  href="https://github.com/dkchekroud"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 border border-white/20 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
>
  <FaGithub className="text-xl" />
  <span>GitHub</span>
</a>

          <a
  href="https://www.linkedin.com/in/kameliachekroud/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 border border-white/20 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
>
  <FaLinkedin className="text-blue-500 text-xl" />
  <span>LinkedIn</span>
</a>

          <a
  href="https://www.facebook.com/chekroud.kamelia/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 border border-white/20 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
>
  <FaFacebook className="text-blue-600 text-xl" />
  <span>Facebook</span>
</a>

        </div>
      </section>
    </FadeIn>
  );
}