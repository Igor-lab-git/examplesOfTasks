import {Alert, Button, Card, Container, Form, Row} from 'react-bootstrap';
import {Link, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../constants/consts.js";
import {login, registration} from '../http/userApi.js';
import {useContext, useState} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../context/Context.js";
import {useNavigate} from "react-router";

const Auth = observer(() => {

    const {pathname} = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const {user} = useContext(Context);

    const isLogin = pathname === LOGIN_ROUTE; //в зависимости показывать страницу login в противном случае показывать страницу регистрации

    const click = async () => {
        try {
            let data = null;
            setErrorMessage("");
            if(isLogin) {
                data = await login(email, password);
            } else  {
                data = await registration(email, password);
                console.log(data, "Auth");
            }

            user.setUser(data);
            user.setIsAuth(true);
            navigate(SHOP_ROUTE);
        } catch (e) {
            // 👇 Обрабатываем ошибку от сервера
            if (e.response?.data?.message) {
                setErrorMessage(e.response.data.message);
            }
        }
    };

    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}}>
            <Card style={{width: 700}} className='p-5'>
                <h2 className='text-center'>{isLogin ? "Авторизация" : "Регистрация"}</h2>
                {/* 👇 Блок с ошибкой */}
                {errorMessage && (
                    <Alert variant="danger" className='mt-3'>
                        {errorMessage}
                    </Alert>
                )}
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите ваш email...'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>

                    <Form.Control
                        className='mt-3'
                        placeholder='Введите ваш password...'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>

                    <Row className='d-flex justify-content-between mt-3'>
                        {isLogin ? <div>
                                <span>Нет аккаунта? </span>
                                <Link to={REGISTRATION_ROUTE}>Зарегестрируйтесь!</Link>
                            </div>
                            :
                            <div>
                                <span>Есть аккаунт? </span>
                                <Link to={LOGIN_ROUTE}>Войдите!</Link>
                            </div>
                        }
                        <Button
                            className="mt-3 align-self-end"
                            onClick={click}>{isLogin ? "Войти" : "Регистрация"} </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
});

export default Auth
//2-05