import { useState, createContext, ReactNode } from "react";
import EnglishMessages from "../languages/en-US.json";
import SpanishMessages from "../languages/es-MX.json";
import { IntlProvider } from "react-intl";

interface CtxProps {
  setDarkmode: (mode: string | null) => void;
  setLanguage: (language: langs) => void;
  darkEnabled: boolean;
  setDarkEnabled: (enabled: boolean) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  theme: string;
  setTheme: (theme: string) => void;
  locale: string;
  setLocale: (locale: string) => void;
}

const initialState = {
  setDarkmode: (mode: string | null) => {},
  setLanguage: (language: langs) => {},
  darkEnabled: false,
  setDarkEnabled: (enabled: boolean) => {},
  menuOpen: false,
  setMenuOpen: (open: boolean) => {},
  theme: "",
  setTheme: (theme: string) => {},
  locale: "",
  setLocale: (locale: string) => {},
};

const configContext = createContext<CtxProps>(initialState);

interface Props {
  children: ReactNode;
}

type langs = "es" | "en";

const ConfigProvider = ({ children }: Props) => {
  const [messages, setMessages] = useState(EnglishMessages);
  const [locale, setLocale] = useState("en-US");
  const [theme, setTheme] = useState("dark");
  const [darkEnabled, setDarkEnabled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const setLanguage = (language: langs) => {
    switch (language) {
      case "es":
        setMessages(SpanishMessages);
        setLocale("es-MX");
        break;
      case "en":
        setMessages(EnglishMessages);
        setLocale("en-US");
        break;
      default:
        setMessages(EnglishMessages);
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
