import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { translationEn } from "./translationEn";
import { translationPl } from "./translationPl";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: translationEn },
      pl: { translation: translationPl },
    },
    fallbackLng: "en",
  });

export default i18n;
