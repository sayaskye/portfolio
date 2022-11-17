import { ReactNode, useContext, useEffect } from "react";

import Navbar from "./Navbar";
import FakeNavbar from "./FakeNav";

import { configContext } from "../context/configContext";
interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  const { theme, setDarkEnabled, setLanguage } = useContext(configContext);
  useEffect(() => {
    if (window) {
      const themeStorage = localStorage.getItem("theme");
      const langStorage = localStorage.getItem("lang");

      if (themeStorage !== null) {
        if (themeStorage === "dark") {
          setDarkEnabled(false);
        } else {
          setDarkEnabled(true);
        }
      } else {
        localStorage.setItem("theme", "dark");
      }

      if (langStorage !== null) {
        if (langStorage === "es-MX") {
          setLanguage("es-MX");
        } else {
          setLanguage("en-US");
        }
      } else {
        localStorage.setItem("lang", "en-US");
      }
    }
  }, []);
  return (
    <div className={`${theme}`}>
      <div className="flex">
        <div className="fixed z-50">
          <Navbar />
        </div>
        <FakeNavbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
