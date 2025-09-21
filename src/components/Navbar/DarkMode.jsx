import React, { useEffect, useState } from "react";
import lightPng from "../../assets/DarkMode/lightPng.png";
import darkPng from "../../assets/DarkMode/darkPng.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const elements = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      elements.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      elements.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div>
      <img
        src={theme === "light" ? lightPng : darkPng}
        alt="theme toggle"
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </div>
  );
};

export default DarkMode;
