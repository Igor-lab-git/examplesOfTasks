import { MOVIE_CONTENT_LIST, MOVIE_GENRES_LIST, MOVIE_TOP_RANKINGS_LIST } from "../../shared/lib/constants";
import NavBarLinkCategory from "./ui/NavBarLinkCategory";
import style from "./navBar.module.scss";
import {type ForwardedRef, type JSX} from "react";


interface IProps {
  isOpen: boolean;
  onClose: () => void;
  ref: ForwardedRef<HTMLDivElement>;
};

const NavBar = ({isOpen, onClose, ref}: IProps): JSX.Element => {
    console.log("NavBar")
    return (
        <div className={`${style.navBar} ${isOpen ? style.visible : style.hidden}`} ref={ref}>
            <NavBarLinkCategory item={MOVIE_TOP_RANKINGS_LIST} onClose={onClose}/>
            <NavBarLinkCategory item={MOVIE_GENRES_LIST} onClose={onClose}/>
            <NavBarLinkCategory item={MOVIE_CONTENT_LIST} onClose={onClose}/>
        </div>
    )
};



export default NavBar ;
