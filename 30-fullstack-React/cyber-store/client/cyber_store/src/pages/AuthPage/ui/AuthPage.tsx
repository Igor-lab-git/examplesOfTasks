import {Link, useLocation} from 'react-router-dom'
import pathRouter from '../../../shared/constants/pathRouter'

const AuthPage = () => {
const pathName = useLocation();

  const isAuthPathName = pathName.pathname === pathRouter.AUTH_PATH;
  // console.log('Current path:', location.pathname);
  return (
    <div>
      <h1>{isAuthPathName ? "Авторизация" : "Регистрация"}</h1>

      <div>
      <form action="#">
          <input type="email" placeholder='Введите email...' />
          <input type="password" placeholder='Введите пароль...' />
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
