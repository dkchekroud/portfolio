"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-white/10 py-8 text-center text-gray-500">
      © 2026 Kamelia Chekroud — {t("copyright")}
    </footer>
  );
}