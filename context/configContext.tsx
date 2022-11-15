import { useState, createContext, ReactNode } from "react";

import { IntlProvider } from "react-intl";
import { es_MX, en_US } from '../languages/langs';

type Locale = "es-MX" | "en-US"
interface CtxProps {
  setDarkmode: (mode: string | null) => void;
  setLanguage: (language: langs) => void;
  darkEnabled: boolean;
  setDarkEnabled: (enabled: boolean) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  theme: string;
  setTheme: (theme: string) => void;
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const initialState = {
  setDarkmode: (mode: string | null) => {},
  setLanguage: (language: langs) => {},
  darkEnabled: false,
  setDarkEnabled: (enabled: boolean) => {},
  menuOpen: false,
  setMenuOpen: (open: boolean) => {},
  theme: "dark",
  setTheme: (theme: string) => {},
  locale: "en-US" as Locale,
  setLocale: (locale: Locale) => {},
};

const configContext = createContext<CtxProps>(initialState);

interface Props {
  children: ReactNode;
}

type langs = "es" | "en";

const ConfigProvider = ({ children }: Props) => {
  const [messages, setMessages] = useState<{}>(en_US);
  const [locale, setLocale] = useState<Locale>("en-US");
  const [theme, setTheme] = useState("dark");
  const [darkEnabled, setDarkEnabled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const setLanguage = (language: langs) => {
    switch (language) {
      case "es":
        setMessages(es_MX);
        setLocale("es-MX");
        break;
      case "en":
        setMessages(en_US);
        setLocale("en-US");
        break;
      default:
        setMessages(en_US);
        setLocale("en-US");
    }
  };

  const setDarkmode = (mode: string | null) => {
    switch (mode) {
      case "dark":
        setTheme("dark");
        break;
      case "":
        setTheme("");
        break;
      default:
        setTheme("dark");
        break;
    }
  };

  return (
    <configContext.Provider
      value={{
        setLanguage,
        setDarkmode,
        theme,
        setTheme,
        locale,
        setLocale,
        darkEnabled,
        setDarkEnabled,
        menuOpen,
        setMenuOpen,
      }}
    >
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </configContext.Provider>
  );
};

export { ConfigProvider, configContext };
