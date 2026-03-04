import {  useState, type ReactNode } from "react";
import { ThemeModeContext } from "./ThemeModeContext";
import { getStateThemeLocalStorage, setStateThemeLocalStorage } from "./lib/storage";

interface IThemeContext {
    children: ReactNode;
};

const ThemeContext = ({children}: IThemeContext) => {

    const [theme, setTheme] = useState<"light" | "dark">(getStateThemeLocalStorage());

    setStateThemeLocalStorage(theme);

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
