import { Link } from "react-router-dom";
import style from "../navBar.module.scss";
import { useContext } from "react";
import { ThemeModeContext } from "../../../app/ThemeContext/ThemeModeContext";
import type { JSX } from "@emotion/react/jsx-runtime";

interface IItem {
  id: string;
  title: string;
  icon: string;
  nameIcon: string;
  path: string;
};

interface INavBarLinkCategory {
  item: IItem[];
  onClose: () => void;
};

const NavBarLinkCategory = ({ item, onClose }: INavBarLinkCategory): JSX.Element => {

    const  context = useContext(ThemeModeContext);
        
         if(!context ) {
             throw new Error('SwitchingThemes must be used within ThemeProvider');
        };
          const {theme} = context;

  return (
    <>
      <ul className={style.listList}>
        {item &&
          item.map(({ id, title, icon, nameIcon, path }) => (
            <li key={id} className={style.itemCategory}>
              <Link 
                to={path} 
                onClick={onClose}
                className={style.itemLink}>
                <img src={icon} alt={nameIcon} />
                <span className={`${style.itemTitlt} ${theme === "dark" ? style.dark : ""}`}>{title}</span>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default NavBarLinkCategory;
