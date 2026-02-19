import style from "../DetailedPage.module.scss";

interface IDetailedName {
  nameRu?: string | null;
  nameOriginal?: string | null;
  year?: number | null;
}

const DetailedName = ({ nameRu, nameOriginal, year }: IDetailedName) => {
  return (
    <>
      <h1 className={style.nameMovie}>{nameRu ? nameRu : nameOriginal} <span>{`(${year})`}</span></h1>
    </>
  );
};

export default DetailedName;
