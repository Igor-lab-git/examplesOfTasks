import { useContext } from "react";
import { Context } from "../context/Context";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Container } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { SHOP_ROUTE } from "../constants/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context);


  return (
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link style={{color: "white"}} to={SHOP_ROUTE}>Sale to device</Link>
          {user.isAuth ? 
          <Nav className="ml-auto" style={{color: "white"}}>
            <Button variant={"outline-light"}>Админ панель</Button>
            <Button variant={"outline-light"} className="ms-3">Войти</Button>
          </Nav>
          : 
          <Nav className="ml-auto" style={{color: "white"}}>
            <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
          </Nav>
          }
        </Container>
      </Navbar>
  );
});

export default NavBar;
