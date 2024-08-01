import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import i18n, { TFunction } from "i18next";

interface II18nContext {
  t: TFunction;
  language: string;
  detectKey: number;
  changeLanguage: (lng: string) => Promise<TFunction<"translation", undefined>>;
}
interface I18nProviderProps {
  children: ReactNode;
}

function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const I18nContext = createContext<II18nContext | undefined>(undefined);

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(i18n.language);
  const [detectKey, setKey] = useState(0);

  useEffect(() => {
    i18n.on("languageChanged", (lng) => {
      setKey(generateRandomNumber(0, 9999));
      setLanguage(lng);
    });
  }, []);

  return (
    <I18nContext.Provider
      value={{
        t: i18n.t,
        changeLanguage: i18n.changeLanguage,
        language,
        detectKey,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};
