import { useNavigate } from "react-router-dom";
import style from "./NavigationPage.module.scss";

interface INavigationPage {
  title?: string | null;
}

const NavigationPage = ({ title }: INavigationPage) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.containerNavigation}>
        <button className={`${style.navigationHomeBtn} ${style.navigationItem}`} onClick={() => navigate("/")}>на главную</button>
        <button className={`${style.navigationBackBtn} ${style.navigationItem}`} onClick={() => navigate(-1)}>назад</button>
        <span className={`${style.navigationTitltPage} ${style.navigationItem}`}>{title}</span>
      </div>
    </>
  );
};

export default NavigationPage;
