import { useContext, useEffect } from "react";
import { configContext } from "../context/configContext";
import Navbar from "./Navbar";
import FakeNavbar from "./FakeNav";
import React from "react";
const Layout = ({ children }) => {
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
