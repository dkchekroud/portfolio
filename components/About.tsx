import FadeIn from "./FadeIn";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <FadeIn>
      <section
        id="about"
        className="min-h-screen px-6 py-32 max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gray-400 uppercase tracking-widest mb-4 text-start">
              {t("subtitle")}
            </p>

            <h2 className="text-5xl font-bold mb-8">
              {t("title")}
            </h2>

            <p className="text-gray-400 leading-8 text-lg text-start">
              {t("description1")}
            </p>

            <p className="text-gray-400 leading-8 text-lg mt-6 text-start">
              {t("description2")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              ["10+", "Technologies"],
              ["3+", "Major Projects"],
              ["AI", "Deep Learning"],
              ["Full", "Stack Development"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="border border-white/10 p-6 rounded-2xl bg-white/5"
              >
                <h3 className="text-3xl font-bold mb-2">{title}</h3>
                <p className="text-gray-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}