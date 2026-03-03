import { MOVIE_CONTENT_LIST, MOVIE_GENRES_LIST, MOVIE_TOP_RANKINGS_LIST } from "../../shared/lib/constants";
import NavBarLinkCategory from "./ui/NavBarLinkCategory";
import style from "./navBar.module.scss";
import {useContext, type ForwardedRef, type JSX} from "react";
import { ThemeModeContext } from "../../app/ThemeContext/ThemeModeContext";


interface IProps {
  isOpen: boolean;
  onClose: () => void;
  ref: ForwardedRef<HTMLDivElement>;
  children: React.ReactNode;

};

const NavBar = ({isOpen, onClose, ref, children }: IProps): JSX.Element => {

      const  context = useContext(ThemeModeContext);
      
       if(!context ) {
           throw new Error('SwitchingThemes must be used within ThemeProvider');
      };
        const {theme} = context;

    return (
        <div className={`${style.navBar} ${isOpen ? style.visible : style.hidden} ${theme === "dark" ? style.dark : "" }`} ref={ref}>
            {children}
            <NavBarLinkCategory item={MOVIE_TOP_RANKINGS_LIST} onClose={onClose}/>
            <NavBarLinkCategory item={MOVIE_GENRES_LIST} onClose={onClose}/>
            <NavBarLinkCategory item={MOVIE_CONTENT_LIST} onClose={onClose}/>
        </div>
    )
};



export default NavBar ;
