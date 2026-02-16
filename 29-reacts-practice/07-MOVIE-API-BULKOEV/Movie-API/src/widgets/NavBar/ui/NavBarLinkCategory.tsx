import { Link } from "react-router-dom";
import style from "../navBar.module.scss";

interface IItem {
  id: string;
  title: string;
  icon: string;
  nameIcon: string;
  path: string;
}

interface INavBarLinkCategory {
  item: IItem[];
  onClose: () => void;
}

const NavBarLinkCategory = ({ item, onClose }: INavBarLinkCategory) => {
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
                <span className={style.itemTitlt}>{title}</span>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default NavBarLinkCategory;
