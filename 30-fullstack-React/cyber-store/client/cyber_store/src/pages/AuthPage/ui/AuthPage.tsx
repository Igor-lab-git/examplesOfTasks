import {Link, useLocation} from 'react-router-dom'
import pathRouter from '../../../shared/constants/pathRouter'
import {useLoginMutation, useRegistrationMutation} from "../../../app/store/redusers/cyberStoreApi.ts";
import React, {useState} from "react";
import ModalWindow from '../../../shared/ui/ModalWindow/ModalWindow.tsx';

interface IServerError {
    data : {
        error: {status: number, message: string}
        message: string
    }
    status:  number
};

const AuthPage = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('');
    const [isOpen, setIsOpen] = useState(false);
    const pathName = useLocation();
    const isAuthPathName = pathName.pathname === pathRouter.AUTH_PATH;

const [register, { isLoading: reqLoad, isSuccess: reqSuccess, error: reqError }] = useRegistrationMutation();
const [login, { isLoading: loginLoad, isSuccess: loginSuccess, error: loginError }] = useLoginMutation();

    console.log( reqSuccess, loginSuccess, reqLoad, loginLoad, reqError, loginError);
// const error = isAuthPathName ? loginSuccess : reqError

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
        let statusMessage = "";
        let user;
    try {
        if(isAuthPathName) {
             user = await login({
                email,
                password,
                role: "USER"
            }).unwrap();
            statusMessage = "Вы успешно авторизовались";
        } else  {
         user = await register({
            email,
            password,
             role: "USER"
        }).unwrap();
            statusMessage = "Вы успешно зарегестрировались";
            return (
                <ModalWindow isOpen={isOpen} onClose={() => setIsOpen(false)} >
                    <h2>"Вы успешно зарегестрировались"</h2>
                </ModalWindow>
            )
        };
        // const decodedToken = jwtDecode(user.token);
        // console.log(decodedToken, "decodedToken")
        // console.log(user.token, "user.token")
        console.log(user);
    } catch (err) {
        const error = err as IServerError;
        const statusMessage = error?.data?.message;
        // setErrorText(message);
        alert(statusMessage);
    } finally {
        if(statusMessage) {
            alert(statusMessage);
        }
        <ModalWindow isOpen={isOpen} onClose={() => setIsOpen(false)} >
                    <h2>statusMessage</h2>
                </ModalWindow>
    }
};

    console.log(localStorage.getItem("token"))
    console.log(localStorage.getItem("user"))

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

// 2. При загрузке приложения — проверяем токен и восстанавливаем пользователя
// tsx
// // app/App.tsx или main.tsx
// import { jwtDecode } from "jwt-decode";
//
// const token = localStorage.getItem("token");
// if (token) {
//     try {
//         const decoded = jwtDecode(token);
//         const isExpired = decoded.exp * 1000 < Date.now();
//
//         if (!isExpired) {
//             // Сохраняем пользователя в Redux
//             store.dispatch(setUser({
//                 id: decoded.id,
//                 email: decoded.email,
//                 role: decoded.role
//             }));
//         } else {
//             // Токен просрочен — удаляем
//             localStorage.removeItem("token");
//         }
//     } catch (error) {
//         localStorage.removeItem("token");
//     }
// }

// ================
// // ✅ 1. Токен уже в localStorage (сохранил transformResponse)
//
// // ✅ 2. Декодируем токен
// const decoded = jwtDecode(result.token);
//
// // ✅ 3. Сохраняем данные пользователя в Redux
// dispatch(setUser({
//     id: decoded.id,
//     email: decoded.email,
//     role: decoded.role
// }));
//
// // ✅ 4. Дублируем в localStorage для восстановления
// localStorage.setItem("user", JSON.stringify({
//     id: decoded.id,
//     email: decoded.email,
//     role: decoded.role
// }));
//
// // ✅ 5. Перенаправляем на главную
// navigate('/');

