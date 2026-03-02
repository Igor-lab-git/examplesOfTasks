import { createContext } from "react";

interface IThemeModeContext {
    theme: "light" | "dark";
    toggleTheme: () => void;
};

export const ThemeModeContext = createContext<IThemeModeContext | null>(null);