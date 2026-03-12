import { useContext } from "react";
import { Context } from "../context/Context";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Container } from 'react-bootstrap';
import {Link, useNavigate} from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../constants/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    }; //при нажатии на кнопку выйти

  return (
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link style={{color: "white"}} to={SHOP_ROUTE}>Sale to device</Link>
          {user.isAuth ? 
          <Nav className="ml-auto" style={{color: "white"}}>
            <Button variant={"outline-light"} onClick={(() => navigate(ADMIN_ROUTE))}>Админ панель</Button>
            <Button variant={"outline-light"} className="ms-3" onClick={() => logOut()}>Выйти</Button>
          </Nav>
          : 
          <Nav className="ml-auto" style={{color: "white"}}>
            <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
          </Nav>
          }
        </Container>
      </Navbar>
  );
});

export default NavBar;

//2-14