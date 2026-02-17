import { Link } from "react-router-dom";
import style from "../HomePage.module.scss";

interface IHomeHeaderLink {
  title: string;
  url: string;
}

const HomeHeaderLink = ({ title, url }: IHomeHeaderLink) => {
  return (
    <>
      <Link to={url}>
        <h2 className={style.titleLink}>{title}</h2>
      </Link>
    </>
  );
};

export default HomeHeaderLink;
