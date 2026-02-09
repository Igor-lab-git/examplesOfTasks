import type { JSX } from "react";
import { Link } from "react-router-dom";

interface ILinkCategoriesMovies {
    id: number;
    url: string;
    onClose: () => void;
    title: string;
    icon: string;
    nameIcon: string;
};

 const LinkCategoriesMovies = ({id, url, onClose, title, icon, nameIcon}: ILinkCategoriesMovies): JSX.Element => {
  return (
    <li key={id}>
        <Link to={url} onClick={onClose}>
            <span>{title}</span>
            <img src={icon} alt={`иконка ${nameIcon}`} />
        </Link>
    </li>
  )
};

export default LinkCategoriesMovies;
