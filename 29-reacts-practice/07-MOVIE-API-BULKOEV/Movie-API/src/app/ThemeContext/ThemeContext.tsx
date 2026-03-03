import { useState, type ReactNode } from "react";
import { ThemeModeContext } from "./ThemeModeContext";

interface IThemeContext {
    children: ReactNode;
};

const ThemeContext = ({children}: IThemeContext) => {

    const [theme, setTheme] = useState<"light" | "dark">("light");

    const toggleTheme = () => {
      setTheme((prev) => prev === "light" ? "dark" : "light");
    };

    const value = {theme, toggleTheme};

  return (
    <ThemeModeContext.Provider value={value}>
        {children}
    </ThemeModeContext.Provider>

  )
};

export default ThemeContext;
