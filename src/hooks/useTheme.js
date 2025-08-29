import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      // check saved preference
      const saved = localStorage.getItem("theme");
      if (saved) return saved;

      // fallback → system theme
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else if (theme === "system")  {
      const newTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
        const oldTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "light"
        : "dark";
      root.classList.remove(oldTheme);
      root.classList.add(newTheme);
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    } 

    localStorage.setItem("theme", theme);
  }, [theme]);

  //  Keep in sync with system if no manual preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      const saved = localStorage.getItem("theme");
      if (!saved) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // user toggles → override system
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  const toggleLightTheme = () => {
    const newTheme = "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  const toggleDarkTheme = () => {
    const newTheme = "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  //  let user reset to system preference
  const resetToSystem = () => {
    localStorage.removeItem("theme");
    setTheme("system");
  };

  return { theme, toggleTheme, toggleLightTheme, toggleDarkTheme, resetToSystem };
}
