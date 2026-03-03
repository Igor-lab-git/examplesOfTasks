import style from "../DetailedPage.module.scss";

interface IDetailedDescription {
  description?: string | null;
  theme: "light" | "dark";
}

const DetailedDescription = ({ description, theme }: IDetailedDescription) => {
  return (
    <>
      <p className={`${style.description} ${theme === "dark" ? style.descriptionDark : ""}`}>{description ? description : "Описание отсутствует"}</p>
    </>
  );
};

export default DetailedDescription;
