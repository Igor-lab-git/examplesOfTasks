import {Link} from 'react-router-dom'
import pathRouter from '../../../shared/constants/pathRouter'
import React, {useCallback, useState, type JSX} from "react";
// import ModalWindow from '../../../shared/ui/ModalWindow/ModalWindow.tsx';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../app/store/redusers/userSlice.ts';
import useAuthApi from "../model/authApi.ts";
import { validateFormEmail, validateFormPassword } from "../lib/authUtils.ts";
import mailIcon from "../../../shared/assets/icons/authorization/mail-icon.svg";
import castleIcon from "../../../shared/assets/icons/authorization/castle-icon.svg";
import eyeIcon from "../../../shared/assets/icons/authorization/eye-icon.svg";
import style from "./AuthForm.module.scss";
import { NotificationModal } from '../../../shared/ui/index.ts';


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
    const [validErrorEmail, setValidErrorEmail] = useState<string[]>([]);
    const [validErrorPassword, setValidErrorPassword] = useState<string[]>([]);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [messageModal, setmMessageModal] = useState<string>("");
    const [typeMessageModal, setTypeMessageModal] = useState<"success" | "error">("success");
    const dispatch = useDispatch();

    const {authRequest} = useAuthApi();


const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
        let response;

        const errorMessageEmail = validateFormEmail(email);
        const errorMessagePassword = validateFormPassword(password);
        if(errorMessageEmail.length > 0 || errorMessagePassword.length > 0) {
            setValidErrorEmail(errorMessageEmail);
            setValidErrorPassword(errorMessagePassword);
            return;
        } else {
            setValidErrorEmail([]);
            setValidErrorPassword([]);
        };

    try {
        if(isAuthPathName) {
            response =  await authRequest.loginRequest(email, password)
            setmMessageModal("Вы успешно авторизовались");
            
        } else  {
            response = await authRequest.registrationRequest(email, password);
            setmMessageModal("Вы успешно зарегестрировались");
        };
        setTypeMessageModal("success");
        // console.log('📦 response:', response);
        if (response?.id && response?.email) {
            const userData = {
                id: response.id,
                email: response.email,
                role: response.role
            };
            dispatch(setUser(userData));
        }
        setIsOpenModal(true);
    } catch (err) {
        const error = err as IServerError;
        if(error.data.message) {
            setmMessageModal(error.data.message);
            setTypeMessageModal("error");
            setIsOpenModal(true);
        }
        console.log(error);
    } 
};

    const handleCloseModal = useCallback(() => {
        setIsOpenModal(false);
    }, []);

  return (
      <>
      <NotificationModal 
        isOpenModal={isOpenModal} 
        messageModal={messageModal} 
        typeMessageModal={typeMessageModal}
        handleCloseModal={handleCloseModal}/>

        <form
          className={style.form_element}
          onSubmit={handleSubmit}
          noValidate>

          <div className={style.container_fields_elements}>
              <div className={style.field_input_element}>
                  <label className={style.input_label} htmlFor="email">Email</label>
                  <div className={style.wrapper_input}>
                    <img className={style.input_icon_email} src={mailIcon} alt="" width="20" height="15"/>
                    <input
                        id="email"
                        className={style.input_email}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder='Введите email...'/>
                  </div>
                  <div className={style.error_wrapper_message}>
                    {validErrorEmail ? (
                        validErrorEmail.map((text, index) => (
                            <span className={style.error_message} key={index}>{text}</span>
                        )) 
                    ) : ""}
                  </div>
              </div>

              <div className={style.field_input_element}>
                  <label className={style.input_label} htmlFor="email">Пароль</label>
                  <div  className={style.wrapper_input}>
                    <img className={style.input_icon_password} src={castleIcon} alt="" width="20" height="22"/>
                    <input
                        id='password'
                        className={style.input_password}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder='Введите пароль...'/>
                    <img className={style.input_icon_password_eye} src={eyeIcon} alt="" width="20" height="17"/>
                  </div>
                  <div className={style.error_wrapper_message}>
                    {validErrorPassword ? (
                        validErrorPassword.map((text, index) => (
                            <span className={style.error_message} key={index}>{text}</span>
                        )) 
                    ) : ""}
                  </div>
              </div>
          </div>

          <button
              className={style.button_form}
              type={'submit'}>
              <span className={style.button_title}>
                  {isAuthPathName ? "Войти" : "Регистрация"}
              </span>
          </button>

          <div className={style.form_footer}>
              {isAuthPathName ? (
                  <p className={style.form_footer_text}>
                      Ещё не с нами?
                      <Link className={style.form_footer_link}
                            to={pathRouter.REGISTRATION_PATH}>Зарегестрируйтесь</Link>
                  </p>
              ) : (
                  <p className={style.form_footer_text}>
                      Уже зарегистрированы?
                      <Link className={style.form_footer_link} to={pathRouter.AUTH_PATH}>Войдите</Link>
                  </p>
              )}
          </div>

      </form>
      </>
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

