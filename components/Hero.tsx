import { useTranslations } from "next-intl";


export default function Hero() {

  const t = useTranslations("hero");

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-6">

      <p className="text-gray-400 mb-4 tracking-widest">
        {t("subtitle")}
      </p>

      <h1 className="text-6xl md:text-8xl font-bold">
        {t("title")}
      </h1>

      <p className="mt-6 text-gray-400 max-w-2xl text-lg">
        {t("description")}
      </p>

      <a
        href="/Academic cv - chekroud kamelia.pdf"
        className="mt-10 border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
      >
        {t("cv")}
      </a>

    </section>
  );
}