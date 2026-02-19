import style from "../DetailedPage.module.scss";

interface IDetailedDescription {
  description?: string | null;
}

const DetailedDescription = ({ description }: IDetailedDescription) => {
  return (
    <>
      <p className={style.description}>{description ? description : "Описание отсутствует"}</p>
    </>
  );
};

export default DetailedDescription;
