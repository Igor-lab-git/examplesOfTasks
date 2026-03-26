import { useLocation } from "react-router-dom";
import pathRouter from "../../../shared/constants/pathRouter";
import type { JSX } from "react";
import { AuthForm } from "../../../features/AuthForm";

const AuthPage = (): JSX.Element => {
  const pathName = useLocation();

  const isAuthPathName = pathName.pathname === pathRouter.AUTH_PATH;

  return (
    <div>
      <h1>{isAuthPathName ? "Авторизация" : "Регистрация"}</h1>
      <div>
        <AuthForm isAuthPathName={isAuthPathName}/>
      </div>
    </div>
  );
};

export default AuthPage;

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
