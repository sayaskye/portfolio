import { ReactNode, useContext, useEffect } from "react";

import Navbar from "./Navbar";
import Spacer from "./Spacer";

import { configContext } from "../context/configContext";
interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  const { theme, setTheme, setDarkEnabled, setLanguage } =
    useContext(configContext);
  useEffect(() => {
    if (window) {
      const themeStorage = localStorage.getItem("theme");
      const langStorage = localStorage.getItem("lang");

      if (themeStorage !== null) {
        if (themeStorage === "dark") {
          setTheme("dark");
        } else {
          setTheme("");
        }
        if (themeStorage === "dark") {
          setDarkEnabled(false);
        } else {
          setDarkEnabled(true);
        }
      } else {
        localStorage.setItem("theme", "dark");
        setTheme("dark");
        setDarkEnabled(false);
      }

      if (langStorage !== null) {
        if (langStorage === "es-MX") {
          setLanguage("es-MX");
        } else {
          setLanguage("en-US");
        }
      } else {
        localStorage.setItem("lang", "en-US");
        setLanguage("en-US");
      }
    }
  }, []);
  return (
    <div className={`${theme}`}>
      <div className="flex">
        <div className="fixed z-50">
          <Navbar />
        </div>
        <Spacer />
        {children}
      </div>
    </div>
  );
};

export default Layout;
