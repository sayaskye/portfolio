import { ReactNode, useContext, useEffect } from "react";

import Navbar from "./Navbar";
import FakeNavbar from "./FakeNav";

import { configContext } from "../context/configContext";
interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  const { theme, setTheme } = useContext(configContext);
  useEffect(() => {
    if (window) {
      const themeStorage = localStorage.getItem("theme");
      if (themeStorage === "dark") {
        setTheme("dark");
      } else {
        setTheme("");
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
