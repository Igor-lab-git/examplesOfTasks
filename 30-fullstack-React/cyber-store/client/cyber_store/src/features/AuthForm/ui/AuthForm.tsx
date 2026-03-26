import {Link} from 'react-router-dom'
import pathRouter from '../../../shared/constants/pathRouter'
import {useLoginMutation, useRegistrationMutation} from "../../../app/store/redusers/cyberStoreApi.ts";
import React, {useState, type JSX} from "react";
// import ModalWindow from '../../../shared/ui/ModalWindow/ModalWindow.tsx';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../app/store/redusers/userSlice.ts';
// import type { RootState } from '../../../app/store/store.ts';


interface IServerError {
    data : {
        error: {status: number, message: string}
        message: string
    }
    status:  number
};

interface IAuthForm {
  isAuthPathName: boolean;
};

const AuthForm = ({isAuthPathName}: IAuthForm): JSX.Element => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('');
    const [validMessage, setValidMessage] = useState<string>('');
    const duspatch = useDispatch();


const [register, { isLoading: reqLoad, isSuccess: reqSuccess, error: reqError }] = useRegistrationMutation();
const [login, { isLoading: loginLoad, isSuccess: loginSuccess, error: loginError }] = useLoginMutation();

    console.log( reqSuccess, loginSuccess, reqLoad, loginLoad, reqError, loginError);
const error = isAuthPathName ? loginSuccess : reqError

console.log(error);

const validateForm = () => {
 console.log("email значение:", `"${email}"`);
    if(!email || email.trim().length === 0) {
       setValidMessage("Поле email обязательно для заполнения :(");
       return false
    }
    if(!email.includes("@")) {
        setValidMessage("Введите корректный email (должен содержать @)");
        return false
    };

    if(!password || password.trim().length === 0) {
        setValidMessage("Поле пароль обязательно для заполнения :(");
        return false
    }

    if(password.trim().length < 5) {
        setValidMessage("Пароль должен содеражать не менее 5 символов :(");
        return false
    }
    setValidMessage("");
    return true;
}


const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
        let response;
        let message = ""
        if(!validateForm()) {
            return;
        }
    try {
        if(isAuthPathName) {
             response = await login({
                email,
                password,
            }).unwrap();
            message = "Вы успешно авторизовались"
            
        } else  {
         response = await register({
             email,
            password,
        }).unwrap();
            message = "Вы успешно зарегестрировались";
        };
        // setStatusMessage(message);
        console.log('📦 response:', response);
        // console.log('📦 response.data:', response.data);
        if (response?.id && response?.email) {
            const userData = {
                id: response.id,
                email: response.email,
                role: response.role
            };
            duspatch(setUser(userData));
        }
        alert(message);
    } catch (err) {
        const error = err as IServerError;
        console.log(error);
    } 
};

  return (
        <form action="#" onSubmit={handleSubmit} noValidate>
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
                <span>{validMessage ? validMessage : ""}</span>
            </div>
        </form>
  )
}

export default AuthForm

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

