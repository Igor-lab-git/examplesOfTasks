import style from "../DetailedPage.module.scss";

interface IDetailedName {
  nameRu?: string | null;
  nameOriginal?: string | null;
  year?: number | null;
  theme: "light" | "dark";
};

const DetailedName = ({ nameRu, nameOriginal, year, theme }: IDetailedName) => {
  return (
    <>
      <h1 className={`${style.nameMovie} ${theme === "dark" ? style.nameMovieDark : ""}`}>{nameRu ? nameRu : nameOriginal} <span>{`(${year})`}</span></h1>
    </>
  );
};

export default DetailedName;
