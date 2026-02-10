import { MOVIE_LIST, TOP_LIST } from "../../shared/lib/constants";
import LinkCategoriesMovies from "./ui/LinkCategoriesMovies";

import style from "./navBar.module.scss";
import { Link } from "react-router-dom";


interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavBar = ({isOpen, onClose}: IProps) => {
  

  return (
    <div className={`${style.navBar} ${isOpen ? style.visible : style.hidden}`}>
        <ul className={`list-reset`}>
          {TOP_LIST.map(({id, title, icon, nameIcon, url}) => (
            <li key={id}>
              <LinkCategoriesMovies url={url} onClose={onClose} title={title} icon={icon} nameIcon={nameIcon} />
        </li>
          ))}
        </ul>

        <ul>
          {MOVIE_LIST.map(({id, title, icon, nameIcon, url}) => (
            <li key={id}>
              <Link to={url} onClick={onClose}>
                <span>{title}</span>
                <img src={icon} alt={`иконка ${nameIcon}`} />
              </Link>
            </li>
          ))}
        </ul>
    </div>
  )
};

export default NavBar;
