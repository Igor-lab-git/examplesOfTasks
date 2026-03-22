import {Link, useLocation} from 'react-router-dom'
import pathRouter from '../../../shared/constants/pathRouter'
import {useLoginMutation, useRegistrationMutation} from "../../../app/store/redusers/cyberStoreApi.ts";
import React, {useState} from "react";

interface IServerError {
    data : {
        error: {status: number, message: string}
        message: string
    }
    status:  number
}

const AuthPage = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const pathName = useLocation();
    const isAuthPathName = pathName.pathname === pathRouter.AUTH_PATH;

const [register, { isLoading: reqLoad, isSuccess: reqSuccess, error: reqError }] = useRegistrationMutation();
const [login, { isLoading: loginLoad, isSuccess: loginSuccess, error: loginError }] = useLoginMutation();

    console.log( reqSuccess, loginSuccess, reqLoad, loginLoad, reqError, loginError);
const error = isAuthPathName ? loginSuccess : reqError

    console.log(error);
    console.log(error);


const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

        let statusMessage = "";
        let user;
    try {
        if(isAuthPathName) {
             user = await login({
                email,
                password
            }).unwrap();
            statusMessage = "Вы успешно авторизовались";
        } else  {
         user = await register({
            email,
            password
        }).unwrap();
            statusMessage = "Вы успешно зарегестрировались";
        };


        console.log(user)
    } catch (err) {
        const error = err as IServerError;
        const statusMessage = error?.data?.message;
        // setErrorText(message);
        alert(statusMessage);
    } finally {
        if(statusMessage) {
            alert(statusMessage);
        }
    }
}


  return (
    <div>
      <h1>{isAuthPathName ? "Авторизация" : "Регистрация"}</h1>
        {/*{error && 'data' in error && <h3 style={{ color: 'red' }}>{error.data.message}</h3>}*/}
      <div>
      <form action="#" onSubmit={handleSubmit}>
          <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder='Введите email...' />
          <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder='Введите пароль...' />
          <div style={{display: 'flex', columnGap: "35px"}}>
            {isAuthPathName ? (
                <p>Нет аккаунта?
                <Link to={pathRouter.REGISTRATION_PATH}>Зарегестрируйтесь</Link>
                </p>
            ) : (
                <p>Есть аккаунт?
                  <Link to={pathRouter.AUTH_PATH}>Войдите</Link>
                </p>
            )}
            <button type={'submit'}>{isAuthPathName ? "Войти" : "Регистрация"}</button>
          </div>
      </form>
      </div>
    </div>
  )
}

export default AuthPage
