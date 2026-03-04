export const getStateThemeLocalStorage = (): "light" | "dark" => {
  try {
    const getTheme = localStorage.getItem("theme");
    if (getTheme) {
      return JSON.parse(getTheme);
    }
  } catch (error) {
    console.log(error);
  }
  return "light";
};

export const setStateThemeLocalStorage = (theme: "light" | "dark") => {
  try {
    if (theme) {
      localStorage.setItem("theme", JSON.stringify(theme));
    } else{
      localStorage.setItem("theme", JSON.stringify("light"));
    }
  } catch (error) {
    console.log(error);
  }
};
