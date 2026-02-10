import type { JSX } from "react";
import { Link } from "react-router-dom";

interface ILinkCategoriesMovies {
    url: string;
    onClose: () => void;
    title: string;
    icon: string;
    nameIcon: string;
};

 const LinkCategoriesMovies = ({ url, onClose, title, icon, nameIcon}: ILinkCategoriesMovies): JSX.Element => {
  return (
    <>
        <Link to={url} onClick={onClose}>
            <span>{title}</span>
            <img src={icon} alt={`иконка ${nameIcon}`} />
        </Link>
    </>
  )
};

export default LinkCategoriesMovies;
