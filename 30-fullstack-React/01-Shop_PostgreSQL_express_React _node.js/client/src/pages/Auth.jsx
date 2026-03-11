import {Button, Card, Container, Form, Row} from 'react-bootstrap';
import {Link, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../constants/consts.js";
import { registration } from '../http/userApi.js';

const Auth = () => {

    const {pathname} = useLocation();

    const isLogin = pathname === LOGIN_ROUTE; //всзависимости показывать страницу login в противном случае показывать страницу регистрации

    const signIn = async () => {
        const response = await registration();
        console.log(response);
        
    };
    console.log(signIn());
    

    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}}>
            <Card style={{width: 700}} className='p-5'>
                <h2 className='text-center'>{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите ваш email...'/>

                    <Form.Control
                        className='mt-3'
                        placeholder='Введите ваш password...'/>

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
                        <Button className="mt-3 align-self-end">{isLogin ? "Войти" : "Регистрация"} </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
};

export default Auth
//2-05