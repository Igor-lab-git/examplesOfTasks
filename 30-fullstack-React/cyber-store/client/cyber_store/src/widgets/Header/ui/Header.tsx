import type { JSX } from "react";
import {Link} from "react-router-dom";
import logo from "../../../shared/assets/icons/logo/logo.svg";

const Header = (): JSX.Element => {
  return (
    <div>
      <Link to="/">
          <img src={logo} alt=""/>
      </Link>
        <Link to="/detailed">
          <span>detailed</span>
      </Link>
    </div>
  );
};

export default Header;
