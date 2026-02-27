import { MOVIE_CONTENT_LIST, MOVIE_GENRES_LIST, MOVIE_TOP_RANKINGS_LIST } from "../../shared/lib/constants";
import NavBarLinkCategory from "./ui/NavBarLinkCategory";
import style from "./navBar.module.scss";
import {type ForwardedRef, type JSX} from "react";


interface IProps {
  isOpen: boolean;
  onClose: () => void;
  ref: ForwardedRef<HTMLDivElement>;
  children: React.ReactNode;

};

const NavBar = ({isOpen, onClose, ref, children }: IProps): JSX.Element => {
    return (
        <div className={`${style.navBar} ${isOpen ? style.visible : style.hidden}`} ref={ref}>
            {children}
            <NavBarLinkCategory item={MOVIE_TOP_RANKINGS_LIST} onClose={onClose}/>
            <NavBarLinkCategory item={MOVIE_GENRES_LIST} onClose={onClose}/>
            <NavBarLinkCategory item={MOVIE_CONTENT_LIST} onClose={onClose}/>
        </div>
    )
};



export default NavBar ;
