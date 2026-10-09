import { createContext, useContext, useEffect, useState } from "react";
import translations from "../translations";

const LanguageContext = createContext();

const TITLES = {
  fr: "KUISSODE Hubert Joseph | Développeur Fullstack",
  en: "KUISSODE Hubert Joseph | Fullstack Developer",
};

function getInitialLanguage() {
  try {
    const stored = window.localStorage.getItem("language");
    if (stored === "fr" || stored === "en") return stored;
  } catch (e) {}
  return "fr";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = TITLES[language];
    try {
      window.localStorage.setItem("language", language);
    } catch (e) {}
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
