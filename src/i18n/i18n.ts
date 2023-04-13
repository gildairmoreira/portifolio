import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./locales/resourses";


i18n.use(initReactI18next).init({
  lng: "pt",
  resources,
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
