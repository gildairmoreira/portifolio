import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptTranslation from "./locales/pt/pt.json";
import enTranslation from "./locales/en/en.json";
import esTranslation from "./locales/es/es.json";

const resources = {
  en: {
    translation: {
      'Portifolio': "Portfolio",
      'Inicio': "Home",
      "Sobre mim": "About me",
      'Skills': "Skills",
      'Formação': "Education",
     'Projetos': "Projects",
    },
  },

  pt: {
    translation: {
      Portifolio: "PortifoliIIIo",
      Inicio: "Inicio",
      "Sobre mim": "Sobre mim",
      Skills: "Skills",
      Formação: "Formação",
      Projetos: "Projetos",
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "en",
  resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
